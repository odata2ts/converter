import { ConverterPackage, ValueConverterType } from "@odata2ts/converter-api";
import { ODataTypesV2, ODataTypesV4, ODataVersions } from "@odata2ts/odata-core";
import {
  RuntimeConverterPackage,
  TypeConverterConfig,
  ValueConverterChain,
  ValueConverterImport,
} from "./ConverterModels";

type MappedConverter = ValueConverterType & { package: string; toModule?: string };
// we use an array of converters because of converters which fix stuff, mapping from and to the identical type
type MappedConverters = Map<string, Array<MappedConverter>>;

export type MappedConverterChains = Map<string, ValueConverterChain>;

/**
 * Performs a dynamic import of each converter package and returns essential meta infos.
 *
 * @param converters
 */
function isConverterPackage(candidate: unknown): candidate is ConverterPackage {
  return (
    !!candidate &&
    typeof (candidate as ConverterPackage).id === "string" &&
    Array.isArray((candidate as ConverterPackage).converters)
  );
}

/**
 * Checks the meta information every converter must provide, no matter how it was loaded.
 * Without this the first malformed converter surfaces as a TypeError deep within the mapping step,
 * naming neither the package nor the converter it came from.
 */
function isValueConverter(candidate: unknown): candidate is ValueConverterType {
  if (!candidate || typeof candidate !== "object") {
    return false;
  }
  const { id, from, to } = candidate as ValueConverterType;
  const validFrom =
    typeof from === "string"
      ? !!from
      : Array.isArray(from) && !!from.length && from.every((f) => !!f && typeof f === "string");
  return typeof id === "string" && !!id && validFrom && typeof to === "string" && !!to;
}

function describeConverter(candidate: unknown) {
  const id = (candidate as ValueConverterType | undefined)?.id;
  return typeof id === "string" && id ? `Converter "${id}"` : "Converter";
}

const CONVERTER_CONTRACT_HINT = `requires a non-empty string "id", a non-empty string or string array "from" and a non-empty string "to"`;

async function doLoad(converters: Array<TypeConverterConfig>): Promise<Array<RuntimeConverterPackage>> {
  return Promise.all(
    converters.map((conv) => {
      // dynamic import => works only for Node.js
      return import(conv.module)
        .catch((e) => {
          throw new Error(`Failed to load module "${conv.module}"!`, { cause: e });
        })
        .then((module) => {
          let converters: Array<ValueConverterType>;

          // load converter directly by named import
          if (typeof conv.use?.length === "number") {
            converters = [];
            for (let convId of conv.use) {
              const loaded = module[convId];
              if (!loaded) {
                throw new Error(`Converter with id "${convId}" doesn't exist in module "${conv.module}"!`);
              }
              if (!isValueConverter(loaded)) {
                throw new Error(
                  `Export "${convId}" of module "${conv.module}" is not a valid converter: ${CONVERTER_CONTRACT_HINT}!`,
                );
              }
              converters.push(loaded);
            }
          }
          // use converter list from default export
          else {
            let candidate = module.config || module.default;
            // some bundlers' CJS/ESM interop double-wraps the default export (candidate.default)
            // instead of exposing the ConverterPackage directly - unwrap one more level if needed
            if (!isConverterPackage(candidate) && isConverterPackage(candidate?.default)) {
              candidate = candidate.default;
            }
            if (!isConverterPackage(candidate)) {
              throw new Error(`Default export of loaded module "${conv.module}" doesn't conform to specification!`);
            }
            converters = candidate.converters;

            const invalidIndex = converters.findIndex((converter) => !isValueConverter(converter));
            if (invalidIndex >= 0) {
              throw new Error(
                `${describeConverter(converters[invalidIndex])} at index ${invalidIndex} of module "${conv.module}" is not a valid converter: ${CONVERTER_CONTRACT_HINT}!`,
              );
            }
          }

          return {
            package: conv.module,
            converters,
          };
        });
    }),
  );
}

/**
 * Collect converters by their source data type (attribute "from").
 * Last definition wins.
 *
 * @param converterPkgs
 */
function mapConvertersBySource(converterPkgs: Array<RuntimeConverterPackage>): MappedConverters {
  return converterPkgs.reduce<MappedConverters>((collector, converterPkg) => {
    for (let converter of converterPkg.converters) {
      const froms = typeof converter.from === "string" ? [converter.from] : converter.from;
      for (let from of froms) {
        const [fromType] = getPropTypeAndModule(from);
        const [toType, toModule] = getPropTypeAndModule(converter.to);

        const result: MappedConverter = {
          package: converterPkg.package,
          id: converter.id,
          from: fromType,
          to: toType,
          toModule,
        };

        const prev = collector.get(from);
        if (prev?.length && prev[prev.length - 1].to === fromType) {
          prev.push(result);
        } else {
          collector.set(from, [result]);
        }
      }
    }
    return collector;
  }, new Map());
}

/**
 * This function uses dynamic imports to load converter modules and throws errors if it fails to do so.
 * Loaded modules are evaluated according to specification of {@code ConverterPackage}.
 *
 * Converter packages are either specified by their package name alone or by using the {@code TypeConverterConfig}.
 *
 * @param version OData version to use (V2 or V4)
 * @param converters list of converters to load in that particular order
 */
export async function loadConverters(
  version: ODataVersions,
  converters: Array<string | TypeConverterConfig> | undefined,
): Promise<MappedConverterChains | undefined> {
  if (!converters?.length) {
    return undefined;
  }

  const odataTypes = version === ODataVersions.V2 ? ODataTypesV2 : ODataTypesV4;
  const normalizedConverters = converters.map((conv) =>
    typeof conv === "string" ? { module: conv } : (conv as TypeConverterConfig),
  );

  const loadedPkgs = await doLoad(normalizedConverters);
  const mappedConverters = mapConvertersBySource(loadedPkgs);

  if (!mappedConverters.size) {
    return undefined;
  }

  // Iterate through EDM data types (only these are valid starting points) and start chaining converters from there
  return Object.values(odataTypes).reduce((collector, edmDT) => {
    const conv = chainConverters(mappedConverters, edmDT);
    if (conv) {
      collector.set(edmDT, conv);
    }

    return collector;
  }, new Map() as MappedConverterChains);
}

/**
 * Builds the message for a converter chain that leads back to a type it already visited.
 * Such a chain can only be produced by combining packages, so the involved ones are named.
 */
function createCycleError(converters: MappedConverters, dataType: string, visited: Array<string>) {
  const cycle = [...visited.slice(visited.indexOf(dataType)), dataType];
  const packages = [...new Set(cycle.flatMap((type) => converters.get(type)?.map((c) => c.package) ?? []))];

  return new Error(
    `Cyclic converter chain detected: ${cycle.join(" -> ")}! Involved package(s): ${packages
      .map((p) => `"${p}"`)
      .join(", ")}.`,
  );
}

// Recursive function to find chainable converters and chain them
function chainConverters(
  converters: MappedConverters,
  dataType: string,
  visited: Array<string> = [],
): ValueConverterChain | undefined {
  const conv = converters.get(dataType);
  if (!conv?.length) {
    return undefined;
  }

  if (visited.includes(dataType)) {
    throw createCycleError(converters, dataType, visited);
  }

  const finalConv = conv[conv.length - 1];
  const usedConverters: Array<ValueConverterImport> = [];
  if (conv.length > 1) {
    usedConverters.push(
      ...conv.slice(0, conv.length - 1).map((c) => ({
        package: c.package,
        converterId: c.id,
      })),
    );
  }

  usedConverters.push({
    package: finalConv.package,
    converterId: finalConv.id,
  });

  const chainedConv = chainConverters(converters, finalConv.to, [...visited, dataType]);
  if (chainedConv?.converters) {
    usedConverters.push(...chainedConv.converters);
  }

  return {
    from: dataType,
    to: chainedConv?.to ?? finalConv.to,
    toModule: chainedConv?.to ? chainedConv.toModule : finalConv.toModule,
    converters: usedConverters,
  };
}

export function getPropTypeAndModule(typeName: string) {
  if (typeName.match(/\./)?.length && !typeName.startsWith("Edm.")) {
    const separator = typeName.lastIndexOf(".");
    const module = typeName.substring(0, separator);
    const type = typeName.substring(separator + 1);
    return [type, module];
  }
  return [typeName];
}

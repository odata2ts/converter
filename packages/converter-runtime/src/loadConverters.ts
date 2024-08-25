import { ConverterPackage, ValueConverterType } from "@odata2ts/converter-api";
import { ODataTypesV2, ODataTypesV4, ODataVersions } from "@odata2ts/odata-core";
import {
  RuntimeConverterPackage,
  TypeConverterConfig,
  ValueConverterChain,
  ValueConverterImport
} from "./ConverterModels";

type MappedConverter = ValueConverterType & { package: string; toModule?: string }
// we use an array of converters because of converters which fix stuff, mapping from and to the identical type
type MappedConverters = Map<string, Array<MappedConverter>>;

export type MappedConverterChains = Map<string, ValueConverterChain>;

/**
 * Performs a dynamic import of each converter package and returns essential meta infos.
 *
 * @param converters
 */
async function doLoad(converters: Array<TypeConverterConfig>): Promise<Array<RuntimeConverterPackage>> {
  return Promise.all(
    converters.map((conv) => {
      // dynamic import => works only for Node.js
      return import(conv.module)
        .catch((e) => {
          throw new Error(`Failed to load module "${conv.module}"!`, e);
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
              converters.push(loaded);
            }
          }
          // use converter list from default export
          else {
            const candidate = module.config || module.default;
            if (!candidate || typeof candidate.id !== "string" || typeof candidate.converters?.length !== "number") {
              throw new Error(`Default export of loaded module "${conv.module}" doesn't conform to specification!`);
            }
            const pkg = candidate as ConverterPackage;
            converters = pkg.converters;
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

        const result:MappedConverter = {
          package: converterPkg.package,
          id: converter.id,
          from: fromType,
          to: toType,
          toModule,
        }

        const prev = collector.get(from);
        if (prev?.length && prev[prev.length-1].to === fromType) {
          prev.push(result);
        }
        else {
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

// Recursive function to find chainable converters and chain them
function chainConverters(converters: MappedConverters, dataType: string): ValueConverterChain | undefined {
  const conv = converters.get(dataType);
  if (!conv?.length) {
    return undefined;
  }

  const finalConv = conv[conv.length-1];
  const usedConverters: Array<ValueConverterImport> = [];
  if (conv.length > 1) {
    usedConverters.push(...conv.slice(0, conv.length -1).map(c => ({
        package: c.package, converterId: c.id
    })))
  }

  usedConverters.push({
    package: finalConv.package,
    converterId: finalConv.id
  })

  const chainedConv = chainConverters(converters, finalConv.to);
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

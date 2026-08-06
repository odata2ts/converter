/**
 * Specifies the format of the default export of a valid converter package.
 */
export interface ConverterPackage {
  /**
   * Unique name of the converter package.
   *
   * Only needed for debug purposes right now.
   */
  id: string;
  /**
   * List of converters offered by this package.
   */
  converters: Array<ValueConverterType>;
}

/**
 * A type a converter reads from or writes to, stated explicitly.
 *
 * The shorthand {@code string} form encodes both parts in one dotted value ("luxon.DateTime") and is
 * resolved by splitting at the last dot. That works as long as the type name itself carries no dot, so
 * a type living in a namespace ("BigNumber.Instance") or a global one ("Intl.DateTimeFormat") cannot be
 * expressed that way - use this form for those.
 */
export interface TypeReference {
  /**
   * The module the type has to be imported from, e.g. "bignumber.js".
   * Omit it for built-in types such as "string" or "number", which need no import.
   */
  module?: string;
  /**
   * The type as it is written in code, e.g. "BigNumber.Instance". May be qualified.
   */
  type: string;
}

/**
 * Either the explicit {@link TypeReference} or its dotted shorthand, e.g. "luxon.DateTime".
 */
export type TypeSpecification = string | TypeReference;

/**
 * Required meta information for any ValueConverter
 */
export interface ValueConverterType {
  /**
   * Must exactly match the ValueConverter name as it is exported from the package.
   * E.g. id = "timeToDurationConverter" would result in trying to load the given converter by calling
   * import { timeToDurationConverter } from "@odata2ts/converter-v2-to-v4"
   */
  id: string;
  /**
   * The type or types which will be used as input for this converter.
   */
  from: TypeSpecification | Array<TypeSpecification>;
  /**
   * The output type of this converter.
   */
  to: TypeSpecification;
}

export interface ConverterOptions {
  urlConversion?: boolean;
}

export interface ValueConverter<OriginalType, ConvertedType> extends ValueConverterType {
  /**
   * Converts from the source value type to the user facing type.
   * @param value source value
   * @param options additional options
   */
  convertFrom(value: ParamValueModel<OriginalType>, options?: ConverterOptions): ParamValueModel<ConvertedType>;

  /**
   * Converts from user facing type to the source value type.
   * @param value user facing value
   * @param options additional options
   */
  convertTo(value: ParamValueModel<ConvertedType>, options?: ConverterOptions): ParamValueModel<OriginalType>;
}

/**
 * Represents a parameter value, which can always be null or undefined.
 *
 * Undefined is used as return value when a conversion failed.
 */
export type ParamValueModel<Type> = Type | null | undefined;

/**
 * Noop converter.
 */
export interface IdentityConverter<OriginalType> extends ValueConverter<OriginalType, OriginalType> {}

export interface ChainableValueConverter<OriginalType, ConvertedType> extends ValueConverter<
  OriginalType,
  ConvertedType
> {
  chain<T>(converterToChain: ValueConverter<ConvertedType, T>): ChainableValueConverter<OriginalType, T>;
}

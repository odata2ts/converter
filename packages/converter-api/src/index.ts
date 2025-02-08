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
  from: string | Array<string>;
  /**
   * The output type of this converter.
   */
  to: string;
}

export interface ConverterOptions {
  urlConversion?: boolean
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

export interface ChainableValueConverter<OriginalType, ConvertedType>
  extends ValueConverter<OriginalType, ConvertedType> {
  chain<T>(converterToChain: ValueConverter<ConvertedType, T>): ChainableValueConverter<OriginalType, T>;
}

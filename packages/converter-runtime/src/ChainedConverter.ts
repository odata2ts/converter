import {ChainableValueConverter, ConverterOptions, ParamValueModel, ValueConverter} from "@odata2ts/converter-api";

export class ChainedConverter<FromType, IntermediateType, ToType> implements ChainableValueConverter<FromType, ToType> {
  public readonly id = "ChainedConverter";
  public readonly from;
  public readonly to;

  constructor(
    private converter: ValueConverter<FromType, IntermediateType>,
    private converter2: ValueConverter<IntermediateType, ToType>,
  ) {
    this.from = converter.from;
    this.to = converter2.to;
  }

  public convertFrom(value: ParamValueModel<FromType>, options?: ConverterOptions): ParamValueModel<ToType> {
    return this.converter2.convertFrom(this.converter.convertFrom(value, options), options);
  }

  public convertTo(value: ParamValueModel<ToType>, options?: ConverterOptions): ParamValueModel<FromType> {
    return this.converter.convertTo(this.converter2.convertTo(value, options), options);
  }

  public chain<T>(converterToChain: ValueConverter<ToType, T>): ChainableValueConverter<FromType, T> {
    return new ChainedConverter(this, converterToChain);
  }
}

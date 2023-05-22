import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";

export const int64ToBigIntConverter: ValueConverter<string, bigint> = {
  id: "int64ToBigIntConverter",
  from: "Edm.Int64",
  to: "bigint",

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<bigint> {
    if (typeof value !== "string") {
      return value;
    }

    try {
      return BigInt(value);
    } catch (exception) {
      return undefined;
    }
  },

  convertTo: function (value: ParamValueModel<bigint>): ParamValueModel<string> {
    return typeof value === "bigint" ? value.toString() : value;
  },
};

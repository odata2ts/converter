import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";
import { Decimal } from "decimal.js";

export const decimalConverter: ValueConverter<string, Decimal> & {
  convertTo: (value: ParamValueModel<Decimal | string>) => ParamValueModel<string>;
} = {
  id: "decimalConverter",
  from: ["Edm.Int64", "Edm.Decimal"],
  to: "decimal.js.Decimal",

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<Decimal> {
    if (typeof value !== "string") {
      return value;
    }

    return new Decimal(value);
  },

  convertTo: function (value: ParamValueModel<Decimal | string>): ParamValueModel<string> {
    if (value === undefined || value === null) {
      return value;
    }

    return value.toString();
  },
};

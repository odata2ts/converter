import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";
import { Big } from "big.js";

export const bigConverter: ValueConverter<string, Big> & {
  convertTo: (value: ParamValueModel<Big | string>) => ParamValueModel<string>;
} = {
  id: "bigConverter",
  from: ["Edm.Int64", "Edm.Decimal"],
  to: "big.js.Big",

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<Big> {
    if (typeof value !== "string") {
      return value;
    }

    return new Big(value);
  },

  convertTo: function (value: ParamValueModel<Big | string>): ParamValueModel<string> {
    if (value === undefined || value === null) {
      return value;
    }

    return value.toString();
  },
};

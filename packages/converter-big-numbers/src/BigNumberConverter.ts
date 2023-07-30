import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";
import { BigNumber } from "bignumber.js";

export const bigNumberConverter: ValueConverter<string, BigNumber> & {
  convertTo: (value: ParamValueModel<BigNumber | string>) => ParamValueModel<string>;
} = {
  id: "bigNumberConverter",
  from: ["Edm.Int64", "Edm.Decimal"],
  to: "bignumber.js.BigNumber",

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<BigNumber> {
    if (typeof value !== "string") {
      return value;
    }

    const result = new BigNumber(value);
    if (result.toString() === NaN.toString()) {
      throw new Error("[BigNumber Error] Invalid argument: " + value);
    }
    return result;
  },

  convertTo: function (value: ParamValueModel<BigNumber | string>): ParamValueModel<string> {
    if (value === undefined || value === null) {
      return value;
    }

    return value.toString();
  },
};

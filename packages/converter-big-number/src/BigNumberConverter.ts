import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";
import BigNumber from "bignumber.js";

export const bigNumberConverter: ValueConverter<string, BigNumber.Instance> = {
  id: "bigNumberConverter",
  from: ["Edm.Int64", "Edm.Decimal"],
  to: { module: "bignumber.js", type: "BigNumber" },

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<BigNumber.Instance> {
    if (typeof value !== "string") {
      return value;
    }

    let result: BigNumber.Instance;
    try {
      // bignumber.js v11+ throws on construction for an invalid value; v9 silently
      // produced a NaN-valued instance instead, which the check below used to catch
      result = new BigNumber(value);
    } catch {
      throw new Error("[BigNumber Error] Invalid argument: " + value);
    }
    if (result.toString() === NaN.toString()) {
      throw new Error("[BigNumber Error] Invalid argument: " + value);
    }
    return result;
  },

  convertTo: function (value: ParamValueModel<BigNumber.Instance>): ParamValueModel<string> {
    if (value === undefined || value === null) {
      return value;
    }

    return value.toString();
  },
};

import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";
import { ODataTypesV2 } from "@odata2ts/odata-core";

export const bigNumberNoopConverter: ValueConverter<string, string> = {
  id: "bigNumberNoopConverter",
  from: [ODataTypesV2.Int64, ODataTypesV2.Decimal],
  to: "string",

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<string> {
    return value;
  },

  convertTo: function (value: ParamValueModel<string>): ParamValueModel<string> {
    return value;
  },
};

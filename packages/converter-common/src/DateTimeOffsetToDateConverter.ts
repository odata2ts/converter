import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";

export const dateTimeOffsetToDateConverter: ValueConverter<string, Date> = {
  id: "dateTimeOffsetToDateConverter",
  from: "Edm.DateTimeOffset",
  to: "Date",

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<Date> {
    if (typeof value !== "string") {
      return value;
    }

    return isNaN(Date.parse(value)) ? undefined : new Date(value);
  },

  convertTo: function (value: ParamValueModel<Date>): ParamValueModel<string> {
    if (!value) {
      return value;
    }

    return value.toISOString();
  },
};

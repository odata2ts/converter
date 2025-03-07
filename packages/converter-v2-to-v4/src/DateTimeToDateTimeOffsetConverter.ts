import {ConverterOptions, ParamValueModel, ValueConverter} from "@odata2ts/converter-api";
import { ODataTypesV2, ODataTypesV4 } from "@odata2ts/odata-core";

function padZerosLeft(input: number) {
  return input < 10 ? `0${input}` : input;
}

function formatIsoOffset(sign: string, offsetInMin: string) {
  const offset = Number(offsetInMin);
  const timeString = `${padZerosLeft(Math.floor(offset / 60))}:${padZerosLeft(offset % 60)}`;
  return offset ? sign + timeString : "";
}

function formatDateTimeV2(iso8601: string, offset?: string) {
  return `/Date(${new Date(iso8601).getTime()}${offset || ""})/`;
}

// offset in minutes might be specified as suffix of the timestamp,e.g. "+90"
const DATE_TIME_V2_REGEXP = /\/Date\(([+-]?\d+)(([+-])(\d+))?\)\//;
const ISO_OFFSET_REGEXP = /([+-])(\d{2}):(\d{2})/;
const ISO_DATETIME_REGEXP = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i

/**
 * Converts Edm.DateTime, which is a very special construct, to Edm.DateTimeOffset, which is the typical
 * ISO 8601 date time format: "2022-12-31T23:59:59.000Z".
 *
 * Edm.DateTime is based on a timestamp ("/Date(1672531199000)/") and also supports offsets in minutes
 * ("/Date(1672531199000+120)/".
 */
export const dateTimeToDateTimeOffsetConverter: ValueConverter<string, string> = {
  id: "dateTimeToDateTimeOffsetConverter",
  from: ODataTypesV2.DateTime,
  to: ODataTypesV4.DateTimeOffset,

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<string> {
    if (typeof value !== "string") {
      return value;
    }

    const matched = value.match(DATE_TIME_V2_REGEXP);
    if (!matched) {
      // pass along ISO8601 DateTimes as they are
      return value.match(ISO_DATETIME_REGEXP) ? value : undefined;
    }

    const timestamp = matched[1];
    const sign = matched[3];
    const offsetInMin = matched[4];

    const iso = new Date(Number(timestamp)).toISOString();
    const offset = sign && offsetInMin ? formatIsoOffset(sign, offsetInMin) : "";

    return offset ? iso.substring(0, iso.length - 1) + offset : iso;
  },

  convertTo: function (value: ParamValueModel<string>, options?: ConverterOptions): ParamValueModel<string> {
    // Special workaround only for this converter:
    // Within URL ISO8601 format is used, but not in request / response bodies
    // => we prevent the conversion for URL values here
    if (!value || options?.urlConversion) {
      return value;
    }

    // handle offset
    const matched = value.match(ISO_OFFSET_REGEXP);
    if (matched && matched.length === 4) {
      const isoString = value.replace(ISO_OFFSET_REGEXP, "Z");

      const minutes = Number(matched[2]) * 60 + Number(matched[3]);
      const offset = matched[1] + minutes;
      return formatDateTimeV2(isoString, offset);
    }

    return formatDateTimeV2(value);
  },
};

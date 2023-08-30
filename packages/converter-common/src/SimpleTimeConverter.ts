import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";

export interface SimpleTime {
  hour: number;
  minute: number;
  second?: number;
}

const PERIOD_PREFIX = "PT";
export const NOOP_TIME = "PT0H0M";
const TIME_TYPE: Array<{ prop: keyof SimpleTime; pattern: RegExp; suffix: string; allowFloat?: boolean }> = [
  {
    prop: "hour",
    pattern: /T.*?(\d+)H/,
    suffix: "H",
  },
  {
    prop: "minute",
    pattern: /T.*?(\d+)M/,
    suffix: "M",
  },
  {
    prop: "second",
    pattern: /T.*?([\d.]+)S/,
    suffix: "S",
    allowFloat: true,
  },
];

function getSafeValue(value: string, regExp: RegExp, allowFloat?: boolean): number {
  const result = value.match(regExp);
  // prettier-ignore
  return !result || result.length !== 2
    ? 0
    : allowFloat
      ? parseFloat(result[1])
      : parseInt(result[1]);
}

function format(value: number | null | undefined, suffix: string) {
  return value ? value + suffix : "";
}

export const simpleTimeConverter: ValueConverter<string, SimpleTime> = {
  id: "simpleTimeConverter",
  from: "Edm.Time",
  to: "@odata2ts/converter-common.SimpleTime",

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<SimpleTime> {
    if (typeof value !== "string") {
      return value;
    }
    // invalid time returns undefined
    if (!value || !value.startsWith(PERIOD_PREFIX)) {
      return undefined;
    }

    return TIME_TYPE.reduce<SimpleTime>(
      (duration, typeInfo) => {
        duration[typeInfo.prop] = getSafeValue(value, typeInfo.pattern, typeInfo.allowFloat);
        return duration;
      },
      { hour: 0, minute: 0, second: 0 }
    );
  },

  convertTo: function (value: ParamValueModel<SimpleTime>): ParamValueModel<string> {
    if (!value) {
      return value;
    }

    const time = TIME_TYPE.reduce((result, current) => {
      return result + format(value[current.prop], current.suffix);
    }, "");

    // time is only valid if hour and minute part is specified
    if (!time) {
      return NOOP_TIME;
    }

    return PERIOD_PREFIX + time;
  },
};

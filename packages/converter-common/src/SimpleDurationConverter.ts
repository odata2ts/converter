import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";

export interface SimpleDuration {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const PERIOD_PREFIX = "P";
const TIME_SEPARATOR = "T";
export const NOOP_PERIOD = "PT0H";
const DURATION_TYPE: Array<{ prop: keyof SimpleDuration; pattern: RegExp; suffix: string; allowFloat?: boolean }> = [
  {
    prop: "years",
    pattern: /^[^T]+?(\d+)Y/,
    suffix: "Y",
  },
  {
    prop: "months",
    pattern: /^[^T]+?(\d+)M/,
    suffix: "M",
  },
  {
    prop: "days",
    pattern: /^[^T]+?(\d+)D/,
    suffix: "D",
  },
  {
    prop: "hours",
    pattern: /T.*?(\d+)H/,
    suffix: "H",
  },
  {
    prop: "minutes",
    pattern: /T.*?(\d+)M/,
    suffix: "M",
  },
  {
    prop: "seconds",
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

export const simpleDurationConverter: ValueConverter<string, SimpleDuration> = {
  id: "simpleDurationConverter",
  from: "Edm.Duration",
  to: "@odata2ts/converter-common.SimpleDuration",

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<SimpleDuration> {
    if (typeof value !== "string") {
      return value;
    }
    // invalid duration returns undefined
    if (!value || !value.startsWith(PERIOD_PREFIX)) {
      return undefined;
    }

    return DURATION_TYPE.reduce<SimpleDuration>((duration, typeInfo) => {
      duration[typeInfo.prop] = getSafeValue(value, typeInfo.pattern, typeInfo.allowFloat);
      return duration;
    }, {});
  },

  convertTo: function (value: ParamValueModel<SimpleDuration>): ParamValueModel<string> {
    if (!value) {
      return value;
    }

    const timeIndex = 3;
    const date = DURATION_TYPE.slice(0, timeIndex).reduce((result, current) => {
      return result + format(value[current.prop], current.suffix);
    }, "");
    const time = DURATION_TYPE.slice(timeIndex).reduce((result, current) => {
      return result + format(value[current.prop], current.suffix);
    }, "");

    // duration is only valid if some part is specified, at least one
    if (!date && !time) {
      return NOOP_PERIOD;
    }

    return PERIOD_PREFIX + date + (time ? TIME_SEPARATOR + time : "");
  },
};

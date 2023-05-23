import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";
import { SimpleDuration, simpleDurationConverter } from "@odata2ts/converter-common";

export interface MsDuration {
  ms: number;
}

export const timeToMsDurationConverter: ValueConverter<string, MsDuration> = {
  id: "timeToMsDurationConverter",
  from: "Edm.Time",
  to: "@odata2ts/converter-ui5-v2.MsDuration",

  convertFrom: function (value: ParamValueModel<string>): ParamValueModel<MsDuration> {
    if (typeof value !== "string") {
      return value;
    }

    const duration = simpleDurationConverter.convertFrom(value);
    if (typeof duration !== "object" || duration === null) {
      return undefined;
    }

    return {
      ms: (duration.seconds || 0) * 1000 + (duration.minutes || 0) * 60 * 1000 + (duration.hours || 0) * 60 * 60 * 1000,
    };
  },

  convertTo: function (value: ParamValueModel<MsDuration>): ParamValueModel<string> {
    if (!value) {
      return value;
    }

    const hours = Math.floor(value.ms / (1000 * 60 * 60));
    const hoursInMs = hours * 1000 * 60 * 60;
    const minutes = Math.floor((value.ms - hoursInMs) / (1000 * 60));
    const minutesInMs = minutes * 1000 * 60;
    const seconds = (value.ms - hoursInMs - minutesInMs) / 1000;

    const duration: SimpleDuration = {
      hours,
      minutes,
      seconds,
    };

    return simpleDurationConverter.convertTo(duration);
  },
};

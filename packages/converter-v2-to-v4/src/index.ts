import { ConverterPackage } from "@odata2ts/converter-api";
import { bigNumberNoopConverter } from "./BigNumberNoopConverter.js";
import { dateTimeToDateTimeOffsetConverter } from "./DateTimeToDateTimeOffsetConverter.js";
import { stringToNumberConverter } from "./StringToNumberConverter.js";
import { timeToDurationConverter } from "./TimeToDurationConverter.js";
import { timeToTimeOfDayConverter } from "./TimeToTimeOfDayConverter.js";

const pkg: ConverterPackage = {
  id: "V2ToV4",
  converters: [dateTimeToDateTimeOffsetConverter, stringToNumberConverter, timeToTimeOfDayConverter],
};

export default pkg;
export {
  dateTimeToDateTimeOffsetConverter,
  stringToNumberConverter,
  timeToTimeOfDayConverter,
  timeToDurationConverter,
  bigNumberNoopConverter,
};

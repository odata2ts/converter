import { ConverterPackage } from "@odata2ts/converter-api";
import { dateTimeOffsetToLuxonConverter } from "./DateTimeOffsetToLuxonConverter.js";
import { dateToLuxonConverter } from "./DateToLuxonConverter.js";
import { durationToLuxonConverter } from "./DurationToLuxonConverter.js";
import { timeOfDayToLuxonConverter } from "./TimeOfDayToLuxonConverter.js";

const pkg: ConverterPackage = {
  id: "Luxon",
  converters: [
    dateToLuxonConverter,
    timeOfDayToLuxonConverter,
    dateTimeOffsetToLuxonConverter,
    durationToLuxonConverter,
  ],
};

export default pkg;
export { timeOfDayToLuxonConverter, dateToLuxonConverter, dateTimeOffsetToLuxonConverter, durationToLuxonConverter };

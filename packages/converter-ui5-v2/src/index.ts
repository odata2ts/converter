import { ConverterPackage } from "@odata2ts/converter-api";
import { dateTimeOffsetToDateConverter } from "@odata2ts/converter-common";
import { dateTimeToDateTimeOffsetConverter, stringToNumberConverter } from "@odata2ts/converter-v2-to-v4";

import { timeToMsDurationConverter } from "./TimeToMsDurationConverter";

export { MsDuration } from "./TimeToMsDurationConverter";

const pkg: ConverterPackage = {
  id: "UI5",
  converters: [
    stringToNumberConverter,
    dateTimeToDateTimeOffsetConverter,
    dateTimeOffsetToDateConverter,
    timeToMsDurationConverter,
  ],
};

export default pkg;
export {
  stringToNumberConverter,
  dateTimeToDateTimeOffsetConverter,
  dateTimeOffsetToDateConverter,
  timeToMsDurationConverter,
};

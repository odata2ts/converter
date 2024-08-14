import { ConverterPackage } from "@odata2ts/converter-api";
import { dateTimeOffsetToDateConverter } from "./DateTimeOffsetToDateConverter.js";
import { int64ToBigIntConverter } from "./Int64ToBigIntConverter.js";
import { simpleDurationConverter } from "./SimpleDurationConverter.js";
import { simpleTimeConverter } from "./SimpleTimeConverter.js";

export { SimpleDuration } from "./SimpleDurationConverter.js";
export { SimpleTime } from "./SimpleTimeConverter.js";

const pkg: ConverterPackage = {
  id: "Common",
  converters: [dateTimeOffsetToDateConverter],
};

export default pkg;
export { dateTimeOffsetToDateConverter, simpleDurationConverter, int64ToBigIntConverter, simpleTimeConverter };

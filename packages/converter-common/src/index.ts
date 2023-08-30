import { ConverterPackage } from "@odata2ts/converter-api";

import { dateTimeOffsetToDateConverter } from "./DateTimeOffsetToDateConverter";
import { int64ToBigIntConverter } from "./Int64ToBigIntConverter";
import { simpleDurationConverter } from "./SimpleDurationConverter";
import { simpleTimeConverter } from "./SimpleTimeConverter";

export { SimpleDuration } from "./SimpleDurationConverter";
export { SimpleTime } from "./SimpleTimeConverter";

const pkg: ConverterPackage = {
  id: "Common",
  converters: [dateTimeOffsetToDateConverter, simpleTimeConverter],
};

export default pkg;
export { dateTimeOffsetToDateConverter, simpleTimeConverter, simpleDurationConverter, int64ToBigIntConverter };

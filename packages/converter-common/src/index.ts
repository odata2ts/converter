import { ConverterPackage } from "@odata2ts/converter-api";

import { dateTimeOffsetToDateConverter } from "./DateTimeOffsetToDateConverter";
import { int64ToBigIntConverter } from "./Int64ToBigIntConverter";
import { simpleDurationConverter } from "./SimpleDurationConverter";

export { SimpleDuration } from "./SimpleDurationConverter";

const pkg: ConverterPackage = {
  id: "Common",
  converters: [dateTimeOffsetToDateConverter],
};

export default pkg;
export { dateTimeOffsetToDateConverter, simpleDurationConverter, int64ToBigIntConverter };

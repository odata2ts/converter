import { ConverterPackage } from "@odata2ts/converter-api";

import { dateTimeOffsetToDateConverter } from "./DateTimeOffsetToDateConverter";
import { simpleDurationConverter } from "./SimpleDurationConverter";

export { SimpleDuration } from "./SimpleDurationConverter";

const pkg: ConverterPackage = {
  id: "Common",
  converters: [dateTimeOffsetToDateConverter, simpleDurationConverter],
};

export default pkg;
export { dateTimeOffsetToDateConverter, simpleDurationConverter };

import { ConverterPackage } from "@odata2ts/converter-api";
import { booleanToNumberConverter } from "./BooleanToNumberConverter";
import { converterWithWrongId } from "./ConverterWithWrongId";
import { numberToStringConverter } from "./NumberToStringConverter";
import { stringToPrefixModelConverter } from "./StringToPrefixModelConverter";
import { exampleOfFixingConverter } from "./ExampleOfFixingDataType";

const pkg: ConverterPackage = {
  id: "test-converters",
  converters: [exampleOfFixingConverter, booleanToNumberConverter, numberToStringConverter, stringToPrefixModelConverter]
};

export default pkg;
export * from "./FixedDateConverter";
export * from "./StringToPrefixModelConverter";
export {
  exampleOfFixingConverter,
  booleanToNumberConverter,
  stringToPrefixModelConverter,
  numberToStringConverter,
  converterWithWrongId
};

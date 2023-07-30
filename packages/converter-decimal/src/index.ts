import { ConverterPackage } from "@odata2ts/converter-api";

import { decimalConverter } from "./DecimalConverter";

const pkg: ConverterPackage = {
  id: "BigNumber",
  converters: [decimalConverter],
};

export default pkg;

export { decimalConverter };

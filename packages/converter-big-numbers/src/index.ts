import { ConverterPackage } from "@odata2ts/converter-api";

import { bigConverter } from "./BigConverter";
import { bigNumberConverter } from "./BigNumberConverter";
import { decimalConverter } from "./DecimalConverter";

const pkg: ConverterPackage = {
  id: "BigNumber",
  converters: [bigNumberConverter],
};

export default pkg;

export { bigConverter, bigNumberConverter, decimalConverter };

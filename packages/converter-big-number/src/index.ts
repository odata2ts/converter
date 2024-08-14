import { ConverterPackage } from "@odata2ts/converter-api";
import { bigNumberConverter } from "./BigNumberConverter.js";

const pkg: ConverterPackage = {
  id: "BigNumber",
  converters: [bigNumberConverter],
};

export default pkg;

export { bigNumberConverter };

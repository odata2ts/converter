import { numberToStringConverter, stringToPrefixModelConverter } from "@odata2ts/test-converters";

import { createChain } from "../src";

describe("ChainedConverter Test", () => {
  test("from number to prefixed string and back", () => {
    const toTest = createChain(numberToStringConverter, stringToPrefixModelConverter);
    expect(toTest.convertFrom(3)).toStrictEqual({ prefix: "PREFIX_", value: "3" });
    expect(toTest.convertTo({ prefix: "PREFIX", value: "22" })).toBe(22);
  });
});

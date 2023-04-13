import { numberToStringConverter, stringToPrefixModelConverter } from "@odata2ts/test-converters";

import { createChain } from "../src";

describe("ChainedConverter Test", () => {
  const toTest = createChain(numberToStringConverter, stringToPrefixModelConverter);

  test("from number to prefixed string and back", () => {
    expect(toTest.convertFrom(3)).toStrictEqual({ prefix: "PREFIX_", value: "3" });
    expect(toTest.convertTo({ prefix: "PREFIX", value: "22" })).toBe(22);
  });

});

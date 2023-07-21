import {
  booleanToNumberConverter,
  numberToStringConverter,
  stringToPrefixModelConverter,
} from "@odata2ts/test-converters";

import { ChainedConverter, createChain } from "../src";

describe("ChainedConverter Test", () => {
  test("from number to prefixed string and back", () => {
    const toTest = createChain(numberToStringConverter, stringToPrefixModelConverter);
    expect(toTest.convertFrom(3)).toStrictEqual({ prefix: "PREFIX_", value: "3" });
    expect(toTest.convertTo({ prefix: "PREFIX", value: "22" })).toBe(22);
  });

  test("with ChainedConverter", () => {
    const toTest = new ChainedConverter(numberToStringConverter, stringToPrefixModelConverter);
    expect(toTest.convertFrom(3)).toStrictEqual({ prefix: "PREFIX_", value: "3" });
    expect(toTest.convertTo({ prefix: "PREFIX", value: "22" })).toBe(22);
  });

  test("from number to prefixed string and back", () => {
    const toTest = createChain(booleanToNumberConverter, numberToStringConverter).chain(stringToPrefixModelConverter);
    expect(toTest.convertFrom(false)).toStrictEqual({ prefix: "PREFIX_", value: "0" });
    expect(toTest.convertTo({ prefix: "PREFIX", value: "1" })).toBe(true);
  });
});

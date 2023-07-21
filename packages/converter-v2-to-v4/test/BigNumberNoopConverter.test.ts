import { ODataTypesV2 } from "@odata2ts/odata-core";

import { bigNumberNoopConverter } from "../src";

describe("BigNumberNoopConverter Test", () => {
  const TO_TEST = bigNumberNoopConverter;

  test("base attributes", () => {
    expect(TO_TEST.id).toBe("bigNumberNoopConverter");
    expect(TO_TEST.from).toStrictEqual([ODataTypesV2.Int64, ODataTypesV2.Decimal]);
    expect(TO_TEST.to).toBe("string");
  });

  test("conversion", () => {
    expect(TO_TEST.convertFrom("12.59")).toBe("12.59");
    expect(TO_TEST.convertTo("12.59")).toBe("12.59");
    expect(TO_TEST.convertFrom("-46")).toBe("-46");
    expect(TO_TEST.convertTo("-46")).toBe("-46");
  });

  test("null, undefined", () => {
    expect(TO_TEST.convertFrom(null)).toBeNull();
    expect(TO_TEST.convertTo(null)).toBeNull();
    expect(TO_TEST.convertFrom(undefined)).toBeUndefined();
    expect(TO_TEST.convertTo(undefined)).toBeUndefined();
  });
});

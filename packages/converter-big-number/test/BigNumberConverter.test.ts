import { ParamValueModel } from "@odata2ts/converter-api";
import BigNumber from "bignumber.js";
import { describe, expect, expectTypeOf, test } from "vitest";
import { bigNumberConverter } from "../src";

describe("BigNumberConverter Test", () => {
  const FROM_STRING = "123.01234567890123456789";

  const TO_TEST = bigNumberConverter;

  test("the declared target type is the class, and it is the one produced", () => {
    /*
     * `BigNumber.Instance` is not the instance type: it declares `c`, `e` and `s` plus an index
     * signature and exists for the `BigNumber.Value` union, so that an instance from another copy of
     * the library can be passed to the constructor. Typing this converter on it silently degrades
     * every method call on a converted value to `any`. The class is the instance type, and `to` has
     * to name exactly that, or the generated client types a property on one and gets the other.
     */
    expect(TO_TEST.to).toStrictEqual({ module: "bignumber.js", type: "BigNumber" });

    const candidate = TO_TEST.convertFrom(FROM_STRING);
    expectTypeOf(candidate).toEqualTypeOf<ParamValueModel<BigNumber>>();
    // via BigNumber.Instance this would be `any`
    expectTypeOf(candidate!.toFixed(2)).toEqualTypeOf<string>();
  });

  test("conversion", () => {
    const candidate = TO_TEST.convertFrom(FROM_STRING);

    expect(candidate).toBeDefined();
    expect(candidate!.toString()).toBe(FROM_STRING);
    expect(candidate!.s).toBe(1);
    expect(candidate!.e).toBe(2);
    expect(candidate!.c?.length).toBe(3);
    expect(candidate!.c![0]).toBe(123);
    expect(candidate instanceof BigNumber).toBe(true);

    expect(TO_TEST.convertTo(candidate)).toBe(FROM_STRING);
  });

  test("null and undefined", () => {
    expect(TO_TEST.convertFrom(null)).toBeNull();
    expect(TO_TEST.convertFrom(undefined)).toBeUndefined();

    expect(TO_TEST.convertTo(null)).toBeNull();
    expect(TO_TEST.convertTo(undefined)).toBeUndefined();
  });

  test("convertFrom with invalid value", () => {
    expect(() => TO_TEST.convertFrom("hello")).toThrow("[BigNumber Error] Invalid argument: hello");
    expect(() => TO_TEST.convertFrom("")).toThrow("[BigNumber Error] Invalid argument: ");
  });

  test("convertFrom with NaN", () => {
    // bignumber.js accepts the literal string "NaN", the converter must not let it pass
    expect(() => TO_TEST.convertFrom("NaN")).toThrow("[BigNumber Error] Invalid argument: NaN");
  });

  test("convertTo: no conversion for string value", () => {
    // @ts-expect-error
    expect(TO_TEST.convertTo(FROM_STRING)).toBe(FROM_STRING);
    // @ts-expect-error
    expect(TO_TEST.convertTo("INVALID!!!")).toBe("INVALID!!!");
  });
});

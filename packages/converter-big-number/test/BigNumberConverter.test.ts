import { BigNumber } from "bignumber.js";
import { describe, expect, test } from "vitest";
import { bigNumberConverter } from "../src";

describe("BigNumberConverter Test", () => {
  const FROM_STRING = "123.01234567890123456789";

  const TO_TEST = bigNumberConverter;

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

  test("convertTo: no conversion for string value", () => {
    expect(TO_TEST.convertTo(FROM_STRING)).toBe(FROM_STRING);
    expect(TO_TEST.convertTo("INVALID!!!")).toBe("INVALID!!!");
  });

  test("convertFrom with invalid value", () => {
    expect(() => TO_TEST.convertFrom("hello")).toThrow("[BigNumber Error] Invalid argument: hello");
  });
});

import { bigConverter } from "../src";

describe("BigConverter Test", () => {
  const FROM_STRING = "123.01234567890123456789";

  const TO_TEST = bigConverter;

  test("conversion", () => {
    const candidate = TO_TEST.convertFrom(FROM_STRING);

    expect(candidate).toBeDefined();
    expect(candidate!.toString()).toBe(FROM_STRING);
    expect(candidate!.e).toBe(2);
    expect(candidate!.c.length).toBe(FROM_STRING.length - 1);

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

  test("conversion with invalid value", () => {
    expect(() => TO_TEST.convertFrom("hello")).toThrow("[big.js] Invalid number");
  });
});

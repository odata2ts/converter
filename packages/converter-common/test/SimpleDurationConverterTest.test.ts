import { describe, expect, test } from "vitest";
import { SimpleDuration, simpleDurationConverter } from "../src";
import { execCommonConverterTests } from "./CommonTests";

describe("SimpleDurationConverter Test", () => {
  const FROM_STRING = "P12M2DT23H59M";

  const expected: SimpleDuration = {
    years: 0,
    months: 12,
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 0,
  };

  const TO_TEST = simpleDurationConverter;

  execCommonConverterTests(TO_TEST);

  test("conversion", () => {
    const candidate = TO_TEST.convertFrom(FROM_STRING);

    expect(candidate).toStrictEqual(expected);
    expect(TO_TEST.convertTo(candidate)).toBe(FROM_STRING);
  });

  test("undefined for wrong format", () => {
    expect(TO_TEST.convertFrom("T12H")).toBeUndefined();
    expect(TO_TEST.convertFrom("12M")).toBeUndefined();
    expect(TO_TEST.convertFrom("")).toBeUndefined();
    expect(TO_TEST.convertFrom("xxx")).toBeUndefined();
    expect(TO_TEST.convertFrom("P12H")).toBeUndefined();
    expect(TO_TEST.convertFrom("P12ST")).toBeUndefined();

    expect(TO_TEST.convertTo({})).toBe("PT0H");
  });

  test("conversion with ms precision", () => {
    const candidate = TO_TEST.convertFrom("PT12H51.123S");
    const expected: SimpleDuration = {
      hours: 12,
      seconds: 51.123,
    };

    expect(candidate).toMatchObject(expected);
  });

  test("conversion with date part only", () => {
    const candidate = "P2Y11M3D";
    const expected: SimpleDuration = {
      years: 2,
      months: 11,
      days: 3,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    expect(TO_TEST.convertFrom(candidate)).toStrictEqual(expected);
    expect(TO_TEST.convertTo(expected)).toBe(candidate);
  });

  test("conversion with time part only", () => {
    const candidate = "PT12H5M22S";
    const expected: SimpleDuration = {
      years: 0,
      months: 0,
      days: 0,
      hours: 12,
      minutes: 5,
      seconds: 22,
    };

    expect(TO_TEST.convertFrom(candidate)).toStrictEqual(expected);
    expect(TO_TEST.convertTo(expected)).toBe(candidate);
  });

  test("conversion with zero duration", () => {
    const candidate = TO_TEST.convertFrom("P0D");
    const expected: SimpleDuration = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    expect(candidate).toStrictEqual(expected);
    expect(TO_TEST.convertTo(expected)).toBe("PT0H");
  });
});

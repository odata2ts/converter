import { SimpleTime, simpleTimeConverter } from "../src";
import { execCommonConverterTests } from "./CommonTests";

describe("SimpleTimeConverter Test", () => {
  const FROM_STRING = "PT23H59M";

  const expected: SimpleTime = {
    hour: 23,
    minute: 59,
    second: 0,
  };

  const TO_TEST = simpleTimeConverter;

  execCommonConverterTests(TO_TEST);

  test("conversion", () => {
    const candidate = TO_TEST.convertFrom(FROM_STRING);

    expect(candidate).toStrictEqual(expected);
    expect(TO_TEST.convertTo(candidate)).toBe(FROM_STRING);
  });

  test("undefined for wrong format", () => {
    expect(TO_TEST.convertFrom("P12H")).toBeUndefined();
    expect(TO_TEST.convertFrom("T12H")).toBeUndefined();
    expect(TO_TEST.convertFrom("12H")).toBeUndefined();
    expect(TO_TEST.convertFrom("")).toBeUndefined();
    expect(TO_TEST.convertFrom("xxx")).toBeUndefined();

    // @ts-expect-error
    expect(TO_TEST.convertTo({})).toBe("PT0H0M");
  });

  test("conversion with ms precision", () => {
    const candidate = TO_TEST.convertFrom("PT12H51.123S");
    const expected: SimpleTime = {
      hour: 12,
      minute: 0,
      second: 51.123,
    };

    expect(candidate).toMatchObject(expected);
  });

  test("conversion with zero duration", () => {
    const candidate = TO_TEST.convertFrom("PT0H");
    const expected: SimpleTime = {
      hour: 0,
      minute: 0,
      second: 0,
    };

    expect(candidate).toStrictEqual(expected);
    expect(TO_TEST.convertTo(expected)).toBe("PT0H0M");
    expect(TO_TEST.convertTo({ hour: 0, minute: 0 })).toBe("PT0H0M");
  });
});

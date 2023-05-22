import { QTester } from "../build/QTest";

describe("Testing Generated Q-Objects for UI5 Converters", function () {
  const TO_TEST = new QTester();

  const ANY_INT = 42;
  const BIG_INT = "1234567890123456789012345678901";
  const BIG_DECIMAL = "1234567890.1234567890123456789012345678902";

  test("numeric conversion", () => {
    expect(TO_TEST.Byte.converter.convertFrom("1")).toBe(1);
    expect(TO_TEST.Byte.converter.convertTo(1)).toBe("1");
    expect(TO_TEST.SByte.converter.convertFrom("-1")).toBe(-1);
    expect(TO_TEST.SByte.converter.convertTo(-1)).toBe("-1");
    expect(TO_TEST.Int16.converter.convertFrom(ANY_INT)).toBe(ANY_INT);
    expect(TO_TEST.Int16.converter.convertTo(ANY_INT)).toBe(ANY_INT);
    expect(TO_TEST.Int32.converter.convertFrom(ANY_INT)).toBe(ANY_INT);
    expect(TO_TEST.Int32.converter.convertTo(ANY_INT)).toBe(ANY_INT);
    expect(TO_TEST.Int64.converter.convertFrom(BIG_INT)).toBe(BIG_INT);
    expect(TO_TEST.Int64.converter.convertTo(BIG_INT)).toBe(BIG_INT);
    expect(TO_TEST.Single.converter.convertFrom("42")).toBe(ANY_INT);
    expect(TO_TEST.Single.converter.convertTo(ANY_INT)).toBe("42");
    expect(TO_TEST.Double.converter.convertFrom("1.234")).toBe(1.234);
    expect(TO_TEST.Double.converter.convertTo(1.234)).toBe("1.234");
    expect(TO_TEST.Decimal.converter.convertFrom(BIG_DECIMAL)).toBe(BIG_DECIMAL);
    expect(TO_TEST.Decimal.converter.convertTo(BIG_DECIMAL)).toBe(BIG_DECIMAL);
  });

  test("dateTime conversion", () => {
    const TIMESTAMP = 1672531199000;
    const FROM_STRING = `/Date(${TIMESTAMP})/`;
    const TO_STRING = "2022-12-31T23:59:59.000Z";

    const result = TO_TEST.DateTime.converter.convertFrom(FROM_STRING);
    expect(result instanceof Date).toBeTruthy();
    expect(result?.toISOString()).toBe(TO_STRING);
    expect(TO_TEST.DateTime.converter.convertTo(result)).toBe(FROM_STRING);
  });

  test("dateTimeOffset conversion", () => {
    const FROM_STRING = "2022-12-31T23:59:59.000Z";

    const result = TO_TEST.DateTimeOffset.converter.convertFrom(FROM_STRING);
    expect(result instanceof Date).toBeTruthy();
    expect(result?.toISOString()).toBe(FROM_STRING);
    expect(TO_TEST.DateTimeOffset.converter.convertTo(result)).toBe(FROM_STRING);
  });

  test("time conversion", () => {
    const FROM_STRING = "PT23H59M50.123S";
    const expected = {
      ms: 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 50.123 * 1000,
    };

    const result = TO_TEST.Time.converter.convertFrom(FROM_STRING);
    expect(result).toStrictEqual(expected);
    expect(TO_TEST.Time.converter.convertTo(expected)).toBe(FROM_STRING);
  });
});

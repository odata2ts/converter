import { dateTimeOffsetToDateConverter } from "../src";
import { execCommonConverterTests } from "./CommonTests";

describe("DateTimeOffsetToDateConverter Test", () => {
  const FROM_STRING = "2022-12-31T23:59:59.000Z";
  const FROM_STRING2 = "2022-12-31T23:59:59Z";

  const TO_TEST = dateTimeOffsetToDateConverter;

  execCommonConverterTests(TO_TEST);

  test("conversion", () => {
    const candidate = TO_TEST.convertFrom(FROM_STRING);
    const candidate2 = TO_TEST.convertFrom(FROM_STRING2);

    expect(candidate?.toISOString()).toBe(FROM_STRING);
    expect(candidate2?.toISOString()).toBe(FROM_STRING);
    expect(TO_TEST.convertTo(candidate)).toBe(FROM_STRING);
  });
});

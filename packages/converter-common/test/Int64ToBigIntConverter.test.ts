import { int64ToBigIntConverter } from "../src";
import { execCommonConverterTests } from "./CommonTests";

describe("Int64ToBigIntConverter Tests", () => {
  const FROM_STRING = "12345678901234567890";

  const TO_TEST = int64ToBigIntConverter;

  execCommonConverterTests(TO_TEST);

  test("conversion", () => {
    const candidate = TO_TEST.convertFrom(FROM_STRING);

    expect(candidate?.toString()).toBe(FROM_STRING);
    expect(TO_TEST.convertTo(candidate)).toBe(FROM_STRING);
  });

  test("conversion with ms precision", () => {
    const from = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1);
    const candidate = TO_TEST.convertFrom(from.toString());

    expect(candidate).toStrictEqual(from);
  });
});

import { ODataTypesV2 } from "@odata2ts/odata-core";

import { timeToMsDurationConverter } from "../src";

describe("TimeToMsDurationConverter Test", () => {
  const FROM_STRING = "PT23H59M59S";
  const FROM_WITH_MS = "PT23H50.123S";
  const TO_IN_MS = 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000;
  const TO_WITH_MS = 23 * 60 * 60 * 1000 + 50.123 * 1000;

  const TO_TEST = timeToMsDurationConverter;

  test("base attributes", () => {
    expect(TO_TEST.id).toBe("timeToMsDurationConverter");
    expect(TO_TEST.from).toBe(ODataTypesV2.Time);
    // expect(TO_TEST.to).toBe();
  });

  test("conversion", () => {
    const expected = { ms: TO_IN_MS };

    expect(TO_TEST.convertFrom(FROM_STRING)).toStrictEqual(expected);
    expect(TO_TEST.convertTo(expected)).toBe(FROM_STRING);
  });

  test("individual parts", () => {
    const h12 = 12 * 60 * 60 * 1000;
    const m12 = 12 * 60 * 1000;
    const s12 = 12 * 1000;

    expect(TO_TEST.convertFrom("PT12H")?.ms).toBe(h12);
    expect(TO_TEST.convertFrom("PT12M")?.ms).toBe(m12);
    expect(TO_TEST.convertFrom("PT12S")?.ms).toBe(s12);

    expect(TO_TEST.convertTo({ ms: h12 })).toBe("PT12H");
    expect(TO_TEST.convertTo({ ms: m12 })).toBe("PT12M");
    expect(TO_TEST.convertTo({ ms: s12 })).toBe("PT12S");
  });

  test("null and undefined", () => {
    expect(TO_TEST.convertFrom(null)).toBeNull();
    expect(TO_TEST.convertFrom(undefined)).toBeUndefined();
    expect(TO_TEST.convertFrom("WRONG")).toBeUndefined();

    expect(TO_TEST.convertTo(null)).toBeNull();
    expect(TO_TEST.convertTo(undefined)).toBeUndefined();
  });

  test("with ms precision", () => {
    const expected = { ms: TO_WITH_MS };

    expect(TO_TEST.convertFrom(FROM_WITH_MS)).toStrictEqual(expected);
    expect(TO_TEST.convertTo(expected)).toBe(FROM_WITH_MS);
  });
});

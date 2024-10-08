import { ValueConverter } from "@odata2ts/converter-api";
import { describe, expect, test } from "vitest";
import * as pkg from "../src";

describe("Luxon Converter Package Tests", function () {
  const usedConverters = [
    "dateToLuxonConverter",
    "timeOfDayToLuxonConverter",
    "dateTimeOffsetToLuxonConverter",
    "durationToLuxonConverter",
  ];

  test("package basics", () => {
    expect(pkg.default.id).toBe("Luxon");
    expect(pkg.default.converters.length).toBe(usedConverters.length);
  });

  test("converter basics", () => {
    pkg.default.converters.forEach((c) => {
      expect(c.id).toBeTruthy();
      expect(c.from).toBeTruthy();
      expect(c.to).toBeTruthy();

      expect(usedConverters.includes(c.id)).toBeTruthy();
    });
  });

  test("package exports", () => {
    usedConverters.forEach((uc) => {
      // @ts-ignore
      const c: ValueConverter<any, any> = pkg[uc];

      expect(typeof c).toBe("object");
      expect(typeof c.convertFrom).toBe("function");
      expect(typeof c.convertTo).toBe("function");
      expect(c.id).toBe(uc);
    });
  });
});

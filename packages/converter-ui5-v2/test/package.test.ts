import { ValueConverter } from "@odata2ts/converter-api";

import * as pkg from "../src";

describe("UI5 Converter Package Tests", function () {
  const usedConverters = [
    "stringToNumberConverter",
    "bigNumberNoopConverter",
    "dateTimeToDateTimeOffsetConverter",
    "dateTimeOffsetToDateConverter",
    "timeToMsDurationConverter",
  ];

  test("package basics", () => {
    expect(pkg.default.id).toBe("UI5");
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

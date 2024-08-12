import { ValueConverter } from "@odata2ts/converter-api";
import { expect, test } from "vitest";

export const execCommonConverterTests = (converter: ValueConverter<any, any>) => {
  test("null and undefined", () => {
    expect(converter.convertFrom(null)).toBeNull();
    expect(converter.convertFrom(undefined)).toBeUndefined();
    expect(converter.convertFrom("WRONG")).toBeUndefined();

    expect(converter.convertTo(null)).toBeNull();
    expect(converter.convertTo(undefined)).toBeUndefined();
  });
};

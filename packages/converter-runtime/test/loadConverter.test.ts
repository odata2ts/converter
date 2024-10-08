import { ValueConverterChain } from "@odata2ts/converter-runtime";
import { ODataTypesV2, ODataTypesV4, ODataVersions } from "@odata2ts/odata-core";
import { describe, expect, test } from "vitest";
import { getPropTypeAndModule, loadConverters } from "../src";

describe("LoadConverters Test", () => {
  const V2_TO_V4_PKG = "@odata2ts/converter-v2-to-v4";
  // time, dateTime, byte, sByte, single, double, int64, decimal
  const V2_TO_V4_CONVERTERS_SIZE = 8;
  const LUXON_PKG = "@odata2ts/converter-luxon";
  const TEST_CONV_PKG = "@odata2ts/converter-example";


  test("no converters", async () => {
    const result = await loadConverters(ODataVersions.V4, undefined);
    expect(result).toBeUndefined();
  });

  test("empty converters", async () => {
    const result = await loadConverters(ODataVersions.V4, []);
    expect(result).toBeUndefined();
  });

  test("load installed converter", async () => {
    const result = await loadConverters(ODataVersions.V2, [V2_TO_V4_PKG]);

    expect(result).toBeDefined();
    expect(result?.size).toBe(V2_TO_V4_CONVERTERS_SIZE);

    const timeType = result?.get(ODataTypesV2.Time);
    expect(timeType?.from).toBe("Edm.Time");
    expect(timeType?.to).toBe(ODataTypesV4.TimeOfDay);
    expect(timeType?.converters).toStrictEqual([
      {
        package: V2_TO_V4_PKG,
        converterId: "timeToTimeOfDayConverter",
      },
    ]);
  });

  test("fail to load converter", async () => {
    const fakeModule = "xxxxNotExistentxxxx";
    const expectedError = new Error(`Failed to load module "${fakeModule}"!`);

    await expect(loadConverters(ODataVersions.V2, [fakeModule])).rejects.toMatchObject(expectedError);
    await expect(loadConverters(ODataVersions.V2, [V2_TO_V4_PKG, fakeModule])).rejects.toMatchObject(expectedError);
    await expect(loadConverters(ODataVersions.V2, [fakeModule, V2_TO_V4_PKG])).rejects.toMatchObject(expectedError);
  });

  test("load installed converters with no application", async () => {
    const result = await loadConverters(ODataVersions.V4, [V2_TO_V4_PKG]);

    // all string number types would still be mapped, but not Edm.Time and Edm.DateTime
    expect(result).toBeDefined();
    expect(result?.size).toBe(V2_TO_V4_CONVERTERS_SIZE - 2);
  });

  test("specify installed converters without using any of them", async () => {
    const result = await loadConverters(ODataVersions.V4, [{ module: V2_TO_V4_PKG, use: [] }]);

    expect(result).toBeUndefined();
  });

  test("specify installed converters and use only two of them", async () => {
    const converterIds = ["timeToTimeOfDayConverter", "dateTimeToDateTimeOffsetConverter"];
    const result = await loadConverters(ODataVersions.V2, [{ module: V2_TO_V4_PKG, use: converterIds }]);

    expect(result).toBeDefined();
    expect(result?.size).toBe(converterIds.length);
    expect(result?.get(ODataTypesV2.Time)).toStrictEqual({
      from: ODataTypesV2.Time,
      to: ODataTypesV4.TimeOfDay,
      toModule: undefined,
      converters: [
        {
          package: V2_TO_V4_PKG,
          converterId: converterIds[0],
        },
      ],
    } as ValueConverterChain);
  });

  test("fail to load specific converter", async () => {
    const moduleId = "@odata2ts/converter-v2-to-v4";
    const fakeId = "xxxxNotExistentxxxx";
    const expectedError = new Error(`Converter with id "${fakeId}" doesn't exist in module "${moduleId}"!`);

    await expect(loadConverters(ODataVersions.V2, [{ module: V2_TO_V4_PKG, use: [fakeId] }])).rejects.toMatchObject(
      expectedError,
    );
    await expect(
      loadConverters(ODataVersions.V2, [{ module: V2_TO_V4_PKG, use: ["stringToNumberConverter", fakeId] }]),
    ).rejects.toMatchObject(expectedError);
  });

  test("last converter overrides some types of first converter", async () => {
    const converterIds = ["stringToNumberConverter", "bigNumberNoopConverter"];

    // only stringToNumber => decimal gets converted
    let result = await loadConverters(ODataVersions.V2, [{ module: V2_TO_V4_PKG, use: [converterIds[0]] }]);
    expect(result?.get(ODataTypesV2.Decimal)).toStrictEqual({
      from: ODataTypesV2.Decimal,
      to: "number",
      toModule: undefined,
      converters: [
        {
          package: V2_TO_V4_PKG,
          converterId: converterIds[0],
        },
      ],
    });

    // adding bigNumberNoop => decimal remains string
    result = await loadConverters(ODataVersions.V2, [{ module: V2_TO_V4_PKG, use: converterIds }]);
    expect(result?.get(ODataTypesV2.Decimal)).toStrictEqual({
      from: ODataTypesV2.Decimal,
      to: "string",
      toModule: undefined,
      converters: [
        {
          package: V2_TO_V4_PKG,
          converterId: converterIds[1],
        },
      ],
    });
    // make sure that other conversions still apply
    expect(result?.get(ODataTypesV2.Double)).toMatchObject({ to: "number" });
  });

  test("chaining", async () => {
    const modules = [V2_TO_V4_PKG, LUXON_PKG];

    const result = await loadConverters(ODataVersions.V2, modules);
    expect(result?.size).toBe(9);

    const dateTimeToLuxon = result?.get(ODataTypesV2.DateTime);
    expect(dateTimeToLuxon).toStrictEqual({
      from: ODataTypesV2.DateTime,
      to: "DateTime",
      toModule: "luxon",
      converters: [
        {
          package: V2_TO_V4_PKG,
          converterId: "dateTimeToDateTimeOffsetConverter",
        },
        {
          package: LUXON_PKG,
          converterId: "dateTimeOffsetToLuxonConverter",
        },
      ],
    } as ValueConverterChain);
  });

  test("getPropTypeAndModule", () => {
    expect(getPropTypeAndModule("aba")).toStrictEqual(["aba"]);
    expect(getPropTypeAndModule("AbA")).toStrictEqual(["AbA"]);
    expect(getPropTypeAndModule("aba.ts")).toStrictEqual(["ts", "aba"]);
    expect(getPropTypeAndModule("aba.js.Type")).toStrictEqual(["Type", "aba.js"]);
  });

  test("with fixing converter in between", async () => {
    const result = await loadConverters(ODataVersions.V4, [TEST_CONV_PKG]);

    const booleanChain = result?.get(ODataTypesV4.Boolean);
    expect(booleanChain).toStrictEqual({
      from: ODataTypesV4.Boolean,
      to: "string",
      toModule: undefined,
      converters: [
        {
          package: TEST_CONV_PKG,
          converterId: "exampleOfFixingConverter",
        },
        {
          package: TEST_CONV_PKG,
          converterId: "booleanToNumberConverter",
        },
        {
          package: TEST_CONV_PKG,
          converterId: "numberToStringConverter",
        },
      ],
    } as ValueConverterChain);
  });


});

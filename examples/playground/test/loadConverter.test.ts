import { loadConverters } from "@odata2ts/converter-runtime";
import { ODataVersions } from "@odata2ts/odata-core";

const V2_TO_V4 = "@odata2ts/converter-v2-to-v4";
const BIG_NUMBERS = "@odata2ts/converter-big-number";
const LUXON = "@odata2ts/converter-luxon";

describe("Loading actual converters", function () {
  const converters = [
    "@odata2ts/converter-v2-to-v4",
    { use: ["timeToDurationConverter"], module: "@odata2ts/converter-v2-to-v4" },
    {
      use: ["dateTimeOffsetToDateConverter", "simpleDurationConverter", "int64ToBigIntConverter"],
      module: "@odata2ts/converter-common",
    },
    "@odata2ts/converter-big-numbers",
  ];

  test("v2-to-v4: load default converters", async () => {
    const result = await loadConverters(ODataVersions.V2, [V2_TO_V4]);

    expect(result).toBeDefined();
    // multiple converters have been loaded: 6x stringToNumber, 2x date and time
    expect(result?.size).toBe(8);
    // test one from string to number
    expect(result?.get("Edm.Byte")).toStrictEqual({
      from: "Edm.Byte",
      to: "number",
      toModule: undefined,
      converters: [{ converterId: "stringToNumberConverter", package: V2_TO_V4 }],
    });
    expect(result?.get("Edm.DateTime")).toBeDefined();
  });

  test("v2-to-v4: load specific converter", async () => {
    const result = await loadConverters(ODataVersions.V2, [
      { use: ["stringToNumberConverter", "bigNumberNoopConverter"], module: V2_TO_V4 },
    ]);

    expect(result).toBeDefined();
    // only converters for numeric types
    expect(result?.size).toBe(6);
    // test one from string to number
    expect(result?.get("Edm.Byte")).toStrictEqual({
      from: "Edm.Byte",
      to: "number",
      toModule: undefined,
      converters: [{ converterId: "stringToNumberConverter", package: V2_TO_V4 }],
    });
    // no date time converter
    expect(result?.get("Edm.DateTime")).toBeUndefined();
    // bigNumber special handling
    expect(result?.get("Edm.Decimal")).toStrictEqual({
      from: "Edm.Decimal",
      to: "string",
      toModule: undefined,
      converters: [{ converterId: "bigNumberNoopConverter", package: V2_TO_V4 }],
    });
  });

  test("load big numbers converter", async () => {
    const result = await loadConverters(ODataVersions.V2, [BIG_NUMBERS]);

    expect(result).toBeDefined();
    // 2 converters have been loaded
    expect(result?.size).toBe(2);
    expect(result?.get("Edm.Int64")).toStrictEqual({
      from: "Edm.Int64",
      to: "BigNumber",
      toModule: "bignumber.js",
      converters: [{ converterId: "bigNumberConverter", package: BIG_NUMBERS }],
    });
    expect(result?.get("Edm.Decimal")).toStrictEqual({
      from: "Edm.Decimal",
      to: "BigNumber",
      toModule: "bignumber.js",
      converters: [{ converterId: "bigNumberConverter", package: BIG_NUMBERS }],
    });
  });

  test("luxon: load default converters", async () => {
    const result = await loadConverters(ODataVersions.V4, [LUXON]);

    expect(result).toBeDefined();
    // multiple converters have been loaded: 6x stringToNumber, 2x date and time
    expect(result?.size).toBe(4);
    // test one from string to number
    expect(result?.get("Edm.DateTimeOffset")).toStrictEqual({
      from: "Edm.DateTimeOffset",
      to: "DateTime",
      toModule: "luxon",
      converters: [{ converterId: "dateTimeOffsetToLuxonConverter", package: LUXON }],
    });
    expect(result?.get("Edm.Date")).toStrictEqual({
      from: "Edm.Date",
      to: "DateTime",
      toModule: "luxon",
      converters: [{ converterId: "dateToLuxonConverter", package: LUXON }],
    });
  });
});

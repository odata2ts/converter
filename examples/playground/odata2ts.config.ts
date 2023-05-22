import { ConfigFileOptions, EmitModes, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  mode: Modes.qobjects,
  emitMode: EmitModes.ts,
  prettier: true,
  converters: [
    "@odata2ts/converter-v2-to-v4",
    { use: ["timeToDurationConverter"], module: "@odata2ts/converter-v2-to-v4" },
    {
      use: ["dateTimeOffsetToDateConverter", "simpleDurationConverter", "int64ToBigIntConverter"],
      module: "@odata2ts/converter-common",
    },
  ],
  services: {
    test: {
      source: "src/test.xml",
      output: "build",
    },
  },
};

export default config;

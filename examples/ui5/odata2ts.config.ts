import { ConfigFileOptions, EmitModes, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  mode: Modes.qobjects,
  emitMode: EmitModes.ts,
  prettier: true,
  converters: ["@odata2ts/converter-ui5-v2"],
  services: {
    test: {
      source: "src/test.xml",
      output: "build",
    },
  },
};

export default config;

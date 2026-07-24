import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // examples/ui5 is dormant: it uses its own disconnected toolchain (jest/ts-jest/ts-node,
    // not this workspace's vitest) and its test imports generated output that's never produced
    // by any routine script here - vitest 4 started picking up its test file by default, unlike 2
    exclude: ["**/node_modules/**", "**/.git/**", "examples/ui5/**"],
    coverage: {
      provider: "istanbul",
      include: ["packages/**/src/**"],
      reporter: ["lcov", "html-spa"],
    },
  },
});

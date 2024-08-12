import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // TODO
    globals: true,
    coverage: {
      provider: "istanbul",
    },
  },
});

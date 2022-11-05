// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${__dirname}/src/`,
    },
  },
});

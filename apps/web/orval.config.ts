import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "http://localhost:3001/api-json",
    },
    output: {
      target: "./src/lib/api/generated/generated.ts",
      client: "react-query",
      mode: "tags-split",
      override: {
        mutator: {
          path: "./src/lib/api/custom-fetch.ts",
          name: "customFetch",
        },
      },
    },
  },
});

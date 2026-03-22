import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "http://localhost:3001/api-json",
    },
    output: {
      target: "./src/lib/api/generated.ts",
      client: "react-query",
      mode: "tags-split",
    },
  },
});

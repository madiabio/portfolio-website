import { defineConfig } from "orval";

const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export default defineConfig({
  api: {
    input: {
      target: `${NEXT_PUBLIC_API_URL}/api-json`,
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

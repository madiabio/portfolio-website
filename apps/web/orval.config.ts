import { defineConfig } from "orval";
import { config } from "dotenv";
import path from "node:path";

config({ path: path.resolve(__dirname, ".env.local") });

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

console.log("NEXT_PUBLIC_API_URL =", apiUrl);

if (!apiUrl) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export default defineConfig({
  api: {
    input: {
      target: `${apiUrl}/api-json`,
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

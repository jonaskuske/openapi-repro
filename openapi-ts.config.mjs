import { defineConfig } from "@hey-api/openapi-ts";
import { fileURLToPath } from "node:url";

export default defineConfig({
  input: "./openapi.json",
  output: {
    path: "./src",
    fileName: { suffix: null },
    indexFile: false,
    tsConfigPath: fileURLToPath(import.meta.resolve("./tsconfig.json")),
  },
  plugins: [
    { name: "@hey-api/sdk" },
    { name: "@hey-api/typescript", enums: "javascript" },
    { name: "@hey-api/client-angular", baseUrl: "/api" },
    { name: "@angular/common", httpRequests: 'flat' },
  ],
});

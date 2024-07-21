import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import path from "path";

// ref: https://vitest.dev/config/
export default defineConfig({
    "test": {
        "watch": false,
        "globals": true
    },
    "plugins": [tsconfigPaths()],
    resolve: {
        alias: {
            "@errors": path.resolve(__dirname, "./src/errors/"),
            "@utilities": path.resolve(__dirname, "./src/utilities/")
        }
    }
});

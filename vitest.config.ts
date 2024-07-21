import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// ref: https://vitest.dev/config/
export default defineConfig({
    "test": {
        "watch": false,
        "globals": true
    },
    "plugins": [tsconfigPaths()]
});

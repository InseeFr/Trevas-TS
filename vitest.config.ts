import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        watch: false,
        globals: true,
        include: ["src/**/*.spec.ts"],
        exclude: ["dist/**", "node_modules/**"]
    },
    plugins: [tsconfigPaths()]
});

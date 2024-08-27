import type { StorybookConfig } from "@storybook/react-vite";
const { mergeConfig } = require("vite");
const tsconfigPaths = require("vite-tsconfig-paths");

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["storybook-dark-mode"],
    core: {
        builder: "@storybook/builder-vite"
    },
    framework: {
        name: "@storybook/react-vite",
        options: {
            legacyRootApi: false
        }
    },
    env: config => ({
        ...config,
        NODE_ENV: "development"
    }),
    docs: {
        autodocs: false
    },
    typescript: {
        reactDocgen: "react-docgen-typescript"
    },
    staticDirs: ["./static"]
};
export default config;

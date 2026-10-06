import path from "node:path";
import { fileURLToPath } from "node:url";

import type { StorybookConfig } from "@storybook/react-webpack5";

const storybookDir = path.dirname(fileURLToPath(import.meta.url));

const reactDocgenExclude = [/\.storybook\//, /storybook-(config-entry|stories|preview|docs|manager)/];

type WebpackRule = {
    loader?: string;
    exclude?: RegExp | RegExp[];
    oneOf?: WebpackRule[];
    rules?: WebpackRule[];
};

function patchReactDocgenRules(rules: WebpackRule[] | undefined): void {
    for (const rule of rules ?? []) {
        if (typeof rule.loader === "string" && rule.loader.includes("react-docgen-loader")) {
            const current = rule.exclude;
            rule.exclude = Array.isArray(current)
                ? [...current, ...reactDocgenExclude]
                : current
                  ? [current, ...reactDocgenExclude]
                  : reactDocgenExclude;
        }

        patchReactDocgenRules(rule.oneOf);
        patchReactDocgenRules(rule.rules);
    }
}

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-docs",
        "storybook-dark-mode"
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },
    staticDirs: ["./static"],
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
        }
    },
    webpackFinal: async webpackConfig => {
        patchReactDocgenRules(webpackConfig.module?.rules as WebpackRule[] | undefined);

        webpackConfig.resolve ??= {};
        webpackConfig.resolve.alias = {
            ...webpackConfig.resolve.alias,
            // Prefer ESM entry: CJS require of monaco resolves to AMD min build otherwise
            "monaco-editor": path.resolve(storybookDir, "../node_modules/monaco-editor/esm/vs/index.js")
        };

        webpackConfig.module ??= { rules: [] };
        webpackConfig.module.rules ??= [];
        webpackConfig.module.rules.push({
            test: /\.ttf$/,
            type: "asset/resource"
        });

        return webpackConfig;
    }
};

export default config;

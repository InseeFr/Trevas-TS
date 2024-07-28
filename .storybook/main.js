const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["storybook-dark-mode"],
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
    staticDirs: ["./static"]
};
export default config;

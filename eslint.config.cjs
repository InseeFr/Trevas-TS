const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const prettier = require("eslint-config-prettier");
const reactHooks = require("eslint-plugin-react-hooks");
const storybook = require("eslint-plugin-storybook");

module.exports = [
    {
        ignores: [
            "node_modules/**",
            "dist/**",
            "storybook-static/**",
            "coverage/**",
            "docs/**",
            "eslint.config.cjs",
            "CHANGELOG.md"
        ]
    },
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true }
            }
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            "react-hooks": reactHooks
        },
        rules: {
            ...(tsPlugin.configs.recommended?.rules || {}),
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "react-hooks/rules-of-hooks": "error",
            ...(prettier.rules || {})
        }
    },
    ...(storybook.configs?.["flat/recommended"] || [])
];

import type { Preview } from "@storybook/react-webpack5";

import { darkTheme, lightTheme } from "./custom-theme";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        backgrounds: { disabled: true },
        darkMode: {
            stylePreview: true,
            light: lightTheme,
            dark: darkTheme,
            current: "dark"
        },
        options: {
            showPanel: false,
            storySort: { method: "alphabetical" }
        }
    }
};

export default preview;

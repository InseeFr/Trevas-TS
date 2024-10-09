import { darkTheme, lightTheme } from "./custom-theme";

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        options: { showPanel: false }
    },
    "darkMode": {
        "stylePreview": true,
        "light": lightTheme,
        "dark": darkTheme,
        "current": "dark"
    },
    "options": {
        storySort: { method: "alphabetical" }
    }
};

export default preview;

import { create } from "@storybook/theming";
import trevasLogoDark from "./static/trevas-logo-dark.png";
import trevasLogoLight from "./static/trevas-logo-light.png";

export const darkTheme = create({
    "base": "dark",
    "brandTitle": "Trevas TS",
    "brandImage": trevasLogoLight,
    "brandUrl": "https://github.com/InseeFr/Trevas-TS",

    "appBg": "#323137",
    "appContentBg": "#323137",

    "barBg": "#323137",

    "colorSecondary": "#9211ff",

    "textColor": "#f1f0eb",
    "textInverseColor": "#ffc0cb",

    "fontBase": '"Montserrat", sans-serif',
    "fontCode": "monospace"
});

export const lightTheme = create({
    "base": "light",
    "brandTitle": "Trevas TS",
    "brandImage": trevasLogoDark,
    "brandUrl": "https://github.com/InseeFr/Trevas-TS",

    "appBg": "#f2f2f3",
    "appContentBg": "#f2f2f3",
    "barBg": "#f2f2f3",

    "colorSecondary": "#9211ff",

    "textColor": "#0F417A",
    "textInverseColor": "#ffc0cb",

    "fontBase": '"Montserrat", sans-serif',
    "fontCode": "monospace"
});

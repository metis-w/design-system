import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

// Minimal theme configuration
const theme = create({
    base: "light",
    brandTitle: "Metis Design System",
    brandUrl: "https://github.com/metis-w/design-system",
    brandTarget: "_self",
    brandImage: "logo-ext.svg",
});

addons.setConfig({
    theme,
});

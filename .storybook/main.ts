import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
    stories: [
        "../src/**/stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: ["@storybook/addon-docs"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    async viteFinal(config) {
        // Add alias support
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": resolve(process.cwd(), "src"),
        };

        // Add PostCSS support
        config.css = config.css || {};
        config.css.postcss = resolve(process.cwd(), "postcss.config.js");

        return config;
    },
};
export default config;

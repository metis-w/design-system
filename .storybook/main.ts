import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
    stories: [
        "../src/introduction/**/*.mdx",
        "../src/**/stories.@(js|jsx|mjs|ts|tsx)",
    ],
    staticDirs: ["./public"],
    addons: ["@storybook/addon-docs", "@storybook/addon-onboarding"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        defaultName: "Documentation",
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

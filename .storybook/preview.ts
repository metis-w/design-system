import type { Preview } from "@storybook/react-vite";

// Import our styles
import "../src/foundations/index.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            expanded: true,
            sort: "requiredFirst",
        },
        backgrounds: {
            default: "light",
            values: [
                {
                    name: "light",
                    value: "#ffffff",
                },
                {
                    name: "neutral-50",
                    value: "#fafafa",
                },
                {
                    name: "neutral-100",
                    value: "#f5f5f5",
                },
                {
                    name: "yellow-50",
                    value: "#fefce8",
                },
            ],
        },
        viewport: {
            viewports: {
                mobile: {
                    name: "Mobile",
                    styles: {
                        width: "375px",
                        height: "667px",
                    },
                },
                tablet: {
                    name: "Tablet",
                    styles: {
                        width: "768px",
                        height: "1024px",
                    },
                },
                desktop: {
                    name: "Desktop",
                    styles: {
                        width: "1200px",
                        height: "800px",
                    },
                },
                large: {
                    name: "Large Desktop",
                    styles: {
                        width: "1440px",
                        height: "900px",
                    },
                },
            },
        },
        actions: { 
            argTypesRegex: "^on[A-Z].*" 
        },
    },
};

export default preview;

import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { resolve } from "path";
import { readdirSync } from "fs";
import { defineConfig } from "vite";

function getStylesEntries() {
    const stylesDir = resolve(__dirname, "src/styles");
    const entries = { index: resolve(__dirname, "src/index.ts") };

    try {
        readdirSync(stylesDir).forEach((file) => {
            if (file.endsWith(".css")) {
                const name = file.replace(".css", "");
                entries[name] = resolve(stylesDir, file);
            }
        });
    } catch (error) {
        console.warn("Styles directory not found, skipping CSS entries");
    }
    return entries;
}

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        lib: {
            entry: getStylesEntries(),
            name: "metis-design-system",
            fileName: (format, entryName) => `${entryName}.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        cssCodeSplit: true,
    },
});

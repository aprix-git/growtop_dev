import { defineConfig } from 'vite';
import path from "path"

export default defineConfig({
    build: {
        minify: 'esbuild',
        lib: {
            entry: path.resolve(__dirname, 'lib/main.ts'),
            name: 'GrowTopMainBundle',
            formats: ['es'],
            fileName: () => `custom.js`
        },
        outDir: '../js',
    },
});
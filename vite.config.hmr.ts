import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";
import pluginSVGR from "vite-plugin-svgr";
import pluginTsconfigPaths from "vite-tsconfig-paths";

const EXTERNALS = [
  "aws-sdk",
  "crypto",
  "fs",
  "mock-aws-s3",
  "nock",
  "path",
];

export default defineConfig({
  build: {
    outDir: "build",
    rollupOptions: { input: { app: "./index.hmr.html" } },
  },
  optimizeDeps: { exclude: EXTERNALS },
  plugins: [
    pluginReact(),
    pluginSVGR(),
    pluginTsconfigPaths(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".mts", ".json"],
  },
  server: {
    open: "./index.hmr.html",
    port: 3333,
    strictPort: true,
  },
});

import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";

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
    rolldownOptions: { input: { app: "./index.hmr.html" } },
  },
  optimizeDeps: { exclude: EXTERNALS },
  plugins: [pluginReact()],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".mts", ".json"],
    tsconfigPaths: true,
  },
  server: {
    open: "./index.hmr.html",
    port: 3333,
    strictPort: true,
  },
});

import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";
import pluginSVGR from "vite-plugin-svgr";
import pluginTsconfigPaths from "vite-tsconfig-paths";

const EXTERNALS = ["crypto", "fs", "path"];

export default defineConfig({
  build: { outDir: "build" },
  optimizeDeps: { exclude: EXTERNALS },
  plugins: [pluginReact(), pluginSVGR(), pluginTsconfigPaths()],
  resolve: { extensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".mts", ".json"] },
});

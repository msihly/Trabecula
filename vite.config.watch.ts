import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react";
import pluginSVGR from "vite-plugin-svgr";
import pluginTsconfigPaths from "vite-tsconfig-paths";

const EXTERNALS = ["crypto", "fs", "path"];

export default defineConfig({
  build: {
    minify: false,
    outDir: "build",
    sourcemap: true,
    watch: { include: ["trabecula/**/*"] },
  },
  define: { "process.env.BUILD_DEV": true },
  optimizeDeps: { exclude: EXTERNALS },
  plugins: [pluginReact(), pluginSVGR(), pluginTsconfigPaths()],
});

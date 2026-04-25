import { cp, readFile, writeFile } from "fs/promises";
import { defineConfig } from "tsup";

const CSS_SRC = "trabecula/css";
const CSS_DEST = "dist/css";

const inlineFonts = async () => {
  const css = await readFile(`${CSS_DEST}/fonts.css`, "utf-8");
  const matches = [...css.matchAll(/url\("\.\/fonts\/(.*?)"\)/g)];
  let result = css;
  for (const match of matches) {
    const font = await readFile(`${CSS_DEST}/fonts/${match[1]}`);
    result = result.replace(match[0], `url("data:font/woff2;base64,${font.toString("base64")}")`);
  }
  await writeFile(`${CSS_DEST}/fonts.css`, result);
};

export default defineConfig({
  entry: {
    "_generated/client/index": "trabecula/_generated/client/index.ts",
    "components/index": "trabecula/components/index.ts",
    "utils/client/index": "trabecula/utils/client/index.ts",
    "utils/common/index": "trabecula/utils/common/index.ts",
  },
  external: [
    "@emotion/cache",
    "@emotion/react",
    "@emotion/styled",
    "mobx-react-lite",
    "react-dom",
    "react",
    "tss-react",
  ],
  format: ["cjs"],
  target: "es2015",
  bundle: true,
  dts: true,
  outDir: "dist/trabecula",
  sourcemap: true,
  onSuccess: async () => {
    await cp("plugins", "dist/plugins", { recursive: true });
    await cp("patches", "dist/patches", { recursive: true });

    await cp(CSS_SRC, CSS_DEST, { recursive: true });
    await writeFile(
      `${CSS_DEST}/fonts.css.d.ts`,
      "declare const styles: string;\nexport default styles;\n",
    );
    await inlineFonts();
  },
});

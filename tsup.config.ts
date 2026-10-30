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
    "utils/electron/index": "trabecula/utils/electron/index.ts",
    "utils/generator/index": "trabecula/utils/generator/index.ts",
    "utils/process/index": "trabecula/utils/process/index.ts",
    "utils/process/mongo-client/index": "trabecula/utils/process/mongo-client.ts",
    "utils/process/mongo/index": "trabecula/utils/process/mongo.ts",
    "utils/process/rpc/index": "trabecula/utils/process/rpc.ts",
    "utils/process/socket/index": "trabecula/utils/process/socket.ts",
    "utils/rpc/index": "trabecula/utils/rpc/index.ts",
    "utils/server/index": "trabecula/utils/server/index.ts",
    "utils/server/mongo/index": "trabecula/utils/server/mongo.ts",
    "utils/socket/index": "trabecula/utils/socket/index.ts",
  },
  external: [
    "@emotion/cache",
    "@emotion/react",
    "@emotion/styled",
    "electron",
    "fdir",
    "mobx",
    "mobx-keystone",
    "mobx-react-lite",
    "mongodb-memory-server",
    "mongoose",
    "prettier",
    "react-dom",
    "react",
    "socket.io",
    "socket.io-client",
    "tss-react",
  ],
  format: ["cjs", "esm"],
  target: "es2015",
  bundle: true,
  dts: true,
  outDir: "dist/trabecula",
  sourcemap: true,
  outExtension: ({ format }) => ({ js: format === "esm" ? ".mjs" : ".js" }),
  onSuccess: async () => {
    await cp("plugins", "dist/plugins", { recursive: true });

    await cp("patches", "dist/patches", { recursive: true });

    await cp(
      "node_modules/react-toastify/dist/ReactToastify.css",
      `${CSS_DEST}/react-toastify.css`,
      { recursive: true },
    );

    await cp(
      "node_modules/react-toastify/dist/ReactToastify.css.map",
      `${CSS_DEST}/ReactToastify.css.map`,
    );

    await cp(CSS_SRC, CSS_DEST, { recursive: true });

    const cssDtsStub = "declare const styles: string;\nexport default styles;\n";
    await writeFile(`${CSS_DEST}/fonts.css.d.ts`, cssDtsStub);
    await writeFile(`${CSS_DEST}/react-toastify.css.d.ts`, cssDtsStub);

    await inlineFonts();
  },
});

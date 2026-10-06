var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "node_modules/picocolors/picocolors.js"(exports2, module2) {
    var p = process || {};
    var argv = p.argv || [];
    var env = p.env || {};
    var isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input, index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let result = "", cursor = 0;
      do {
        result += string.substring(cursor, index) + replace;
        cursor = index + close.length;
        index = string.indexOf(close, cursor);
      } while (~index);
      return result + string.substring(cursor);
    };
    var createColors = (enabled = isColorSupported) => {
      let f = enabled ? formatter : () => String;
      return {
        isColorSupported: enabled,
        reset: f("\x1B[0m", "\x1B[0m"),
        bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
        dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
        italic: f("\x1B[3m", "\x1B[23m"),
        underline: f("\x1B[4m", "\x1B[24m"),
        inverse: f("\x1B[7m", "\x1B[27m"),
        hidden: f("\x1B[8m", "\x1B[28m"),
        strikethrough: f("\x1B[9m", "\x1B[29m"),
        black: f("\x1B[30m", "\x1B[39m"),
        red: f("\x1B[31m", "\x1B[39m"),
        green: f("\x1B[32m", "\x1B[39m"),
        yellow: f("\x1B[33m", "\x1B[39m"),
        blue: f("\x1B[34m", "\x1B[39m"),
        magenta: f("\x1B[35m", "\x1B[39m"),
        cyan: f("\x1B[36m", "\x1B[39m"),
        white: f("\x1B[37m", "\x1B[39m"),
        gray: f("\x1B[90m", "\x1B[39m"),
        bgBlack: f("\x1B[40m", "\x1B[49m"),
        bgRed: f("\x1B[41m", "\x1B[49m"),
        bgGreen: f("\x1B[42m", "\x1B[49m"),
        bgYellow: f("\x1B[43m", "\x1B[49m"),
        bgBlue: f("\x1B[44m", "\x1B[49m"),
        bgMagenta: f("\x1B[45m", "\x1B[49m"),
        bgCyan: f("\x1B[46m", "\x1B[49m"),
        bgWhite: f("\x1B[47m", "\x1B[49m"),
        blackBright: f("\x1B[90m", "\x1B[39m"),
        redBright: f("\x1B[91m", "\x1B[39m"),
        greenBright: f("\x1B[92m", "\x1B[39m"),
        yellowBright: f("\x1B[93m", "\x1B[39m"),
        blueBright: f("\x1B[94m", "\x1B[39m"),
        magentaBright: f("\x1B[95m", "\x1B[39m"),
        cyanBright: f("\x1B[96m", "\x1B[39m"),
        whiteBright: f("\x1B[97m", "\x1B[39m"),
        bgBlackBright: f("\x1B[100m", "\x1B[49m"),
        bgRedBright: f("\x1B[101m", "\x1B[49m"),
        bgGreenBright: f("\x1B[102m", "\x1B[49m"),
        bgYellowBright: f("\x1B[103m", "\x1B[49m"),
        bgBlueBright: f("\x1B[104m", "\x1B[49m"),
        bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
        bgCyanBright: f("\x1B[106m", "\x1B[49m"),
        bgWhiteBright: f("\x1B[107m", "\x1B[49m")
      };
    };
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// trabecula/utils/generator/index.ts
var generator_exports = {};
__export(generator_exports, {
  ROOT_PATH: () => ROOT_PATH,
  createFiles: () => createFiles,
  formatFile: () => formatFile,
  makeIndexDef: () => makeIndexDef,
  makeSectionComment: () => makeSectionComment,
  parseExports: () => parseExports,
  parseExportsFromIndex: () => parseExportsFromIndex
});
module.exports = __toCommonJS(generator_exports);

// trabecula/utils/generator/files.ts
var import_promises = __toESM(require("fs/promises"));
var import_path = __toESM(require("path"));
var import_picocolors = __toESM(require_picocolors());
var import_prettier = __toESM(require("prettier"));
var ROOT_PATH = import_path.default.resolve(".", "trabecula");
var createFiles = (folder, fileDefs) => __async(null, null, function* () {
  yield import_promises.default.mkdir(folder, { recursive: true });
  makeIndexDef(fileDefs);
  for (const fileDef of fileDefs) {
    try {
      const filePath = import_path.default.resolve(folder, `${fileDef.name}.ts`);
      const file = yield formatFile(
        `${makeSectionComment("THIS IS A GENERATED FILE. DO NOT EDIT.")}
${yield fileDef.makeFile()}`
      );
      yield import_promises.default.writeFile(filePath, file);
      console.log(import_picocolors.default.green(`Created ${filePath}`));
    } catch (err) {
      console.error(import_picocolors.default.red(`
[ERROR] '${fileDef.name}': ${err.message}

${err.stack}
`));
      throw err;
    }
  }
});
var formatFile = (str) => import_prettier.default.format(str, { parser: "typescript", printWidth: 100, tabWidth: 2, useTabs: false });
var makeIndexDef = (fileDefs) => {
  const imports = fileDefs.map((fileDef) => `export * from "./${fileDef.name}";`).join("\n");
  fileDefs.push({ name: "index", makeFile: () => __async(null, null, function* () {
    return imports;
  }) });
};
var makeSectionComment = (sectionName) => `/* ${"-".repeat(75)} */
/* ${" ".repeat(30)}${sectionName}
/* ${"-".repeat(75)} */`;
var parseExports = (filePath) => __async(null, null, function* () {
  var _a;
  const fileContent = yield import_promises.default.readFile(filePath, { encoding: "utf-8" });
  const fnRegEx = /export\s+(class|const|function|let)\s+\w+/;
  const ignoreComment = "// @generator-ignore-export";
  const lines = fileContent.split("\n");
  const exportedFunctions = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const match = line.match(fnRegEx);
    if (match) {
      const prevLine = (_a = lines[i - 1]) == null ? void 0 : _a.trim();
      if (prevLine !== ignoreComment) {
        exportedFunctions.push(match[0].replace(/export\s+(class|const|function|let)\s+/, ""));
      }
    }
  }
  if (exportedFunctions.length === 0)
    throw new Error(`No exported functions found in '${filePath}'`);
  return exportedFunctions;
});
var parseExportsFromIndex = (indexFilePath) => __async(null, null, function* () {
  const indexContent = yield import_promises.default.readFile(indexFilePath, { encoding: "utf-8" });
  const exportRegEx = /export\s+\*\s+from\s+"\.\/([\w-]+)";/g;
  const fileNames = [...indexContent.matchAll(exportRegEx)].map((match) => match[1]);
  const exportsMap = yield Promise.all(
    fileNames.map(
      (fileName) => parseExports(import_path.default.join(import_path.default.dirname(indexFilePath), `${fileName}.ts`))
    )
  );
  return exportsMap.flat();
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ROOT_PATH,
  createFiles,
  formatFile,
  makeIndexDef,
  makeSectionComment,
  parseExports,
  parseExportsFromIndex
});
//# sourceMappingURL=index.js.map
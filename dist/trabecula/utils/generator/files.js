"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseExportsFromIndex = exports.parseExports = exports.makeSectionComment = exports.makeIndexDef = exports.formatFile = exports.createFiles = exports.ROOT_PATH = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const picocolors_1 = __importDefault(require("picocolors"));
const prettier_1 = __importDefault(require("prettier"));
exports.ROOT_PATH = path_1.default.resolve(".", "trabecula");
const createFiles = async (folder, fileDefs) => {
    try {
        await promises_1.default.mkdir(folder, { recursive: true });
        (0, exports.makeIndexDef)(fileDefs);
    }
    catch (err) {
        console.error(err);
    }
    for (const fileDef of fileDefs) {
        try {
            const filePath = path_1.default.resolve(folder, `${fileDef.name}.ts`);
            const file = await (0, exports.formatFile)(`${(0, exports.makeSectionComment)("THIS IS A GENERATED FILE. DO NOT EDIT.")}\n${await fileDef.makeFile()}`);
            await promises_1.default.writeFile(filePath, file);
            console.log(picocolors_1.default.green(`Created ${filePath}`));
        }
        catch (err) {
            console.error(picocolors_1.default.red(`\n[ERROR] '${fileDef.name}': ${err.message}\n\n${err.stack}\n`));
        }
    }
};
exports.createFiles = createFiles;
const formatFile = (str) => prettier_1.default.format(str, { parser: "typescript", printWidth: 100, tabWidth: 2, useTabs: false });
exports.formatFile = formatFile;
const makeIndexDef = (fileDefs) => {
    const imports = fileDefs.map((fileDef) => `export * from "./${fileDef.name}";`).join("\n");
    fileDefs.push({ name: "index", makeFile: async () => imports });
};
exports.makeIndexDef = makeIndexDef;
const makeSectionComment = (sectionName) => `/* ${"-".repeat(75)} */\n/* ${" ".repeat(30)}${sectionName}\n/* ${"-".repeat(75)} */`;
exports.makeSectionComment = makeSectionComment;
const parseExports = async (filePath) => {
    const fileContent = await promises_1.default.readFile(filePath, { encoding: "utf-8" });
    const fnRegEx = /export\s+(class|const|function|let)\s+\w+/;
    const ignoreComment = "// @generator-ignore-export";
    const lines = fileContent.split("\n");
    const exportedFunctions = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const match = line.match(fnRegEx);
        if (match) {
            const prevLine = lines[i - 1]?.trim();
            if (prevLine !== ignoreComment) {
                exportedFunctions.push(match[0].replace(/export\s+(class|const|function|let)\s+/, ""));
            }
        }
    }
    if (exportedFunctions.length === 0)
        throw new Error(`No exported functions found in '${filePath}'`);
    return exportedFunctions;
};
exports.parseExports = parseExports;
const parseExportsFromIndex = async (indexFilePath) => {
    const indexContent = await promises_1.default.readFile(indexFilePath, { encoding: "utf-8" });
    const exportRegEx = /export\s+\*\s+from\s+"\.\/([\w-]+)";/g;
    const fileNames = [...indexContent.matchAll(exportRegEx)].map((match) => match[1]);
    const exportsMap = await Promise.all(fileNames.map((fileName) => (0, exports.parseExports)(path_1.default.join(path_1.default.dirname(indexFilePath), `${fileName}.ts`))));
    return exportsMap.flat();
};
exports.parseExportsFromIndex = parseExportsFromIndex;

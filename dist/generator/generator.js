"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const file_defs_1 = require("trabecula/generator/file-defs");
const generator_1 = require("trabecula/utils/generator");
(async () => {
    try {
        console.log(chalk_1.default.cyan("\nGenerating files..."));
        await (0, generator_1.createFiles)(`${generator_1.ROOT_PATH}/_generated/client`, file_defs_1.CLIENT_FILE_DEFS);
        console.log(chalk_1.default.green("\nDone!"));
    }
    catch (err) {
        console.error(chalk_1.default.red(err.message));
    }
})();

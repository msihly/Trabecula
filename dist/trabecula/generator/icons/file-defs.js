"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_DEF_ICONS = void 0;
const path_1 = __importDefault(require("path"));
const ligatures_1 = require("ligatures");
const common_1 = require("trabecula/utils/common");
exports.FILE_DEF_ICONS = {
    name: "icons",
    makeFile: async () => {
        const fontPath = path_1.default.resolve("trabecula/css/fonts/material-icons-round.woff2");
        const iconNames = [...new Set(await (0, ligatures_1.getLigaturesFromPath)(fontPath))]
            .map(common_1.Fmt.snakeToPascal)
            .sort();
        return `export const MUI_ICONS = [${iconNames.map((name) => `"${name}"`).join(",\n")}] as const;\n
      export type IconName = typeof MUI_ICONS[number];`;
    },
};

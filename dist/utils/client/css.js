"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = exports.makeClasses = exports.makePadding = exports.makeMargins = exports.makeBorderRadiuses = exports.makeBorders = void 0;
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const color_1 = __importDefault(require("color"));
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const tss_react_1 = require("tss-react");
const makeBorders = (props) => ({
    border: props?.all,
    borderTop: props?.top,
    borderBottom: props?.bottom,
    borderRight: props?.right,
    borderLeft: props?.left,
});
exports.makeBorders = makeBorders;
const makeBorderRadiuses = (radiuses) => ({
    borderTopLeftRadius: radiuses?.topLeft ?? radiuses?.top ?? radiuses?.left ?? radiuses?.all,
    borderTopRightRadius: radiuses?.topRight ?? radiuses?.top ?? radiuses?.right ?? radiuses?.all,
    borderBottomLeftRadius: radiuses?.bottomLeft ?? radiuses?.bottom ?? radiuses?.left ?? radiuses?.all,
    borderBottomRightRadius: radiuses?.bottomRight ?? radiuses?.bottom ?? radiuses?.right ?? radiuses?.all,
});
exports.makeBorderRadiuses = makeBorderRadiuses;
const makeMargins = (props) => ({
    margin: props?.all,
    marginTop: props?.top,
    marginBottom: props?.bottom,
    marginRight: props?.right,
    marginLeft: props?.left,
});
exports.makeMargins = makeMargins;
const makePadding = (props) => ({
    padding: props?.all,
    paddingTop: props?.top,
    paddingBottom: props?.bottom,
    paddingRight: props?.right,
    paddingLeft: props?.left,
});
exports.makePadding = makePadding;
const { makeStyles } = (0, tss_react_1.createMakeAndWithStyles)({ useTheme: styles_1.useTheme });
const makeClasses = (fnOrObj) => {
    return (params) => {
        const { classes: css, cx } = makeStyles()((props, theme) => typeof fnOrObj === "function" ? fnOrObj(theme, props) : fnOrObj)(params);
        return { css, cx };
    };
};
exports.makeClasses = makeClasses;
const customColors = {
    black: "#131313",
    blue: "#2866c5",
    blueGrey: "#546e7a",
    brown: "#6d4c41",
    darkGrey: "#2b2b2b",
    green: "#2e7d32",
    grey: "#4b4b4b",
    lightBlue: "#578cdd",
    lightGrey: "#bdbdbd",
    orange: "#ad6a27",
    purple: "#683980",
    red: "#982525",
    white: "#f5f5f5",
    yellow: "#e3c648",
};
const tagCategories = [
    customColors.red,
    customColors.orange,
    customColors.yellow,
    customColors.green,
    customColors.blue,
    customColors.blueGrey,
    customColors.purple,
].map((c) => [
    (0, color_1.default)(c).lighten(0.4).hex(),
    (0, color_1.default)(c).lighten(0.2).hex(),
    (0, color_1.default)(c).hex(),
    (0, color_1.default)(c).darken(0.2).hex(),
    (0, color_1.default)(c).darken(0.4).hex(),
]);
exports.colors = {
    background: "#1E1E1E",
    custom: customColors,
    foreground: "#2C2C2C",
    foregroundCard: "#343434",
    mui: material_1.colors,
    tagCategories,
};

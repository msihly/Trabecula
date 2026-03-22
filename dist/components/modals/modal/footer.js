"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const Footer = ({ children, uniformWidth = "10rem", ...props }) => {
    return ((0, jsx_runtime_1.jsx)(material_1.DialogActions, { children: (0, jsx_runtime_1.jsx)(components_1.UniformList, { row: true, justify: "center", spacing: "0.5rem", width: "100%", uniformWidth, ...props, children: children }) }));
};
exports.Footer = Footer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const Dropdown = ({ options, value, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(components_1.Input, { ...props, value: value, select: true, children: options.map((o, i) => ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: o.value, children: (0, jsx_runtime_1.jsx)(components_1.Text, { children: o.label }) }, i))) }));
};
exports.Dropdown = Dropdown;

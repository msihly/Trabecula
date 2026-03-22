"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Divider = ({ ...props }) => {
    return (0, jsx_runtime_1.jsx)(material_1.Divider, { flexItem: true, ...props });
};
exports.Divider = Divider;

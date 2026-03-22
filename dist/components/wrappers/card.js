"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const common_1 = require("trabecula/utils/common");
exports.Card = (0, components_1.Comp)(({ bgColor = client_1.colors.foreground, borderRadiuses = {}, children, column = true, display = "flex", header, height, headerProps, overflow, padding = {}, row = false, spacing, width, ...viewProps }, ref) => {
    borderRadiuses = (0, common_1.deepMerge)({ bottom: "0.5rem", top: !!header ? 0 : "0.5rem" }, borderRadiuses);
    padding = (0, common_1.deepMerge)({ all: "0.5rem" }, padding);
    return ((0, jsx_runtime_1.jsx)(components_1.HeaderWrapper, { ...viewProps, borderRadiuses, display, header, headerProps, height, overflow, width, children: (0, jsx_runtime_1.jsx)(components_1.View, { position: "relative", column: column && !row, flex: 1, bgColor, borderRadiuses, height, overflow, padding, ref, row, spacing, width, ...viewProps, "aria-label": "card", children: children }) }));
});

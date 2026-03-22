"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
exports.ColorPicker = (0, components_1.Comp)(({ color = client_1.colors.custom.black, label = "Color", menuProps = {}, noIcon = false, setValue, swatches = [], value, viewProps = {}, width = "fit-content", ...buttonProps }) => {
    const handleNoColor = () => setValue(null);
    const renderButton = (onOpen) => ((0, jsx_runtime_1.jsx)(components_1.Button, { onClick: onOpen, color: color, justify: "space-between", padding: { left: "0.5em", right: "0.5em" }, width: width, ...buttonProps, children: (0, jsx_runtime_1.jsxs)(components_1.View, { row: true, spacing: "0.5rem", align: "center", children: [noIcon ? (0, jsx_runtime_1.jsx)(components_1.View, {}) : (0, jsx_runtime_1.jsx)(components_1.Icon, { name: "Palette", size: "1.15em" }), (0, jsx_runtime_1.jsx)(components_1.Text, { lineHeight: 1, children: label }), (0, jsx_runtime_1.jsx)(components_1.Icon, { name: "Circle", color: value === null ? "transparent" : value })] }) }));
    return ((0, jsx_runtime_1.jsx)(components_1.MenuButton, { button: renderButton, keepMounted: false, ...menuProps, children: (0, jsx_runtime_1.jsxs)(components_1.View, { column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto", ...viewProps, children: [(0, jsx_runtime_1.jsx)(components_1.Button, { text: "No Color", icon: "Close", onClick: handleNoColor, color: value === null ? client_1.colors.custom.black : client_1.colors.background, textColor: value === null ? client_1.colors.custom.white : client_1.colors.custom.lightGrey }), (0, jsx_runtime_1.jsx)(components_1.View, { column: true, children: swatches.map((swatch, i) => ((0, jsx_runtime_1.jsx)(components_1.View, { row: true, children: swatch.map((c) => ((0, jsx_runtime_1.jsx)(components_1.IconButton, { name: "Circle", iconProps: { color: c, size: "1.4em" }, sx: { border: `3px solid ${value === c ? c : "transparent"}` }, onClick: () => setValue(c) }, c))) }, i))) })] }) }));
});

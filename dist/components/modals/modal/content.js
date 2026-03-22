"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const Content = ({ children, className, dividers = true, overflow = "auto", padding, position = "relative", ...viewProps }) => {
    const { css } = useClasses(null);
    padding = { all: `${dividers ? "0.5rem" : "0.2rem"} 1rem`, ...padding };
    return ((0, jsx_runtime_1.jsx)(material_1.DialogContent, { dividers, className: css.content, children: (0, jsx_runtime_1.jsx)(components_1.View, { column: true, flex: 1, spacing: "0.5rem", width: "100%", height: "100%", className, overflow, padding, position, ...viewProps, children: children }) }));
};
exports.Content = Content;
const useClasses = (0, client_1.makeClasses)({
    content: {
        display: "flex",
        padding: 0,
    },
});

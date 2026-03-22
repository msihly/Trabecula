"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingOverlay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const LoadingOverlay = ({ children, isLoading, sub }) => {
    const { css } = useClasses({ isLoading });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [children, (0, jsx_runtime_1.jsxs)(components_1.View, { column: true, align: "center", justify: "center", spacing: "1rem", height: "100%", width: "100%", opacity: isLoading ? 1 : 0, className: css.loadingOverlay, children: [(0, jsx_runtime_1.jsx)(material_1.CircularProgress, { color: "inherit" }), typeof sub === "string" ? ((0, jsx_runtime_1.jsx)(components_1.Text, { preset: "title", fontSize: "0.9em", children: sub })) : (sub)] })] }));
};
exports.LoadingOverlay = LoadingOverlay;
const useClasses = (0, client_1.makeClasses)((props) => ({
    loadingOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 100,
        transition: "all 225ms ease-in-out",
        pointerEvents: props.isLoading ? "auto" : "none",
    },
}));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const color_1 = __importDefault(require("color"));
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
exports.ProgressBar = (0, components_1.Comp)((props) => {
    const minWidth = props?.minWidth || "2em";
    const { css } = useClasses(null);
    return ((0, jsx_runtime_1.jsxs)(components_1.View, { row: true, flex: 1, align: "center", spacing: "1rem", ...props.viewProps, children: [props.withText ? ((0, jsx_runtime_1.jsxs)(components_1.View, { row: true, spacing: "0.5rem", children: [(0, jsx_runtime_1.jsx)(components_1.Text, { minWidth: minWidth, textAlign: "center", children: props.numerator > -1
                            ? (props.numeratorFormatter?.(props.numerator) ?? props.numerator)
                            : "--" }), (0, jsx_runtime_1.jsx)(components_1.Text, { children: "/" }), (0, jsx_runtime_1.jsx)(components_1.Text, { minWidth: minWidth, textAlign: "center", color: client_1.colors.custom.lightGrey, children: props.denominator > -1
                            ? (props.denominatorFormatter?.(props.denominator) ?? props.denominator)
                            : "--" })] })) : null, (0, jsx_runtime_1.jsx)(material_1.LinearProgress, { variant: "determinate", value: ((props.numerator || 0) / (props.denominator || 1)) * 100, className: css.progressBar })] }));
});
const useClasses = (0, client_1.makeClasses)({
    progressBar: {
        flex: 1,
        backgroundColor: (0, color_1.default)(client_1.colors.custom.blue).fade(0.5).string(),
        "& .MuiLinearProgress-bar": {
            backgroundColor: client_1.colors.custom.blue,
        },
    },
});

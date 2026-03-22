"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const color_1 = __importDefault(require("color"));
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const Tooltip = ({ arrow = true, bgColor = client_1.colors.background, borderColor = client_1.colors.custom.blue, children, color, flexShrink = 0, fontSize = "0.95em", minWidth, maxWidth = "25rem", padding = "0.4rem 0.8rem", placement = "bottom-start", title, viewProps = {}, ...props }) => {
    const { css } = useClasses({
        borderColor,
        bgColor,
        color,
        flexShrink,
        fontSize,
        maxWidth,
        minWidth,
        padding,
    });
    return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, { ...props, arrow, placement, title, classes: { arrow: css.arrow, popper: css.popper, tooltip: css.tooltip }, children: (0, jsx_runtime_1.jsx)(components_1.View, { ...viewProps, className: css.container, children: children }) }));
};
exports.Tooltip = Tooltip;
const useClasses = (0, client_1.makeClasses)((props) => ({
    arrow: {
        color: props.borderColor,
    },
    container: {
        display: "flex",
        flexShrink: props.flexShrink,
        overflow: "hidden",
        textOverflow: "ellipsis",
        userSelect: "auto",
    },
    tooltip: {
        border: `3px solid ${props.borderColor}`,
        maxWidth: props.maxWidth,
        minWidth: props.minWidth,
        padding: props.padding,
        backgroundColor: (0, color_1.default)(props.bgColor).fade(0.03).string(),
        color: props.color,
        fontSize: props.fontSize,
        whiteSpace: "pre-wrap",
        boxShadow: "rgb(0 0 0 / 97%) 0px 0px 2px 0px",
    },
    popper: {
        zIndex: 1000000,
    },
}));

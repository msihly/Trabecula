"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const PRESETS = {
    default: {
        fontSize: "1em",
        fontWeight: 400,
        overflow: "hidden",
    },
    "detail-label": {
        color: client_1.colors.custom.lightBlue,
        fontWeight: 500,
        whiteSpace: "nowrap",
    },
    "label-glow": {
        color: client_1.colors.custom.white,
        fontSize: "0.8em",
        textAlign: "center",
        textShadow: `0 0 10px ${client_1.colors.custom.blue}`,
        overflow: "visible",
    },
    "sub-text": {
        color: client_1.colors.custom.grey,
        fontSize: "0.7em",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    title: {
        color: client_1.colors.custom.white,
        fontSize: "1.1em",
        fontWeight: 500,
        textAlign: "center",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
    },
};
const Text = ({ children, className, color, component = "span", fontSize, fontWeight, overflow, preset = "default", tooltip, tooltipProps, ...props }) => {
    const { css, cx } = useClasses({ color, fontSize, fontWeight, overflow, preset });
    return ((0, jsx_runtime_1.jsx)(components_1.TooltipWrapper, { tooltip, tooltipProps, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { component, ...props, className: cx(css.root, className), children: children }) }));
};
exports.Text = Text;
const useClasses = (0, client_1.makeClasses)((props) => {
    const preset = PRESETS[props.preset];
    return {
        root: {
            ...preset,
            color: props.color ?? preset?.color,
            fontSize: props.fontSize ?? preset?.fontSize,
            fontWeight: props.fontWeight ?? preset?.fontWeight,
            overflow: props.overflow ?? preset?.overflow,
        },
    };
});

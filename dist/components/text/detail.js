"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detail = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const Detail = ({ emptyValueText = "--", label, labelProps = {}, overflowX = "auto", overflowY = "hidden", row = false, tooltip, value, valueProps, withTooltip, ...props }) => {
    const { css, cx } = useClasses({ overflowX, overflowY });
    return ((0, jsx_runtime_1.jsxs)(components_1.View, { column: !row, row: row, spacing: row ? "0.5rem" : null, ...props, children: [typeof label === "string" ? ((0, jsx_runtime_1.jsx)(components_1.Text, { preset: "detail-label", ...labelProps, children: label })) : (label), !value || typeof value === "string" ? ((0, jsx_runtime_1.jsx)(components_1.Text, { tooltip: tooltip ?? (withTooltip ? value : undefined), className: cx(css.value, valueProps?.className), ...valueProps, children: value || emptyValueText })) : (value)] }));
};
exports.Detail = Detail;
const useClasses = (0, client_1.makeClasses)((props) => ({
    value: {
        overflowX: props.overflowX,
        overflowY: props.overflowY,
        whiteSpace: "nowrap",
    },
}));

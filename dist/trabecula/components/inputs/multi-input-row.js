"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiInputRow = exports.MULTI_INPUT_ROW_HEIGHT = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const common_1 = require("trabecula/utils/common");
exports.MULTI_INPUT_ROW_HEIGHT = 35;
const MultiInputRow = ({ bgColor, ...props }) => {
    bgColor = bgColor || client_1.colors.foreground;
    const hasClick = !!props.onClick;
    const { css } = useClasses({ bgColor, hasClick });
    const value = props.valueExtractor?.(props.value) ?? props.value;
    const handleClick = () => props.onClick?.(props.value);
    const handleDelete = () => props.search.onChange(props.search.value.filter((v) => (props.valueExtractor?.(v) ?? v) !== value));
    return ((0, jsx_runtime_1.jsxs)(components_1.View, { row: true, className: css.root, style: props.style, children: [props.leftNode, (0, jsx_runtime_1.jsx)(components_1.View, { onClick: hasClick ? handleClick : null, row: true, flex: 1, overflow: "hidden", padding: { all: "0 0.3rem" }, children: (0, jsx_runtime_1.jsx)(components_1.Text, { tooltip: value, tooltipProps: {
                        enterDelay: common_1.CONSTANTS.TOOLTIP.ENTER_DELAY,
                        enterNextDelay: common_1.CONSTANTS.TOOLTIP.ENTER_NEXT_DELAY,
                        flexShrink: 1,
                    }, className: css.label, children: value }) }), props.rightNode, props.hasDelete && ((0, jsx_runtime_1.jsx)(components_1.Button, { onClick: handleDelete, icon: "Close", color: "transparent", colorOnHover: client_1.colors.custom.red, boxShadow: "none" }))] }));
};
exports.MultiInputRow = MultiInputRow;
const useClasses = (0, client_1.makeClasses)((props) => ({
    label: {
        padding: "0 0.3rem",
        fontSize: "0.8em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    root: {
        alignItems: "center",
        borderBottom: `1px solid ${client_1.colors.custom.black}`,
        height: exports.MULTI_INPUT_ROW_HEIGHT,
        width: "100%",
        backgroundColor: props.bgColor,
        cursor: props.hasClick ? "pointer" : undefined,
    },
}));

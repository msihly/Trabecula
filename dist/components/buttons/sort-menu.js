"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortMenu = void 0;
const react_1 = require("react");
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const buttons_1 = require("trabecula/components/buttons");
const client_1 = require("trabecula/utils/client");
const SortMenu = ({ color = client_1.colors.custom.black, hasHeader, rows, setValue, value, width = "fit-content", ...buttonProps }) => {
    const { css, cx } = useClasses({ hasHeader, width });
    const activeRow = rows.find(({ attribute }) => attribute === value?.key);
    const renderButton = (onOpen) => ((0, jsx_runtime_1.jsxs)(components_1.Button, { onClick: onOpen, color: color, justify: "space-between", padding: { left: "0.5em", right: "0.5em" }, className: cx(css.button, buttonProps?.className), ...buttonProps, children: [(0, jsx_runtime_1.jsxs)(components_1.View, { row: true, children: [(0, jsx_runtime_1.jsx)(components_1.Icon, { name: "Sort", size: "1.15em" }), (0, jsx_runtime_1.jsxs)(components_1.View, { column: true, align: "flex-start", margins: { left: "0.5em", right: "0.5em" }, children: [(0, jsx_runtime_1.jsx)(components_1.Text, { className: css.topText, children: "Sort By" }), (0, jsx_runtime_1.jsx)(components_1.Text, { className: css.label, children: activeRow?.label })] })] }), (0, jsx_runtime_1.jsx)(components_1.Icon, { name: value?.isDesc ? "ArrowDownward" : "ArrowUpward", size: "1.15em" })] }));
    return ((0, jsx_runtime_1.jsx)(buttons_1.MenuButton, { button: renderButton, children: (0, jsx_runtime_1.jsx)(components_1.View, { column: true, children: rows.map((rowProps) => ((0, react_1.createElement)(buttons_1.SortRow, { ...rowProps, setValue, value, key: rowProps.attribute }))) }) }));
};
exports.SortMenu = SortMenu;
const useClasses = (0, client_1.makeClasses)((props) => ({
    button: {
        ...(0, client_1.makeBorderRadiuses)({ all: "0.3rem", ...(props.hasHeader ? { top: 0 } : {}) }),
        height: "inherit",
        width: props.width,
        boxShadow: "none",
    },
    label: {
        fontSize: "0.9em",
        lineHeight: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "left",
        whiteSpace: "nowrap",
    },
    topText: {
        color: client_1.colors.custom.lightGrey,
        fontSize: "0.7em",
        fontWeight: 600,
        lineHeight: 1,
    },
}));

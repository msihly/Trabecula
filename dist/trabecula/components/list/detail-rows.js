"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailRows = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const DetailRows = ({ labelWidth = "8rem", rows }) => {
    const { css } = useClasses({ labelWidth });
    return ((0, jsx_runtime_1.jsx)(components_1.View, { className: css.table, children: rows.map(({ label, value }, i) => ((0, jsx_runtime_1.jsxs)(components_1.View, { className: css.row, children: [typeof label === "string" ? (0, jsx_runtime_1.jsx)(components_1.Text, { className: css.label, children: label }) : label, typeof value === "string" ? ((0, jsx_runtime_1.jsx)(components_1.Text, { noWrap: true, tooltip: value, children: value })) : (value)] }, `${i}-${label}`))) }));
};
exports.DetailRows = DetailRows;
const useClasses = (0, client_1.makeClasses)((props) => ({
    label: {
        flexShrink: 0,
        marginRight: "1rem",
        width: props.labelWidth,
        color: client_1.colors.custom.blue,
        fontWeight: "bold",
        whiteSpace: "nowrap",
    },
    row: {
        display: "flex",
        flexFlow: "row nowrap",
    },
    table: {
        display: "flex",
        flexFlow: "column nowrap",
        padding: "0.5rem",
    },
}));

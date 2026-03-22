"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const SortRow = ({ attribute, label, icon, iconProps = {}, setValue, value, }) => {
    const { css } = useClasses(null);
    return ((0, jsx_runtime_1.jsxs)(components_1.View, { className: css.row, children: [(0, jsx_runtime_1.jsx)(components_1.Icon, { name: icon, ...iconProps }), (0, jsx_runtime_1.jsx)(components_1.Text, { className: css.label, children: label }), (0, jsx_runtime_1.jsx)(SortButton, { attribute, setValue, value, isDesc: true }), (0, jsx_runtime_1.jsx)(SortButton, { attribute, setValue, value })] }));
};
exports.SortRow = SortRow;
const SortButton = ({ attribute, isDesc = false, setValue, value }) => {
    const isActive = attribute === value?.key && isDesc === value?.isDesc;
    const color = isActive ? client_1.colors.custom.blue : client_1.colors.custom.lightGrey;
    const updateSort = () => setValue({ key: attribute, isDesc });
    return ((0, jsx_runtime_1.jsx)(components_1.IconButton, { name: isDesc ? "ArrowDownward" : "ArrowUpward", onClick: updateSort, iconProps: { color }, margins: { left: "0.5rem" }, size: "small" }));
};
const useClasses = (0, client_1.makeClasses)({
    label: {
        flex: 1,
        whiteSpace: "nowrap",
        padding: "0 0.5rem",
    },
    row: {
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        padding: "0.5rem 0.8rem",
    },
});

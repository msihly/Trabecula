"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiInputList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_virtualized_auto_sizer_1 = __importDefault(require("react-virtualized-auto-sizer"));
const react_window_1 = require("react-window");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const multi_input_row_1 = require("./multi-input-row");
exports.MultiInputList = (0, react_1.forwardRef)(({ hasDeleteAll = false, hasInput, renderRow, search, viewProps = {}, ...props }, ref) => {
    const { css } = useClasses({ hasDeleteAll, hasInput });
    const handleDeleteAll = () => search.onChange([]);
    return ((0, jsx_runtime_1.jsxs)(components_1.View, { column: true, height: "100%", children: [(0, jsx_runtime_1.jsx)(components_1.View, { ...viewProps, column: true, height: "100%", borderRadiuses: {
                    all: "0.3rem",
                    top: hasInput ? 0 : undefined,
                    bottom: hasDeleteAll ? 0 : undefined,
                }, className: css.listContainer, children: !search.value.length ? ((0, jsx_runtime_1.jsx)(components_1.CenteredText, { text: "No items", color: client_1.colors.custom.grey })) : ((0, jsx_runtime_1.jsx)(components_1.View, { flex: 1, children: (0, jsx_runtime_1.jsx)(react_virtualized_auto_sizer_1.default, { disableWidth: true, children: ({ height }) => ((0, jsx_runtime_1.jsx)(react_window_1.FixedSizeList, { ref: ref, height: height, width: "100%", layout: "vertical", itemSize: multi_input_row_1.MULTI_INPUT_ROW_HEIGHT, itemCount: search.value.length, children: ({ index, style }) => renderRow ? (renderRow(index, style)) : ((0, jsx_runtime_1.jsx)(multi_input_row_1.MultiInputRow, { value: search.value[index], search, style, ...props }, index)) })) }) })) }), hasDeleteAll && ((0, jsx_runtime_1.jsx)(components_1.Button, { text: "Delete All", icon: "Close", onClick: handleDeleteAll, colorOnHover: client_1.colors.custom.red, textColor: client_1.colors.custom.lightGrey, outlined: true, width: "100%", borderRadiuses: { top: 0 } }))] }));
});
const useClasses = (0, client_1.makeClasses)((props) => ({
    listContainer: {
        border: `1px dotted ${client_1.colors.custom.grey}`,
        borderTop: props.hasInput ? "none" : undefined,
        borderBottom: props.hasDeleteAll ? "none" : undefined,
        minHeight: "2.5rem",
        backgroundColor: "rgb(0 0 0 / 0.2)",
        overflowY: "auto",
    },
}));

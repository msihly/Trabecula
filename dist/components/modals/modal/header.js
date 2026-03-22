"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
const material_1 = require("@mui/material");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const Header = ({ children, className, justify = "center", leftNode, rightNode, }) => {
    const { css, cx } = useClasses({ justify });
    return ((0, jsx_runtime_1.jsx)(material_1.DialogTitle, { className: cx(css.root, className), children: (0, jsx_runtime_1.jsx)(components_1.ConditionalWrap, { condition: leftNode !== undefined || rightNode !== undefined, wrap: (wrappedChildren) => ((0, jsx_runtime_1.jsxs)(components_1.UniformList, { row: true, flex: 1, align: "center", children: [leftNode ? ((0, jsx_runtime_1.jsx)(components_1.View, { row: true, align: "center", justify: "flex-start", children: leftNode })) : ((0, jsx_runtime_1.jsx)(components_1.View, {})), wrappedChildren, rightNode ? ((0, jsx_runtime_1.jsx)(components_1.View, { row: true, align: "center", justify: "flex-end", children: rightNode })) : ((0, jsx_runtime_1.jsx)(components_1.View, {}))] })), children: children }) }));
};
exports.Header = Header;
const useClasses = (0, client_1.makeClasses)((props) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: props.justify,
        alignItems: "center",
        padding: "0.5rem 1rem",
        textAlign: "center",
    },
}));

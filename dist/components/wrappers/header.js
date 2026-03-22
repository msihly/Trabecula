"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const common_1 = require("trabecula/utils/common");
const DEFAULT_HEADER_PROPS = {
    bgColor: client_1.colors.custom.black,
    borderRadiuses: { top: "0.5rem" },
    fontSize: "0.8em",
    justify: "center",
    padding: { all: "0.15rem 0.3rem" },
    row: true,
};
const HeaderWrapper = ({ children, display, header, height = "auto", headerProps = {}, position = "relative", row, spacing, ...viewProps }) => {
    headerProps = (0, common_1.deepMerge)(DEFAULT_HEADER_PROPS, headerProps);
    const wrap = (c) => ((0, jsx_runtime_1.jsxs)(components_1.View, { ...viewProps, column: true, height: height, "aria-label": "header-wrapper", children: [(0, jsx_runtime_1.jsx)(components_1.View, { ...headerProps, "aria-label": "header", children: typeof header === "string" ? ((0, jsx_runtime_1.jsx)(components_1.Text, { flex: 1, fontSize: headerProps.fontSize, textAlign: "center", children: header })) : (header) }), c] }));
    return ((0, jsx_runtime_1.jsx)(components_1.ConditionalWrap, { condition: !!header, wrap: wrap, children: (0, jsx_runtime_1.jsx)(components_1.View, { overflow: "auto", ...viewProps, display, height, position, row, spacing, "aria-label": "header-wrapper-content", children: children }) }));
};
exports.HeaderWrapper = HeaderWrapper;

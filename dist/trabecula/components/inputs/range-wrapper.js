"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const RangeWrapper = (props) => {
    return ((0, jsx_runtime_1.jsxs)(components_1.HeaderWrapper, { row: true, header: props.header, headerProps: props.headerProps, children: [props.startInput, (0, jsx_runtime_1.jsx)(components_1.View, { column: true, justify: "center", bgColor: "rgb(0 0 0 / 0.2)", padding: { all: "0 0.4rem" }, borders: {
                    top: `1px dotted ${client_1.colors.custom.grey}`,
                    bottom: `1px dotted ${client_1.colors.custom.grey}`,
                }, children: (0, jsx_runtime_1.jsx)(components_1.Text, { flexShrink: 0, fontSize: "0.8em", fontWeight: 600, children: "—" }) }), props.endInput] }));
};
exports.RangeWrapper = RangeWrapper;

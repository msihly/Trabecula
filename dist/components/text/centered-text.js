"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenteredText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const CenteredText = ({ color = client_1.colors.custom.lightGrey, text, viewProps = {}, ...props }) => ((0, jsx_runtime_1.jsx)(components_1.View, { row: true, justify: "center", align: "center", flex: 1, ...viewProps, children: (0, jsx_runtime_1.jsx)(components_1.Text, { ...props, color, children: text }) }));
exports.CenteredText = CenteredText;

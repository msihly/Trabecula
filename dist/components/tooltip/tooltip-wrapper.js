"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const TooltipWrapper = ({ children, tooltip, tooltipProps = {} }) => {
    const wrap = (c) => ((0, jsx_runtime_1.jsx)(components_1.Tooltip, { title: tooltip, ...tooltipProps, children: c }));
    return ((0, jsx_runtime_1.jsx)(components_1.ConditionalWrap, { wrap: wrap, condition: tooltip !== undefined && !(typeof tooltip === "string" && !tooltip?.length), children: children }));
};
exports.TooltipWrapper = TooltipWrapper;

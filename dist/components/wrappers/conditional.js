"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalWrap = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ConditionalWrap = ({ condition, wrap, children, }) => (condition ? wrap(children) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));
exports.ConditionalWrap = ConditionalWrap;

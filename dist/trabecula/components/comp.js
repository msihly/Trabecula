"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comp = void 0;
const react_1 = require("react");
const mobx_react_lite_1 = require("mobx-react-lite");
function Comp(component) {
    const Wrapped = (0, react_1.forwardRef)(component);
    return (0, mobx_react_lite_1.observer)(Wrapped);
}
exports.Comp = Comp;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("trabecula/components");
const multi_input_list_1 = require("./multi-input-list");
exports.MultiInput = (0, components_1.Comp)(({ hasDelete = true, hasDeleteAll = false, hasHelper = false, hasList = true, header, headerProps = {}, inputProps, max, onChange, single, value = [], }, inputRef) => {
    const isMax = max > -1 && value.length >= max;
    const disabled = inputProps?.disabled || isMax;
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const onKeyDown = (e) => {
        if (e.key === "Enter" && !isMax) {
            e.preventDefault();
            if (!value.includes(inputValue))
                onChange([...value, inputValue]);
            setInputValue("");
        }
    };
    const renderList = () => ((0, jsx_runtime_1.jsx)(multi_input_list_1.MultiInputList, { hasDelete, hasDeleteAll, search: { onChange, value }, hasInput: true }));
    return ((0, jsx_runtime_1.jsx)(components_1.View, { column: true, height: "100%", width: "100%", children: single && value.length > 0 ? ((0, jsx_runtime_1.jsx)(components_1.HeaderWrapper, { header, headerProps, children: renderList() })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.Input, { disabled, hasHelper, header, headerProps, ...inputProps, onKeyDown: onKeyDown, ref: inputRef, value: inputValue, setValue: setInputValue, borderRadiuses: { bottom: !single && hasList ? 0 : undefined } }), !single && hasList && renderList()] })) }));
});

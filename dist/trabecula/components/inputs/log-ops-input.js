"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOpsInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const common_1 = require("trabecula/utils/common");
const LOG_OPS_OPTS = [
    { label: "Any", value: "" },
    ...common_1.LOGICAL_OPS.map((op) => ({ label: op, value: op })),
];
const LogOpsInput = ({ dropdownProps = {}, header, headerProps, logOpValue, numInputProps, numValue, numValueDisplay, setLogOpValue, setNumValue, setNumValueDisplay, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(components_1.HeaderWrapper, { row: true, overflow: "hidden", header, headerProps, ...props, children: [(0, jsx_runtime_1.jsx)(components_1.Dropdown, { value: logOpValue, setValue: setLogOpValue, options: LOG_OPS_OPTS, minWidth: "3.7em", borderRadiuses: { top: 0, right: 0 }, textAlign: "center", ...dropdownProps }), (0, jsx_runtime_1.jsx)(components_1.NumInput, { value: numValue, valueDisplay: numValueDisplay, setValue: setNumValue, setValueDisplay: setNumValueDisplay, disabled: logOpValue === "", width: "100%", textAlign: "center", hasHelper: false, borderRadiuses: { top: 0, left: 0 }, ...numInputProps })] }));
};
exports.LogOpsInput = LogOpsInput;

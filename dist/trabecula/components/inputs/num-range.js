"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumRange = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const NumRange = ({ hasHelper = false, header, headerProps, max, min, numInputProps = {}, setMax, setMin, }) => {
    return ((0, jsx_runtime_1.jsx)(components_1.RangeWrapper, { header: header, headerProps: headerProps, startInput: (0, jsx_runtime_1.jsx)(components_1.NumInput, { ...numInputProps, hasHelper, value: min, setValue: setMin, placeholder: "Min", textAlign: "center", borderRadiuses: { top: 0, right: 0 } }), endInput: (0, jsx_runtime_1.jsx)(components_1.NumInput, { ...numInputProps, hasHelper, value: max, setValue: setMax, placeholder: "Max", textAlign: "center", borderRadiuses: { top: 0, left: 0 } }) }));
};
exports.NumRange = NumRange;

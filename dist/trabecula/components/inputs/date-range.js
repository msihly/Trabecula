"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRange = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("trabecula/components");
const DateRange = ({ dateInputProps = {}, endDate, header, headerProps, setEndDate, setStartDate, startDate, }) => {
    return ((0, jsx_runtime_1.jsx)(components_1.RangeWrapper, { header: header, headerProps: headerProps, startInput: (0, jsx_runtime_1.jsx)(components_1.DateInput, { ...dateInputProps, value: startDate, setValue: setStartDate, inputProps: { borderRadiuses: { top: 0, right: 0 } } }), endInput: (0, jsx_runtime_1.jsx)(components_1.DateInput, { ...dateInputProps, value: endDate, setValue: setEndDate, inputProps: { borderRadiuses: { top: 0, left: 0 } } }) }));
};
exports.DateRange = DateRange;

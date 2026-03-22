"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AdapterDayjs_1 = require("@mui/x-date-pickers/AdapterDayjs");
const DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
const LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
const common_1 = require("trabecula/utils/common");
const DateInput = ({ header, headerProps = {}, inputProps = {}, setValue, value, width, ...datePickerProps }) => {
    const { css } = useClasses({ width });
    const [dateValue, setDateValue] = (0, react_1.useState)(value?.length ? (0, common_1.dayjs)(value) : null);
    (0, react_1.useEffect)(() => {
        setDateValue(value?.length ? (0, common_1.dayjs)(value) : null);
    }, [value]);
    const handleChange = (val) => setValue?.(val?.format("YYYY-MM-DD"));
    return ((0, jsx_runtime_1.jsx)(components_1.HeaderWrapper, { header: header, headerProps: headerProps, children: (0, jsx_runtime_1.jsx)(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.AdapterDayjs, children: (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { ...datePickerProps, value: dateValue, onChange: handleChange, slots: {
                    textField: (props) => ((0, jsx_runtime_1.jsx)(components_1.Input, { ...props, ...inputProps, value: props?.value })),
                }, slotProps: { actionBar: { actions: ["cancel", "clear", "today"] } }, className: css.datePicker }) }) }));
};
exports.DateInput = DateInput;
const useClasses = (0, client_1.makeClasses)((props) => ({
    datePicker: {
        width: props.width,
        "& .MuiInputBase-input": {
            padding: "0.5rem 0 0.5rem 0.5rem",
        },
        "& .MuiIconButton-root": {
            padding: "0.2rem",
        },
        "& input": {
            fontSize: "0.9em",
        },
    },
}));

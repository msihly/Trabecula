"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("trabecula/components");
const client_1 = require("trabecula/utils/client");
exports.NumInput = (0, components_1.Comp)(({ hasHelper, maxValue, minValue, setValue, setValueDisplay, value, valueDisplay, ...props }, ref) => {
    const [error, setError] = (0, react_1.useState)(null);
    const handleChange = (val) => {
        if (!val) {
            setValue?.(null);
            setValueDisplay?.(null);
            setError(null);
        }
        else if (setValueDisplay) {
            setValueDisplay(val);
        }
        else if (isNaN(+val)) {
            client_1.toast.error("Must be a number");
        }
        else {
            setValue?.(+val);
            if (maxValue && +val > maxValue)
                hasHelper ? setError(`Max: ${maxValue}`) : client_1.toast.error(`Max: ${maxValue}`);
            else if (minValue && +val < minValue)
                hasHelper ? setError(`Min: ${minValue}`) : client_1.toast.error(`Min: ${minValue}`);
            else
                setError(null);
        }
    };
    return ((0, jsx_runtime_1.jsx)(components_1.Input, { ref: ref, value: valueDisplay ?? (value !== null && !isNaN(+value) ? String(value) : ""), setValue: handleChange, error: hasHelper && !!error, helperText: hasHelper ? error : null, hasHelper: hasHelper, ...props }));
});

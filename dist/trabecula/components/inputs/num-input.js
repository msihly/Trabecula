import { useState } from "react";
import { Comp, Input } from "trabecula/components";
import { toast } from "trabecula/utils/client";
export const NumInput = Comp(({ hasHelper, maxValue, minValue, setValue, setValueDisplay, value, valueDisplay, ...props }, ref) => {
    const [error, setError] = useState(null);
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
            toast.error("Must be a number");
        }
        else {
            setValue?.(+val);
            if (maxValue && +val > maxValue)
                hasHelper ? setError(`Max: ${maxValue}`) : toast.error(`Max: ${maxValue}`);
            else if (minValue && +val < minValue)
                hasHelper ? setError(`Min: ${minValue}`) : toast.error(`Min: ${minValue}`);
            else
                setError(null);
        }
    };
    return (<Input ref={ref} value={valueDisplay ?? (value !== null && !isNaN(+value) ? String(value) : "")} setValue={handleChange} error={hasHelper && !!error} helperText={hasHelper ? error : null} hasHelper={hasHelper} {...props}/>);
});

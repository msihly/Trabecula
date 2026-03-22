import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { HeaderWrapper, Input } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";
import { dayjs } from "trabecula/utils/common";
export const DateInput = ({ header, headerProps = {}, inputProps = {}, setValue, value, width, ...datePickerProps }) => {
    const { css } = useClasses({ width });
    const [dateValue, setDateValue] = useState(value?.length ? dayjs(value) : null);
    useEffect(() => {
        setDateValue(value?.length ? dayjs(value) : null);
    }, [value]);
    const handleChange = (val) => setValue?.(val?.format("YYYY-MM-DD"));
    return (<HeaderWrapper header={header} headerProps={headerProps}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker {...datePickerProps} value={dateValue} onChange={handleChange} slots={{
            textField: (props) => (<Input {...props} {...inputProps} value={props?.value}/>),
        }} slotProps={{ actionBar: { actions: ["cancel", "clear", "today"] } }} className={css.datePicker}/>
      </LocalizationProvider>
    </HeaderWrapper>);
};
const useClasses = makeClasses((props) => ({
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

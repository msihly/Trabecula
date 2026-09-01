import { ReactNode, useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TextFieldProps } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Comp, Input, InputProps, View, ViewProps } from "trabecula/components";
import { CSS, makeClasses } from "trabecula/utils/client";
import { dayjs } from "trabecula/utils/common";

export interface DateInputProps extends Omit<
  DatePickerProps<dayjs.Dayjs>,
  "label" | "onChange" | "value"
> {
  header?: ReactNode;
  headerProps?: Partial<ViewProps>;
  inputProps?: Omit<Partial<InputProps>, "header" | "headerProps">;
  setValue?: (val: string) => void;
  value: string;
  viewProps?: Partial<ViewProps>;
  width?: CSS["width"];
}

export const DateInput = Comp(
  ({
    header,
    headerProps = {},
    inputProps = {},
    setValue,
    slotProps = {},
    value,
    viewProps = {},
    width,
    ...datePickerProps
  }: DateInputProps) => {
    const { css } = useClasses(null);

    const [dateValue, setDateValue] = useState<dayjs.Dayjs>(value?.length ? dayjs(value) : null);

    useEffect(() => {
      if (value?.length) setDateValue(dayjs(value));
      else setDateValue(null);
    }, [value]);

    const handleChange = (val: dayjs.Dayjs) => {
      setDateValue(val);
      setValue?.(val.format("YYYY-MM-DD"));
    };

    const textFieldProps: Omit<InputProps, "color" | "value"> = {
      ...inputProps,
      ...slotProps?.textField,
      header,
      headerProps,
      width,
    };

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <View {...viewProps} width={width}>
          <DatePicker
            {...datePickerProps}
            value={dateValue}
            onChange={handleChange}
            slots={{ textField: DateTextField }}
            slotProps={{
              ...slotProps,
              actionBar: { actions: ["cancel", "clear", "today"], ...slotProps?.actionBar },
              inputAdornment: { ...slotProps?.inputAdornment, tabIndex: -1 },
              openPickerButton: { ...slotProps?.openPickerButton, tabIndex: -1 },
              textField: textFieldProps as unknown as TextFieldProps,
            }}
            className={css.datePicker}
          />
        </View>
      </LocalizationProvider>
    );
  },
);

const DateTextField = (props: TextFieldProps) => <Input {...(props as unknown as InputProps)} />;

const useClasses = makeClasses({
  datePicker: {
    width: "100%",
    "& .MuiInputBase-input": {
      paddingLeft: "0.5rem",
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem",
    },
  },
});

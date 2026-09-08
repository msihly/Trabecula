import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TextFieldProps } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker, TimePickerProps } from "@mui/x-date-pickers/TimePicker";
import { Input, InputProps, View, ViewProps } from "trabecula/components";
import { CSS, makeClasses } from "trabecula/utils/client";
import { dayjs } from "trabecula/utils/common";

export interface TimeInputProps extends Omit<
  TimePickerProps<dayjs.Dayjs>,
  "label" | "onChange" | "value"
> {
  inputProps?: Omit<Partial<InputProps>, "label" | "labelProps">;
  label?: InputProps["label"];
  labelProps?: InputProps["labelProps"];
  setValue?: (val: string) => void;
  value: string;
  viewProps?: Partial<ViewProps>;
  width?: CSS["width"];
}

export const TimeInput = (rawProps: TimeInputProps) => {
  const {
    inputProps = {},
    label,
    labelProps = {},
    setValue,
    slotProps = {},
    value,
    viewProps = {},
    width,
    ...timePickerProps
  } = rawProps;

  const { css } = useClasses(null);

  const [timeValue, setTimeValue] = useState<dayjs.Dayjs | null>(
    value?.length ? dayjs(value, TIME_FORMAT) : null,
  );

  useEffect(() => {
    if (value?.length) setTimeValue(dayjs(value, TIME_FORMAT));
    else setTimeValue(null);
  }, [value]);

  const handleChange = (val: dayjs.Dayjs | null) => {
    setTimeValue(val);
    setValue?.(val ? val.format(TIME_FORMAT) : "");
  };

  const textFieldProps: Omit<InputProps, "color" | "value"> = {
    ...inputProps,
    ...slotProps?.textField,
    label,
    labelProps,
    width,
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <View {...viewProps} width={width}>
        <TimePicker
          {...timePickerProps}
          value={timeValue}
          onChange={handleChange}
          slots={{ textField: TimeTextField }}
          slotProps={{
            ...slotProps,
            textField: textFieldProps as unknown as TextFieldProps,
          }}
          className={css.timePicker}
        />
      </View>
    </LocalizationProvider>
  );
};

const TimeTextField = (props: TextFieldProps) => <Input {...(props as unknown as InputProps)} />;

const TIME_FORMAT = "HH:mm:ss";

/* ----------------------------------- CSS ---------------------------------- */
const useClasses = makeClasses({
  timePicker: {
    width: "100%",
    "& .MuiInputBase-input": {
      paddingLeft: "0.5rem",
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem",
    },
  },
});

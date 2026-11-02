import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker, TimePickerProps } from "@mui/x-date-pickers/TimePicker";
import { PickerField, PickerFieldProps, View, ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
import { dayjs } from "trabecula/utils/common";

export interface TimeInputProps extends Omit<TimePickerProps, "label" | "onChange" | "value"> {
  inputProps?: Omit<Partial<PickerFieldProps>, "header" | "headerProps">;
  label?: PickerFieldProps["header"];
  labelProps?: PickerFieldProps["headerProps"];
  setValue?: (val: string) => void;
  value: string;
  viewProps?: Partial<ViewProps>;
  width?: CSS["width"];
}

export const TimeInput = ({
  inputProps = {},
  label,
  labelProps = {},
  setValue,
  slotProps = {},
  value,
  viewProps = {},
  width,
  ...timePickerProps
}: TimeInputProps) => {
  const [timeValue, setTimeValue] = useState<dayjs.Dayjs | null>(
    value?.length ? dayjs(value, TIME_FORMAT) : null,
  );

  useEffect(() => {
    if (value?.length) setTimeValue(dayjs(value, TIME_FORMAT));
    else setTimeValue(null);
  }, [value]);

  const handleChange = (val: dayjs.Dayjs | null) => {
    setTimeValue(val);

    if (val === null) setValue?.("");
    else if (val.isValid()) setValue?.(val.format(TIME_FORMAT));
  };

  const textFieldProps: Partial<PickerFieldProps> = {
    ...inputProps,
    ...(slotProps?.textField as Partial<PickerFieldProps>),
    header: label,
    headerProps: labelProps,
    width,
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <View {...viewProps} width={width}>
        <TimePicker
          {...timePickerProps}
          value={timeValue}
          onChange={handleChange}
          slots={{ textField: PickerField }}
          slotProps={{
            ...slotProps,
            textField: textFieldProps,
          }}
        />
      </View>
    </LocalizationProvider>
  );
};

const TIME_FORMAT = "HH:mm:ss";

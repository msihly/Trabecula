import { Comp, Input, InputProps } from "trabecula/components";
import { colors } from "trabecula/utils/client";

export interface NumInputProps extends Omit<InputProps, "setValue" | "value"> {
  maxValue?: number;
  minValue?: number;
  setValue?: (value: number) => void;
  setValueDisplay?: (value: string) => void;
  value?: number;
  valueDisplay?: string;
}

/** Shows a value past its limits as error text below the input, which never shifts the layout. */
export const NumInput = Comp(
  (
    {
      color,
      maxValue,
      minValue,
      setValue,
      setValueDisplay,
      value,
      valueDisplay,
      ...props
    }: NumInputProps,
    ref,
  ) => {
    // Inputs that format their own text, such as durations, don't show raw limits.
    const error =
      setValueDisplay || value == null
        ? null
        : maxValue != null && value > maxValue
          ? `Max: ${maxValue}`
          : minValue != null && value < minValue
            ? `Min: ${minValue}`
            : null;

    /** Anything that isn't a number is ignored, leaving the value as it was. */
    const handleChange = (val: string) => {
      if (!val) {
        setValue?.(null);
        setValueDisplay?.(null);
      } else if (setValueDisplay) {
        setValueDisplay(val);
      } else if (!isNaN(+val)) {
        setValue?.(+val);
      }
    };

    return (
      <Input
        ref={ref}
        value={valueDisplay ?? (value !== null && !isNaN(+value) ? String(value) : "")}
        setValue={handleChange}
        color={error ? colors.custom.red : color}
        helperText={error}
        floatingHelper
        {...props}
      />
    );
  },
);

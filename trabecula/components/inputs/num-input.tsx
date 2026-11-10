import { useState } from "react";
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

/** Shows invalid entries as error text below the input, which never shifts the layout. */
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
    const [error, setError] = useState<string | null>(null);

    const handleChange = (val: string) => {
      if (!val) {
        setValue?.(null);
        setValueDisplay?.(null);
        setError(null);
      } else if (setValueDisplay) {
        setValueDisplay(val);
      } else if (isNaN(+val)) {
        setError("Must be a number");
      } else {
        setValue?.(+val);

        if (maxValue != null && +val > maxValue) setError(`Max: ${maxValue}`);
        else if (minValue != null && +val < minValue) setError(`Min: ${minValue}`);
        else setError(null);
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

import { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import Color from "color";
import {
  colors,
  CSS,
  CssColor,
  makeClasses,
  makeMargins,
  makePadding,
  Margins,
  Padding,
} from "trabecula/utils/client";

export interface CheckboxProps {
  center?: boolean;
  checked: boolean;
  className?: string;
  color?: CssColor;
  disabled?: boolean;
  flex?: CSS["flex"];
  indeterminate?: boolean;
  indeterminateColor?: CssColor;
  label?: ReactNode;
  margins?: Margins;
  padding?: Padding;
  setChecked: (checked: boolean) => void;
  width?: CSS["width"];
}

export const Checkbox = ({
  center,
  checked,
  className,
  color = colors.custom.blue,
  disabled,
  flex = 1,
  indeterminate,
  indeterminateColor,
  label,
  margins = { left: 0, right: 0 },
  padding = { all: "0.3rem" },
  setChecked,
  width = "100%",
}: CheckboxProps) => {
  const { css, cx } = useClasses({
    center,
    color: indeterminate ? indeterminateColor || color : color,
    disabled,
    flex,
    margins,
    padding,
    width,
  });

  const toggleChecked = () => !disabled && setChecked(!checked);

  return (
    <FormControlLabel
      {...{ disabled, label }}
      control={
        <MuiCheckbox
          {...{ checked, disabled, indeterminate }}
          onClick={toggleChecked}
          className={css.checkbox}
        />
      }
      className={cx(css.label, className)}
    />
  );
};

interface ClassesProps extends Pick<
  CheckboxProps,
  "center" | "color" | "disabled" | "flex" | "margins" | "padding" | "width"
> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  checkbox: {
    ...makePadding(props.padding),
    color: `${props.color} !important`,
    opacity: props.disabled ? 0.5 : 1,
  },
  label: {
    display: "flex",
    flex: props.flex,
    justifyContent: props.center ? "center" : undefined,
    borderRadius: "0.5rem",
    ...makeMargins(props.margins),
    width: props.width || "auto",
    whiteSpace: "nowrap",
    transition: "all 200ms ease-in-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: Color(props.color).fade(0.8).string(),
    },
    "& .MuiFormControlLabel-label": {
      paddingRight: "0.4em",
    },
  },
}));

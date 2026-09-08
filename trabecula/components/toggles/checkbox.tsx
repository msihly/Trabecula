import { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import Color from "color";
import { Text, TextProps } from "trabecula/components";
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

type CheckboxState = "false" | "null" | "true";

export interface CheckboxProps {
  center?: boolean;
  checked: boolean;
  checkedIcon?: ReactNode;
  className?: string;
  color?: CssColor;
  disabled?: boolean;
  flex?: CSS["flex"];
  indeterminate?: boolean;
  indeterminateColor?: CssColor;
  icon?: ReactNode;
  label?: ReactNode;
  labelProps?: Omit<Partial<TextProps>, "children">;
  margins?: Margins;
  noHover?: boolean;
  padding?: Padding;
  setChecked: (checked: boolean, ternary?: boolean) => void;
  stateIcons?: Partial<Record<CheckboxState, ReactNode>>;
  ternary?: boolean;
  ternaryColor?: CssColor;
  ternaryIcon?: ReactNode;
  whiteSpace?: CSS["whiteSpace"];
  width?: CSS["width"];
}

export const Checkbox = ({
  center,
  checked,
  checkedIcon,
  className,
  color = colors.custom.blue,
  disabled,
  flex = 1,
  indeterminate,
  indeterminateColor,
  icon,
  label,
  labelProps,
  margins = { all: 0 },
  noHover = false,
  padding = { all: "0.3rem" },
  setChecked,
  stateIcons,
  ternary,
  ternaryColor,
  ternaryIcon,
  whiteSpace = "nowrap",
  width = "100%",
}: CheckboxProps) => {
  const { css, cx } = useClasses({
    center,
    color: (ternary ?? indeterminate) ? ternaryColor || indeterminateColor || color : color,
    disabled,
    flex,
    margins,
    noHover,
    padding,
    whiteSpace,
    width,
  });

  const toggleChecked = () => {
    if (disabled) return;
    if (ternary === undefined) return setChecked(!checked);
    if (ternary) setChecked(true, false);
    else if (checked) setChecked(false, false);
    else setChecked(false, true);
  };

  const labelNode =
    typeof label === "string" && labelProps ? <Text {...labelProps}>{label}</Text> : label;

  return (
    <FormControlLabel
      disabled={disabled}
      label={labelNode}
      control={
        <MuiCheckbox
          checked={checked}
          checkedIcon={stateIcons?.true ?? checkedIcon}
          disabled={disabled}
          icon={stateIcons?.false ?? icon}
          indeterminate={ternary ?? indeterminate}
          indeterminateIcon={stateIcons?.null ?? ternaryIcon}
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
  | "center"
  | "color"
  | "disabled"
  | "flex"
  | "margins"
  | "noHover"
  | "padding"
  | "whiteSpace"
  | "width"
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
    whiteSpace: props.whiteSpace,
    transition: "all 200ms ease-in-out",
    userSelect: "none",
    "&:hover": props.noHover ? {} : { backgroundColor: Color(props.color).fade(0.8).string() },
    "& .MuiFormControlLabel-label": {
      paddingRight: "0.4rem",
      fontFamily: "Roboto",
    },
  },
}));

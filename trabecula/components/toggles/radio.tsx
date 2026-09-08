import { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { FormControlLabel, Radio as MuiRadio } from "@mui/material";
import Color from "color";
import { Text } from "trabecula/components";
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

export interface RadioProps {
  boldWhenChecked?: boolean;
  center?: boolean;
  checked: boolean;
  checkedIcon?: ReactNode;
  className?: string;
  color?: CssColor;
  disabled?: boolean;
  flex?: CSS["flex"];
  fontFamily?: CSS["fontFamily"];
  icon?: ReactNode;
  label?: ReactNode;
  margins?: Margins;
  name?: string;
  noHover?: boolean;
  padding?: Padding;
  setChecked: (checked: boolean) => void;
  value?: string | number | boolean;
  whiteSpace?: CSS["whiteSpace"];
  width?: CSS["width"];
}

export const Radio = (rawProps: RadioProps) => {
  const {
    boldWhenChecked = false,
    center,
    checked,
    checkedIcon,
    className,
    color = colors.custom.blue,
    disabled,
    flex = 1,
    fontFamily,
    icon,
    label,
    margins = { all: 0 },
    name,
    noHover = false,
    padding = { all: "0.3rem" },
    setChecked,
    value,
    whiteSpace = "nowrap",
    width = "100%",
  } = rawProps;

  const { css, cx } = useClasses({
    center,
    color,
    disabled,
    flex,
    margins,
    noHover,
    padding,
    whiteSpace,
    width,
  });

  const selectRadio = () => {
    if (!disabled) setChecked(true);
  };

  const renderedLabel =
    typeof label === "string" ? (
      <Text bold={boldWhenChecked && checked} fontFamily={fontFamily}>
        {label}
      </Text>
    ) : (
      label
    );

  return (
    <FormControlLabel
      label={renderedLabel}
      disabled={disabled}
      className={cx(css.label, className)}
      control={
        <MuiRadio
          checked={checked}
          checkedIcon={checkedIcon}
          disabled={disabled}
          icon={icon}
          name={name}
          onClick={selectRadio}
          value={value}
          className={css.radio}
        />
      }
    />
  );
};

/* -------------------------------------------------------------------------- */
interface ClassesProps extends Pick<
  RadioProps,
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
  label: {
    display: "flex",
    flex: props.flex,
    justifyContent: props.center ? "center" : undefined,
    alignItems: "center",
    borderRadius: "0.5rem",
    border: `1px solid transparent`,
    ...makeMargins(props.margins),
    width: props.width || "auto",
    whiteSpace: props.whiteSpace,
    transition: "all 200ms ease-in-out",
    userSelect: "none",
    "&:hover": props.noHover
      ? {}
      : {
          border: `1px solid ${Color(props.color).fade(0.8).string()}`,
          backgroundColor: Color(props.color).fade(0.9).string(),
        },
  },
  radio: {
    ...makePadding(props.padding),
    color: `${props.color} !important`,
    opacity: props.disabled ? 0.5 : 1,
  },
}));

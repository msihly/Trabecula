import { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Chip as MuiChip, ChipProps as MuiChipProps } from "@mui/material";
import { Icon, IconName, IconProps } from "trabecula/components";
import {
  BorderRadiuses,
  CSS,
  CssColor,
  makeBorderRadiuses,
  makeClasses,
  makePadding,
  Padding,
} from "trabecula/utils/client";

export interface ChipProps extends Omit<MuiChipProps, "color" | "icon"> {
  bgColor?: CssColor;
  className?: string;
  color?: CssColor;
  fontSize?: CSS["fontSize"];
  fontWeight?: CSS["fontWeight"];
  height?: CSS["height"];
  icon?: IconName;
  iconColor?: CssColor;
  iconProps?: Partial<IconProps>;
  label: ReactNode;
  padding?: Padding;
  radiuses?: BorderRadiuses;
  width?: CSS["width"];
}

export const Chip = ({
  bgColor,
  className,
  color,
  fontSize,
  fontWeight,
  height,
  icon,
  iconColor,
  iconProps,
  label,
  padding,
  radiuses,
  width,
  ...props
}: ChipProps) => {
  const { css, cx } = useClasses({
    bgColor,
    color,
    fontSize,
    fontWeight,
    height,
    padding,
    radiuses,
    width,
  });

  return (
    <MuiChip
      {...props}
      label={label}
      icon={
        icon ? (
          <Icon
            name={icon}
            color={iconColor}
            size="inherit"
            margins={{ left: "0.5rem !important" }}
            {...iconProps}
          />
        ) : undefined
      }
      className={cx(css.chip, className)}
    />
  );
};

interface ClassesProps extends Pick<
  ChipProps,
  "bgColor" | "color" | "fontSize" | "fontWeight" | "height" | "padding" | "radiuses" | "width"
> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  chip: {
    ...makeBorderRadiuses(props.radiuses),
    height: props.height,
    width: props.width,
    backgroundColor: props.bgColor,
    color: props.color,
    transition: "all 200ms ease-in-out",
    "& > .MuiChip-label": {
      ...makePadding(props.padding),
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
    },
  },
}));

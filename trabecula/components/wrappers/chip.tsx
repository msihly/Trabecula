import { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Chip as MuiChip, ChipProps as MuiChipProps } from "@mui/material";
import { Comp, Icon, IconName, IconProps, View } from "trabecula/components";
import {
  BorderRadiuses,
  CSS,
  CssColor,
  makeBorderRadiuses,
  makeClasses,
  makePadding,
  Padding,
} from "trabecula/utils/client";

/** How far the diagonal between a fraction's sides leans. */
const FRACTION_SLANT = "0.4em";

export interface ChipProps extends Omit<MuiChipProps, "color" | "icon"> {
  bgColor?: CssColor;
  color?: CssColor;
  /**
   * Splits the chip into a fraction, with the label as the numerator and this as the denominator,
   * on a darker side past a diagonal.
   */
  denominator?: ReactNode;
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

export const Chip = Comp(
  ({
    bgColor,
    className,
    color,
    denominator,
    fontSize,
    fontWeight,
    height,
    icon,
    iconColor,
    iconProps,
    label,
    padding,
    radiuses,
    size = "small",
    width,
    ...props
  }: ChipProps) => {
    const isFraction = denominator != null;

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
        size={size}
        label={
          isFraction ? (
            <>
              <View row align="center" justify="center" className={css.numerator}>
                {label}
              </View>

              <View row align="center" justify="center" className={css.denominator}>
                {denominator}
              </View>
            </>
          ) : (
            label
          )
        }
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
        className={cx(css.chip, isFraction && css.fraction, className)}
      />
    );
  },
);

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
  denominator: {
    height: "100%",
    marginLeft: `-${FRACTION_SLANT}`,
    padding: `0 0.6em 0 calc(0.35em + ${FRACTION_SLANT})`,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    clipPath: `polygon(${FRACTION_SLANT} 0, 100% 0, 100% 100%, 0 100%)`,
  },
  /**
   * The sides fill the chip, which clips the denominator's background to its rounded corners. Equal
   * columns size both sides to the wider one, so a short numerator stays as wide as its denominator.
   */
  fraction: {
    overflow: "hidden",
    "& > .MuiChip-label": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      height: "100%",
      padding: 0,
    },
  },
  numerator: {
    height: "100%",
    padding: `0 calc(0.3em + ${FRACTION_SLANT}) 0 0.6em`,
  },
}));

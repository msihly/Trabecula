import { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Chip as MuiChip, ChipProps as MuiChipProps } from "@mui/material";
import Color from "color";
import { Comp, Icon, IconName, IconProps, View } from "trabecula/components";
import {
  BorderRadiuses,
  colors,
  CSS,
  CssColor,
  getChipColors,
  makeBorderRadiuses,
  makeClasses,
  makePadding,
  Padding,
} from "trabecula/utils/client";

/** How far the diagonal between a fraction's sides leans. */
const FRACTION_SLANT = "0.4em";

/** The dark fill under chips over images, where the tint alone takes on the image's colors. */
const MEDIA_FILL = Color(colors.custom.black).fade(0.25).string();

export interface ChipProps extends Omit<MuiChipProps, "color" | "icon"> {
  /** The tag color, which tints the chip's fill and outlines it. */
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
  /** Lays the tint over a dark fill, keeping the chip readable over images. */
  overMedia?: boolean;
  padding?: Padding;
  radiuses?: BorderRadiuses;
  width?: CSS["width"];
}

export const Chip = Comp(
  ({
    bgColor = colors.custom.grey,
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
    overMedia = false,
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
      overMedia,
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
  | "bgColor"
  | "color"
  | "fontSize"
  | "fontWeight"
  | "height"
  | "overMedia"
  | "padding"
  | "radiuses"
  | "width"
> {}

const useClasses = makeClasses((props: ClassesProps) => {
  const chipColors = getChipColors(props.bgColor);
  const getFill = (tint: CssColor) =>
    props.overMedia ? `linear-gradient(${tint}, ${tint}), ${MEDIA_FILL}` : tint;

  return {
    chip: {
      ...makeBorderRadiuses(props.radiuses),
      height: props.height,
      width: props.width,
      background: getFill(chipColors.background),
      border: chipColors.border,
      color: props.color ?? chipColors.color,
      transition: "all 200ms ease-in-out",
      "&.MuiChip-clickable:hover": {
        background: getFill(getChipColors(props.bgColor, 0.65).background),
      },
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
     * The sides fill the chip, which clips the denominator's background to its rounded corners.
     * Equal columns size both sides to the wider one, so a short numerator stays as wide as its
     * denominator.
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
  };
});

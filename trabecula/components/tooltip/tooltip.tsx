// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from "@mui/material";
import Color from "color";
import { View, ViewProps } from "trabecula/components";
import { colors, CSS, CssColor, makeClasses } from "trabecula/utils/client";
import { CONTROL_RADIUS } from "trabecula/utils/common";

export interface TooltipProps extends Omit<MuiTooltipProps, "children" | "color"> {
  bgColor?: CssColor;
  borderColor?: CssColor;
  children: React.JSX.Element;
  color?: CssColor;
  flexShrink?: CSS["flexShrink"];
  fontSize?: CSS["fontSize"];
  maxWidth?: CSS["maxWidth"];
  minWidth?: CSS["minWidth"];
  padding?: CSS["padding"];
  viewProps?: Partial<ViewProps>;
}

export const Tooltip = ({
  arrow = true,
  bgColor = colors.overlay,
  borderColor = colors.border,
  children,
  color,
  flexShrink = 0,
  fontSize = "0.95em",
  maxWidth = "25rem",
  minWidth,
  padding = "0.4rem 0.8rem",
  placement = "bottom-start",
  title,
  viewProps = {},
  ...props
}: TooltipProps) => {
  const { css } = useClasses({
    bgColor,
    borderColor,
    color,
    flexShrink,
    fontSize,
    maxWidth,
    minWidth,
    padding,
  });

  return (
    <MuiTooltip
      {...props}
      arrow={arrow}
      placement={placement}
      title={title}
      classes={{ arrow: css.arrow, popper: css.popper, tooltip: css.tooltip }}
    >
      <View {...viewProps} className={css.container}>
        {children}
      </View>
    </MuiTooltip>
  );
};

interface ClassesProps extends Pick<
  TooltipProps,
  | "bgColor"
  | "borderColor"
  | "color"
  | "flexShrink"
  | "fontSize"
  | "maxWidth"
  | "minWidth"
  | "padding"
> {}

const useClasses = makeClasses((props: ClassesProps) => {
  const bgColor = Color(props.bgColor).fade(0.03).string();

  return {
    // The arrow continues the tooltip, outlined in its border.
    arrow: {
      color: bgColor,
      "&::before": {
        border: `1px solid ${props.borderColor}`,
        boxSizing: "border-box",
      },
    },
    container: {
      display: "flex",
      flexShrink: props.flexShrink,
      overflow: "hidden",
      textOverflow: "ellipsis",
      userSelect: "auto",
      // The wrapped element fills the space its parent gives the tooltip, as it would unwrapped.
      "& > *": {
        flexGrow: 1,
      },
    },
    tooltip: {
      border: `1px solid ${props.borderColor}`,
      borderRadius: CONTROL_RADIUS,
      maxWidth: props.maxWidth,
      minWidth: props.minWidth,
      padding: props.padding,
      backgroundColor: bgColor,
      color: props.color,
      fontSize: props.fontSize,
      whiteSpace: "pre-wrap",
      width: "max-content",
      boxShadow: "0 0.5rem 1.5rem rgb(0 0 0 / 45%)",
    },
    popper: {
      zIndex: 1000000,
    },
  };
});

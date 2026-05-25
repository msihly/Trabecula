import { MouseEvent, ReactNode } from "react";
import {
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  Button as MuiButton,
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Color from "color";
import {
  Icon,
  IconName,
  IconProps,
  LoadingOverlay,
  Text,
  TooltipProps,
  TooltipWrapper,
  View,
} from "trabecula/components";
import {
  BorderRadiuses,
  colors,
  CSS,
  CssColor,
  makeBorderRadiuses,
  makeClasses,
  makeMargins,
  makePadding,
  Margins,
  Padding,
} from "trabecula/utils/client";

export interface ButtonProps extends Omit<
  MuiButtonProps,
  "children" | "color" | "endIcon" | "fullWidth" | "startIcon" | "type" | "variant"
> {
  borderRadiuses?: BorderRadiuses;
  boxShadow?: CSS["boxShadow"];
  color?: CssColor;
  colorOnHover?: CssColor;
  endNode?: ReactNode;
  fontSize?: CSS["fontSize"];
  fontWeight?: CSS["fontWeight"];
  height?: CSS["height"];
  icon?: IconName;
  iconProps?: Partial<IconProps>;
  iconRight?: IconName;
  iconSize?: string | number;
  justify?: CSS["justifyContent"];
  loading?: boolean;
  margins?: Margins;
  outlined?: boolean;
  outlineFill?: string;
  padding?: Padding;
  startNode?: ReactNode;
  text?: ReactNode;
  textColor?: CssColor;
  textClassName?: string;
  textTransform?: CSS["textTransform"];
  tooltip?: TooltipProps["title"];
  tooltipProps?: Partial<TooltipProps>;
  type?: "button" | "link";
  width?: CSS["width"];
  whiteSpace?: CSS["whiteSpace"];
}

export const Button = ({
  borderRadiuses = { all: "0.3rem" },
  boxShadow,
  className,
  color = colors.custom.grey,
  colorOnHover,
  endNode,
  fontSize = "1.15em",
  fontWeight = 400,
  height,
  href,
  icon,
  iconProps,
  iconRight,
  iconSize = "1.15em",
  justify = "center",
  loading = false,
  margins,
  onClick,
  outlined = false,
  outlineFill = "transparent",
  padding,
  size = "small",
  startNode,
  text,
  textColor,
  textTransform = "none",
  tooltip,
  tooltipProps,
  type = "button",
  width,
  whiteSpace = "nowrap",
  ...props
}: ButtonProps) => {
  const { css, cx } = useClasses({
    borderRadiuses,
    boxShadow,
    color,
    colorOnHover,
    height,
    isLink: type === "link",
    justify,
    margins,
    outlined,
    outlineFill,
    padding: { all: !text ? "0.4em" : "0.4em 0.8em", ...padding },
    textColor,
    textTransform,
    width,
    whiteSpace,
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (href) window.open(href, "_blank");
  };

  return (
    <TooltipWrapper {...{ tooltip, tooltipProps }}>
      <MuiButton
        {...props}
        size={size}
        onClick={handleClick}
        variant="contained"
        className={cx(css.root, className)}
      >
        <LoadingOverlay isLoading={loading} />

        <View row justify={justify} spacing="0.3rem" width="100%">
          {startNode}

          {icon && <Icon name={icon} size={iconSize} color={textColor} {...iconProps} />}

          {typeof text === "string" ? (
            <Text
              {...{ fontSize, fontWeight }}
              color={textColor}
              className={cx(css.text, className)}
            >
              {text}
            </Text>
          ) : (
            text
          )}

          {iconRight && <Icon name={iconRight} size={iconSize} color={textColor} {...iconProps} />}

          {endNode}
        </View>
      </MuiButton>
    </TooltipWrapper>
  );
};

interface ClassesProps extends Pick<
  ButtonProps,
  | "borderRadiuses"
  | "boxShadow"
  | "color"
  | "colorOnHover"
  | "height"
  | "justify"
  | "margins"
  | "outlined"
  | "outlineFill"
  | "padding"
  | "textColor"
  | "textTransform"
  | "width"
  | "whiteSpace"
> {
  isLink: boolean;
}

const useClasses = makeClasses((props: ClassesProps) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: props.justify,
    alignItems: "center",
    border: `1px solid ${props.outlined ? props.color : "transparent"}`,
    ...makeBorderRadiuses(props.borderRadiuses),
    ...makeMargins(props.margins),
    ...makePadding({
      all: props.padding?.all,
      top: props.padding?.top ?? (props.isLink ? 0 : undefined),
      bottom: props.padding?.bottom ?? (props.isLink ? 0 : undefined),
      right: props.padding?.right ?? (props.isLink ? 0 : undefined),
      left: props.padding?.left ?? (props.isLink ? 0 : undefined),
    }),
    minWidth: "fit-content",
    height: props.height,
    width: props.width,
    backgroundColor: props.isLink
      ? "transparent"
      : props.outlined
        ? props.outlineFill
        : props.color,
    boxShadow: props.boxShadow ?? "none",
    color: props.outlined
      ? props.color
      : (props.textColor ??
        (props.isLink
          ? colors.custom.lightBlue
          : props.outlined
            ? props.color
            : colors.custom.white)),
    textTransform: props.textTransform,
    overflow: "hidden",
    "&:hover": {
      background: props.isLink
        ? "transparent"
        : props.colorOnHover ||
          Color(props.outlined ? props.outlineFill : props.color)
            .lighten(0.1)
            .string(),
      boxShadow: props.isLink ? "none" : undefined,
      textDecoration: props.isLink ? "underline" : undefined,
    },
  },
  text: {
    lineHeight: 1.1,
    alignContent: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: "all 100ms ease-in-out",
    textTransform: props.textTransform,
    whiteSpace: props.whiteSpace,
  },
}));

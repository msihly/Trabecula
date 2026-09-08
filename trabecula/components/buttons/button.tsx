import type { MouseEvent, ReactNode } from "react";
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
  TextProps,
  TooltipProps,
  TooltipWrapper,
  View,
} from "trabecula/components";
import {
  BorderRadiuses,
  Borders,
  colors,
  CSS,
  CssColor,
  makeBorderRadiuses,
  makeBorders,
  makeClasses,
  makeMargins,
  Margins,
  Padding,
} from "trabecula/utils/client";
import { DENSE_FORM_ROW_HEIGHT, FORM_ROW_HEIGHT } from "trabecula/utils/common";

export interface ButtonProps extends Omit<
  MuiButtonProps,
  "children" | "color" | "component" | "endIcon" | "fullWidth" | "startIcon" | "type" | "variant"
> {
  borderColorOnHover?: CssColor;
  borderRadiuses?: BorderRadiuses;
  borders?: Borders;
  boxShadow?: CSS["boxShadow"];
  color?: CssColor;
  colorOnHover?: CssColor;
  dense?: boolean;
  endNode?: ReactNode;
  fontFamily?: CSS["fontFamily"];
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
  maxWidth?: CSS["maxWidth"];
  outlined?: boolean;
  outlineFill?: CssColor;
  outlineFillOnHover?: CssColor;
  padding?: Padding;
  startNode?: ReactNode;
  text?: ReactNode;
  textClassName?: string;
  textColor?: CssColor;
  textColorOnHover?: CssColor;
  textProps?: Omit<Partial<TextProps>, "color" | "fontFamily" | "fontSize" | "fontWeight">;
  textTransform?: CSS["textTransform"];
  tooltip?: TooltipProps["title"];
  tooltipProps?: Partial<TooltipProps>;
  type?: "button" | "link";
  underline?: "always" | "hover" | "none";
  variant?: "contained" | "outlined" | "text";
  whiteSpace?: CSS["whiteSpace"];
  width?: CSS["width"];
}

export const Button = ({
  borderColorOnHover,
  borderRadiuses = { all: "0.3rem" },
  borders,
  boxShadow,
  className,
  color = colors.custom.grey,
  colorOnHover,
  dense = false,
  endNode,
  fontFamily,
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
  maxWidth,
  onClick,
  outlined = false,
  outlineFill = "transparent",
  outlineFillOnHover,
  padding,
  size = "small",
  startNode,
  text,
  textClassName,
  textColor,
  textColorOnHover,
  textProps = {},
  textTransform = "none",
  tooltip,
  tooltipProps,
  type = "button",
  underline = type === "link" ? "hover" : "none",
  variant = "contained",
  whiteSpace = "nowrap",
  width,
  ...props
}: ButtonProps) => {
  const isAnchor = !!href;
  const isLinkDisplay = type === "link";
  const defaultPadding = isLinkDisplay ? "0" : dense || size === "small" ? "0 0.5rem" : "0 1rem";
  const defaultHeight = isLinkDisplay
    ? "auto"
    : dense || size === "small"
      ? DENSE_FORM_ROW_HEIGHT
      : FORM_ROW_HEIGHT;
  const resolvedTextColor =
    textColor ?? (outlined ? color : isLinkDisplay ? colors.custom.lightBlue : colors.custom.white);
  const resolvedColorOnHover = colorOnHover;
  const resolvedTextColorOnHover =
    textColorOnHover ??
    (resolvedColorOnHover && outlined ? resolvedColorOnHover : resolvedTextColor);

  const { css, cx } = useClasses({
    borderColorOnHover,
    borderRadiuses,
    borders,
    boxShadow,
    color,
    colorOnHover: resolvedColorOnHover,
    height: height ?? defaultHeight,
    isLinkDisplay,
    justify,
    margins,
    maxWidth,
    outlined,
    outlineFill,
    outlineFillOnHover,
    padding: { all: defaultPadding, ...padding },
    textColor: resolvedTextColor,
    textColorOnHover: resolvedTextColorOnHover,
    textTransform,
    underline,
    whiteSpace,
    width,
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => onClick?.(event);

  return (
    <TooltipWrapper {...{ tooltip, tooltipProps }}>
      <MuiButton
        {...props}
        {...{ size, variant }}
        {...(isAnchor ? { component: "a", href } : {})}
        onClick={handleClick}
        className={cx(css.root, className)}
      >
        <LoadingOverlay isLoading={loading} />

        {startNode}

        <View row align="center" spacing="0.3rem">
          {icon && <Icon name={icon} size={iconSize} {...iconProps} />}

          {typeof text === "string" ? (
            <Text
              {...{ fontFamily, fontSize, fontWeight, textTransform }}
              {...textProps}
              className={cx(css.text, textClassName, textProps.className)}
            >
              {text}
            </Text>
          ) : (
            text
          )}

          {iconRight && <Icon name={iconRight} size={iconSize} {...iconProps} />}
        </View>

        {endNode}
      </MuiButton>
    </TooltipWrapper>
  );
};

interface ClassesProps extends Pick<
  ButtonProps,
  | "borderColorOnHover"
  | "borderRadiuses"
  | "borders"
  | "boxShadow"
  | "color"
  | "colorOnHover"
  | "height"
  | "justify"
  | "margins"
  | "maxWidth"
  | "outlined"
  | "outlineFill"
  | "outlineFillOnHover"
  | "padding"
  | "textColor"
  | "textColorOnHover"
  | "textTransform"
  | "underline"
  | "whiteSpace"
  | "width"
> {
  isLinkDisplay: boolean;
}

const useClasses = makeClasses((props: ClassesProps) => {
  const bgColor = props.outlined
    ? props.outlineFill
    : props.isLinkDisplay
      ? "transparent"
      : props.color;
  const bgColorOnHover = props.isLinkDisplay
    ? "transparent"
    : props.outlined
      ? (props.outlineFillOnHover ?? Color(props.outlineFill).fade(0.1).string())
      : (props.colorOnHover ?? Color(props.color).fade(0.1).string());
  const borderColor = props.outlined ? props.color : bgColor;
  const borderColorOnHover =
    props.borderColorOnHover ?? (props.outlined ? props.colorOnHover : bgColorOnHover);
  const linkPadding = props.isLinkDisplay && !props.padding?.all ? 0 : undefined;
  const textColor = `${props.textColor} !important`;
  const textColorOnHover = `${props.textColorOnHover} !important`;
  const textDecoration = props.underline === "always" ? "underline" : "none";
  const textDecorationOnHover = props.underline === "none" ? "none" : "underline";

  return {
    root: {
      position: "relative",
      display: props.isLinkDisplay ? "inline-flex" : "flex",
      flexDirection: "row",
      justifyContent: props.justify,
      alignItems: "center",
      alignSelf: "auto",
      border: `1px solid ${borderColor}`,
      ...makeBorderRadiuses(props.borderRadiuses),
      ...makeBorders(props.borders),
      ...makeMargins(props.margins),
      padding: props.padding?.all,
      paddingTop: props.padding?.top ?? linkPadding,
      paddingBottom: props.padding?.bottom ?? linkPadding,
      paddingRight: props.padding?.right ?? linkPadding,
      paddingLeft: props.padding?.left ?? linkPadding,
      maxWidth: props.maxWidth,
      minWidth: "fit-content",
      height: props.height,
      width: props.width,
      backgroundColor: bgColor,
      color: textColor,
      cursor: "pointer",
      textDecoration,
      textTransform: props.textTransform,
      lineHeight: 1,
      boxShadow: props.boxShadow ?? "none",
      "&:active": {
        color: textColor,
        textDecoration,
      },
      "&:link": {
        color: textColor,
      },
      "&:hover, &:link:hover, &:visited:hover": {
        backgroundColor: bgColorOnHover,
        borderColor: borderColorOnHover,
        color: textColorOnHover,
        boxShadow: props.boxShadow ?? (props.isLinkDisplay ? "none" : undefined),
        textDecoration: `${textDecorationOnHover} !important`,
      },
      "&:visited": {
        color: textColor,
        textDecoration,
      },
      "&.Mui-disabled": {
        backgroundColor: bgColor,
        color: textColor,
        opacity: 0.5,
        "&:hover": {
          backgroundColor: bgColorOnHover,
          color: textColorOnHover,
        },
      },
    },
    text: {
      lineHeight: 1.2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "all 100ms ease-in-out",
      textTransform: props.textTransform,
      whiteSpace: props.whiteSpace,
    },
  };
});

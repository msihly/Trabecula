import { ElementType } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Typography, TypographyProps } from "@mui/material";
import { TooltipProps, TooltipWrapper } from "trabecula/components";
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

export type TextPreset =
  "default" | "detail-label" | "faint-info" | "label-glow" | "sub-text" | "title";

const SUB_TEXT: CSS = {
  fontWeight: 400,
  fontSize: "0.7em",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

const PRESETS: Record<TextPreset, CSS> = {
  default: {
    fontSize: "1em",
    fontWeight: 500,
    overflow: "hidden",
  },
  "detail-label": {
    color: colors.custom.lightGrey,
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
  /**
   * Faint, low-priority details for advanced users, such as IDs and counts. Too low in contrast
   * for subtitles, labels, or other text meant to be read on most surfaces; use `sub-text`.
   */
  "faint-info": {
    ...SUB_TEXT,
    color: colors.custom.grey,
  },
  "label-glow": {
    color: colors.custom.white,
    fontWeight: 400,
    fontSize: "0.8em",
    textAlign: "center",
    textShadow: `0 0 10px ${colors.custom.blue}`,
    overflow: "visible",
  },
  "sub-text": {
    ...SUB_TEXT,
    color: colors.custom.lightGrey,
  },
  title: {
    color: colors.custom.white,
    fontSize: "1.1em",
    fontWeight: 600,
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
};

export interface TextProps extends Omit<
  TypographyProps,
  "color" | "component" | "title" | "variant"
> {
  alignSelf?: CSS["alignSelf"];
  bold?: boolean;
  color?: CssColor;
  component?: ElementType;
  display?: CSS["display"];
  flex?: CSS["flex"];
  flexShrink?: CSS["flexShrink"];
  fontFamily?: CSS["fontFamily"];
  fontSize?: CSS["fontSize"];
  fontWeight?: CSS["fontWeight"];
  italic?: boolean;
  lineHeight?: CSS["lineHeight"];
  margins?: Margins;
  minHeight?: CSS["minHeight"];
  minWidth?: CSS["minWidth"];
  opacity?: CSS["opacity"];
  overflow?: CSS["overflow"];
  overflowWrap?: CSS["overflowWrap"];
  padding?: Padding;
  preset?: TextPreset;
  textAlign?: CSS["textAlign"];
  textOverflow?: CSS["textOverflow"];
  textTransform?: CSS["textTransform"];
  tooltip?: TooltipProps["title"];
  tooltipProps?: Partial<TooltipProps>;
  whiteSpace?: CSS["whiteSpace"];
  width?: CSS["width"];
  wordBreak?: CSS["wordBreak"];
}

export const Text = ({
  alignSelf,
  bold = false,
  children,
  className,
  color,
  component = "span",
  display,
  flex,
  flexShrink,
  fontFamily = "Karla",
  fontSize,
  fontWeight,
  italic = false,
  lineHeight,
  margins,
  minHeight,
  minWidth,
  opacity,
  overflow,
  overflowWrap,
  padding,
  preset = "default",
  textAlign,
  textOverflow,
  textTransform,
  tooltip,
  tooltipProps,
  whiteSpace = "nowrap",
  width,
  wordBreak,
  ...props
}: TextProps) => {
  const { css, cx } = useClasses({
    alignSelf,
    bold,
    color,
    display,
    flex,
    flexShrink,
    fontFamily,
    fontSize,
    fontWeight,
    italic,
    lineHeight,
    margins,
    minHeight,
    minWidth,
    opacity,
    overflow,
    overflowWrap,
    padding,
    preset,
    textAlign,
    textOverflow,
    textTransform,
    whiteSpace,
    width,
    wordBreak,
  });

  return (
    <TooltipWrapper tooltip={tooltip} tooltipProps={tooltipProps}>
      <Typography {...props} component={component} className={cx(css.root, className)}>
        {children}
      </Typography>
    </TooltipWrapper>
  );
};

Text.Inline = (props: Omit<TextProps, "component">) => <Text display="inline" {...props} />;

interface ClassesProps extends Pick<
  TextProps,
  | "alignSelf"
  | "bold"
  | "color"
  | "display"
  | "flex"
  | "flexShrink"
  | "fontFamily"
  | "fontSize"
  | "fontWeight"
  | "italic"
  | "lineHeight"
  | "margins"
  | "minHeight"
  | "minWidth"
  | "opacity"
  | "overflow"
  | "overflowWrap"
  | "padding"
  | "preset"
  | "textAlign"
  | "textOverflow"
  | "textTransform"
  | "whiteSpace"
  | "width"
  | "wordBreak"
> {}

const useClasses = makeClasses((props: ClassesProps) => {
  const preset = PRESETS[props.preset];

  return {
    root: {
      ...preset,
      alignSelf: props.alignSelf,
      color: props.color ?? preset?.color,
      display: props.display,
      flex: props.flex,
      flexShrink: props.flexShrink,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize ?? preset?.fontSize,
      fontWeight: props.bold ? 600 : (props.fontWeight ?? preset?.fontWeight),
      fontStyle: props.italic ? "italic" : undefined,
      lineHeight: props.lineHeight ?? 1.2,
      ...makeMargins(props.margins),
      minHeight: props.minHeight,
      minWidth: props.minWidth,
      opacity: props.opacity,
      overflow: props.overflow ?? preset?.overflow,
      overflowWrap: props.overflowWrap,
      ...makePadding(props.padding),
      textAlign: props.textAlign ?? preset?.textAlign,
      textOverflow: props.textOverflow ?? "ellipsis",
      textTransform: props.textTransform,
      whiteSpace: props.whiteSpace ?? preset?.whiteSpace,
      width: props.width,
      wordBreak: props.wordBreak,
    },
  };
});

export { PRESETS as TEXT_PRESETS };

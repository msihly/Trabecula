import { ElementType } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Typography, TypographyProps } from "@mui/material";
import { TooltipProps, TooltipWrapper } from "trabecula/components";
import { colors, CSS, CssColor, makeClasses } from "trabecula/utils/client";

export type TextPreset = "default" | "detail-label" | "label-glow" | "sub-text" | "title";

const PRESETS: Record<TextPreset, CSS> = {
  default: {
    fontSize: "1em",
    fontWeight: 500,
    overflow: "hidden",
  },
  "detail-label": {
    color: colors.custom.lightBlue,
    fontWeight: 500,
    whiteSpace: "nowrap",
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
    color: colors.custom.grey,
    fontWeight: 400,
    fontSize: "0.7em",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
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
  | "color"
  | "component"
  | "fontSize"
  | "fontWeight"
  | "lineHeight"
  | "opacity"
  | "overflow"
  | "textDecoration"
  | "title"
  | "variant"
> {
  bold?: boolean;
  color?: CssColor;
  component?: ElementType;
  fontSize?: CSS["fontSize"];
  fontWeight?: CSS["fontWeight"];
  italic?: boolean;
  lineHeight?: CSS["lineHeight"];
  opacity?: CSS["opacity"];
  overflow?: CSS["overflow"];
  overflowWrap?: CSS["overflowWrap"];
  preset?: TextPreset;
  tooltip?: TooltipProps["title"];
  tooltipProps?: Partial<TooltipProps>;
  textOverflow?: CSS["textOverflow"];
  whiteSpace?: CSS["whiteSpace"];
  wordBreak?: CSS["wordBreak"];
}

export const Text = ({
  bold = false,
  children,
  className,
  color,
  component = "span",
  fontFamily = "Roboto",
  fontSize,
  fontWeight,
  italic = false,
  lineHeight,
  opacity,
  overflow,
  overflowWrap,
  preset = "default",
  tooltip,
  tooltipProps,
  textOverflow,
  whiteSpace = "nowrap",
  wordBreak,
  ...props
}: TextProps) => {
  const { css, cx } = useClasses({
    bold,
    color,
    fontSize,
    fontWeight,
    italic,
    lineHeight,
    opacity,
    overflow,
    overflowWrap,
    preset,
    textOverflow,
    whiteSpace,
    wordBreak,
  });

  return (
    <TooltipWrapper {...{ tooltip, tooltipProps }}>
      <Typography
        {...props}
        component={component}
        fontFamily={fontFamily}
        className={cx(css.root, className)}
      >
        {children}
      </Typography>
    </TooltipWrapper>
  );
};

Text.Inline = (props: Omit<TextProps, "component">) => <Text display="inline" {...props} />;

interface ClassesProps extends Pick<
  TextProps,
  | "bold"
  | "color"
  | "fontSize"
  | "fontWeight"
  | "italic"
  | "lineHeight"
  | "opacity"
  | "overflow"
  | "overflowWrap"
  | "preset"
  | "textOverflow"
  | "whiteSpace"
  | "wordBreak"
> {}

const useClasses = makeClasses((props: ClassesProps) => {
  const preset = PRESETS[props.preset];
  return {
    root: {
      ...preset,
      color: props.color ?? preset?.color,
      fontSize: props.fontSize ?? preset?.fontSize,
      fontWeight: props.bold ? 600 : (props.fontWeight ?? preset?.fontWeight),
      fontStyle: props.italic ? "italic" : undefined,
      lineHeight: props.lineHeight ?? 1.2,
      opacity: props.opacity,
      overflow: props.overflow ?? preset?.overflow,
      overflowWrap: props.overflowWrap,
      textOverflow: props.textOverflow ?? "ellipsis",
      whiteSpace: props.whiteSpace ?? preset?.whiteSpace,
      wordBreak: props.wordBreak,
    },
  };
});

export { PRESETS as TEXT_PRESETS };

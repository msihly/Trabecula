import {
  ComponentPropsWithoutRef,
  createElement,
  ElementRef,
  ReactHTML,
  RefAttributes,
} from "react";
import { Comp } from "trabecula/components";
import {
  BorderRadiuses,
  Borders,
  CSS,
  CssColor,
  makeBorderRadiuses,
  makeBorders,
  makeClasses,
  makeMargins,
  makePadding,
  Margins,
  Padding,
} from "trabecula/utils/client";

export type ViewProps<Component extends keyof ReactHTML = "div"> = Omit<
  ComponentPropsWithoutRef<Component>,
  "align" | "height" | "width" | "wrap"
> & {
  align?: CSS["alignItems"];
  bgColor?: CssColor;
  borderRadiuses?: BorderRadiuses;
  borders?: Borders;
  column?: boolean;
  component?: Component;
  cursor?: CSS["cursor"];
  display?: CSS["display"];
  flex?: CSS["flex"];
  height?: CSS["height"];
  justify?: CSS["justifyContent"];
  margins?: Margins;
  maxHeight?: CSS["maxHeight"];
  maxWidth?: CSS["maxWidth"];
  minHeight?: CSS["minHeight"];
  minWidth?: CSS["minWidth"];
  opacity?: CSS["opacity"];
  overflow?: CSS["overflow"];
  padding?: Padding;
  position?: CSS["position"];
  row?: boolean;
  spacing?: CSS["marginRight"];
  width?: CSS["width"];
  wrap?: CSS["flexWrap"];
};

export const View = Comp<ViewProps<keyof ReactHTML>, HTMLElement>(
  (
    {
      align,
      bgColor,
      borderRadiuses,
      borders,
      children,
      className,
      column,
      component = "div",
      cursor,
      display,
      flex,
      height,
      justify,
      margins,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      overflow,
      padding,
      position,
      row,
      spacing,
      width,
      wrap,
      ...props
    },
    ref,
  ) => {
    if (row) column = false;

    const { css, cx } = useClasses({
      align,
      bgColor,
      borderRadiuses,
      borders,
      column,
      cursor,
      display,
      flex,
      height,
      justify,
      margins,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      overflow,
      padding,
      position,
      row,
      spacing,
      width,
      wrap,
    });

    return createElement(
      component,
      { ...props, className: cx(className, css.view), ref },
      children,
    );
  },
) as <Component extends keyof ReactHTML = "div">(
  props: ViewProps<Component> & RefAttributes<ElementRef<Component>>,
) => JSX.Element;

interface ClassesProps extends Pick<
  ViewProps,
  | "align"
  | "bgColor"
  | "borderRadiuses"
  | "borders"
  | "column"
  | "cursor"
  | "display"
  | "flex"
  | "height"
  | "justify"
  | "margins"
  | "maxHeight"
  | "maxWidth"
  | "minHeight"
  | "minWidth"
  | "opacity"
  | "overflow"
  | "padding"
  | "position"
  | "row"
  | "spacing"
  | "width"
  | "wrap"
> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  view: {
    position: props.position,
    display: props.display ?? (props.column || props.row ? "flex" : undefined),
    flexDirection: props.column ? "column" : props.row ? "row" : undefined,
    flex: props.flex,
    flexWrap: props.wrap,
    alignItems: props.align,
    justifyContent: props.justify,
    ...makeBorders(props.borders),
    ...makeBorderRadiuses(props.borderRadiuses),
    ...makeMargins(props.margins),
    ...makePadding(props.padding),
    maxHeight: props.maxHeight,
    maxWidth: props.maxWidth,
    minHeight: props.minHeight,
    minWidth: props.minWidth,
    height: props.height,
    width: props.width,
    backgroundColor: props.bgColor,
    opacity: props.opacity,
    overflow: props.overflow,
    cursor: props.cursor,
    ...(props.spacing
      ? {
          "& > *:not(:last-child)": {
            [props.column ? "marginBottom" : "marginRight"]: props.spacing,
          },
        }
      : {}),
  },
}));

import { Comp, HeaderWrapper, HeaderWrapperProps, View, ViewProps } from "trabecula/components";
import { colors, CSS, makeClasses } from "trabecula/utils/client";
import { deepMerge } from "trabecula/utils/common";

export interface CardProps extends ViewProps, Pick<HeaderWrapperProps, "header" | "headerProps"> {
  boxShadow?: CSS["boxShadow"];
  elevated?: boolean;
}

export const Card = Comp(
  (
    {
      align,
      bgColor = colors.foreground,
      borderRadiuses = {},
      borders,
      boxShadow,
      children,
      className,
      column = true,
      cursor,
      display = "flex",
      elevated = false,
      flex,
      header,
      headerProps,
      height,
      justify,
      margins,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      onScroll,
      opacity,
      overflow,
      padding = {},
      position,
      row = false,
      spacing,
      width,
      wrap,
      ...viewProps
    }: CardProps,
    ref,
  ) => {
    // The header wrapper takes the card's size and place. Only the card's body lays out its children, so alignment never stops the body from filling the wrapper.
    const boxProps = {
      borders,
      cursor,
      flex,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      position,
    };

    borderRadiuses = deepMerge({ bottom: "0.5rem", top: !!header ? 0 : "0.5rem" }, borderRadiuses);
    headerProps = deepMerge({ width: "100%" }, headerProps ?? {});
    padding = deepMerge({ all: "0.5rem" }, padding);

    const { css, cx } = useClasses({ boxShadow, elevated });

    return (
      <HeaderWrapper
        {...boxProps}
        {...viewProps}
        borderRadiuses={borderRadiuses}
        className={className}
        display={display}
        header={header}
        headerProps={headerProps}
        height={height}
        margins={margins}
        onScroll={onScroll}
        overflow={overflow}
        width={width}
      >
        <View
          {...boxProps}
          align={align}
          justify={justify}
          wrap={wrap}
          className={cx(css.root, className)}
          position={position ?? "relative"}
          column={column && !row}
          flex={flex ?? 1}
          bgColor={bgColor}
          borderRadiuses={borderRadiuses}
          height={height}
          onScroll={onScroll}
          overflow={overflow}
          padding={padding}
          ref={ref}
          row={row}
          spacing={spacing}
          width={header ? "100%" : width}
          aria-label="card"
        >
          {children}
        </View>
      </HeaderWrapper>
    );
  },
);

interface ClassesProps extends Pick<CardProps, "boxShadow" | "elevated"> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  root: {
    boxShadow:
      props.boxShadow ?? (props.elevated ? "0.1rem 0.1rem 0.3rem rgb(0 0 0 / 50%)" : undefined),
  },
}));

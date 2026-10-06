import { ReactNode } from "react";
import { Comp, ConditionalWrap, Text, TextProps, View, ViewProps } from "trabecula/components";
import { colors } from "trabecula/utils/client";
import { deepMerge } from "trabecula/utils/common";

const DEFAULT_HEADER_PROPS: HeaderWrapperProps["headerProps"] = {
  bgColor: colors.custom.black,
  borderRadiuses: { top: 6 },
  fontSize: "0.8em",
  justify: "center",
  padding: { all: "0.2rem 0.3rem" },
  row: true,
};

export interface HeaderWrapperProps extends ViewProps {
  header?: ReactNode;
  headerProps?: Partial<ViewProps> & { fontSize?: string };
  textProps?: Partial<TextProps>;
}

export const HeaderWrapper = Comp((rawProps: HeaderWrapperProps, ref) => {
  const {
    align,
    bgColor,
    borderRadiuses,
    borders,
    children,
    className,
    column,
    cursor,
    display,
    flex,
    header,
    headerProps = {},
    height = "auto",
    justify,
    margins,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    onScroll,
    opacity,
    overflow,
    padding,
    position = "relative",
    row,
    spacing,
    textProps = {},
    width,
    wrap,
    ...viewProps
  } = rawProps;

  const layoutProps = {
    align,
    bgColor,
    borderRadiuses,
    borders,
    className,
    column,
    cursor,
    flex,
    justify,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    padding,
    wrap,
  };

  const mergedHeaderProps = deepMerge(DEFAULT_HEADER_PROPS, headerProps);

  const wrapHeader = (content: ReactNode) => (
    <View
      {...layoutProps}
      aria-label="header-wrapper"
      {...viewProps}
      ref={ref}
      column
      height={height}
      margins={margins}
      onScroll={onScroll}
      overflow={overflow}
      width={width}
    >
      <View {...mergedHeaderProps} aria-label="header">
        {typeof header === "string" ? (
          <Text flex={1} fontSize={mergedHeaderProps.fontSize} textAlign="center" {...textProps}>
            {header}
          </Text>
        ) : (
          header
        )}
      </View>

      {content}
    </View>
  );

  return (
    <ConditionalWrap condition={!!header} wrap={wrapHeader}>
      <View
        {...layoutProps}
        aria-label="header-wrapper-content"
        {...(header ? {} : viewProps)}
        ref={header ? undefined : ref}
        display={display}
        height={height}
        margins={header ? undefined : margins}
        onScroll={onScroll}
        overflow={"overflow" in rawProps ? overflow : "auto"}
        position={position}
        row={row}
        spacing={spacing}
        width={header ? "100%" : width}
      >
        {children}
      </View>
    </ConditionalWrap>
  );
});

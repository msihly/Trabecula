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

export const HeaderWrapper = Comp(
  (
    {
      children,
      display,
      header,
      height = "auto",
      headerProps = {},
      position = "relative",
      row,
      spacing,
      textProps = {},
      width,
      ...viewProps
    }: HeaderWrapperProps,
    ref,
  ) => {
    headerProps = deepMerge(DEFAULT_HEADER_PROPS, headerProps);

    const wrap = (content: ReactNode) => (
      <View
        {...viewProps}
        ref={ref}
        column
        height={height}
        width={width}
        aria-label="header-wrapper"
      >
        <View {...headerProps} aria-label="header">
          {typeof header === "string" ? (
            <Text flex={1} fontSize={headerProps.fontSize} textAlign="center" {...textProps}>
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
      <ConditionalWrap condition={!!header} wrap={wrap}>
        <View
          {...(header ? {} : viewProps)}
          ref={header ? undefined : ref}
          overflow="auto"
          aria-label="header-wrapper-content"
          display={display}
          height={height}
          position={position}
          row={row}
          spacing={spacing}
          width={header ? "100%" : width}
        >
          {children}
        </View>
      </ConditionalWrap>
    );
  },
);

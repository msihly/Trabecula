import { ReactNode } from "react";
import { Comp, HeaderWrapper, View, ViewProps } from "trabecula/components";
import { colors, CSS, makeClasses } from "trabecula/utils/client";
import { deepMerge } from "trabecula/utils/common";

export interface CardProps extends ViewProps {
  boxShadow?: CSS["boxShadow"];
  elevated?: boolean;
  header?: ReactNode;
  headerProps?: Partial<ViewProps>;
}

export const Card = Comp(
  (
    {
      bgColor = colors.foreground,
      borderRadiuses = {},
      children,
      className,
      column = true,
      display = "flex",
      elevated = false,
      header,
      height,
      headerProps,
      boxShadow,
      overflow,
      padding = {},
      row = false,
      spacing,
      width,
      ...viewProps
    }: CardProps,
    ref,
  ) => {
    borderRadiuses = deepMerge({ bottom: "0.5rem", top: !!header ? 0 : "0.5rem" }, borderRadiuses);
    headerProps = deepMerge({ width: "100%" }, headerProps ?? {});
    padding = deepMerge({ all: "0.5rem" }, padding);
    const { css, cx } = useClasses({ boxShadow, elevated });

    return (
      <HeaderWrapper
        {...viewProps}
        {...{ borderRadiuses, className, display, header, headerProps, height, overflow, width }}
      >
        <View
          className={cx(css.root, className)}
          position="relative"
          column={column && !row}
          flex={1}
          {...{ bgColor, borderRadiuses, height, overflow, padding, ref, row, spacing, width }}
          {...viewProps}
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

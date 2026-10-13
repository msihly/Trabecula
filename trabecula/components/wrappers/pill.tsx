import { Comp, Text, View, ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";

export interface PillProps extends ViewProps {
  fontFamily?: CSS["fontFamily"];
  fontSize?: CSS["fontSize"];
  fontWeight?: CSS["fontWeight"];
}

export const Pill = Comp(
  ({ children, fontFamily, fontSize, fontWeight, ...viewProps }: PillProps, ref) => (
    <View
      row
      align="center"
      justify="center"
      bgColor="rgba(0, 0, 0, 0.25)"
      flex="none"
      padding={{ all: "0 0.4rem" }}
      {...viewProps}
      ref={ref}
    >
      {typeof children === "object" ? (
        children
      ) : (
        <Text fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight}>
          {children}
        </Text>
      )}
    </View>
  ),
);

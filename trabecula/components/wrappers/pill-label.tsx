import { ReactNode } from "react";
import { Pill, PillProps, View, ViewProps } from "trabecula/components";

interface PillLabelProps extends ViewProps {
  pill?: ReactNode;
  pillPosition: "left" | "right";
  pillProps?: Partial<PillProps>;
}

export const PillLabel = ({
  children,
  pill,
  pillPosition,
  pillProps,
  ...viewProps
}: PillLabelProps) => {
  const pillNode = pill !== undefined && (
    <Pill
      borderRadiuses={{ all: "0.6rem" }}
      fontSize="0.85em"
      padding={{ all: "0.1rem 0.4rem" }}
      {...pillProps}
    >
      {pill}
    </Pill>
  );

  return (
    <View row align="center" {...viewProps}>
      {pillPosition === "left" && pillNode}

      {children}

      {pillPosition === "right" && pillNode}
    </View>
  );
};

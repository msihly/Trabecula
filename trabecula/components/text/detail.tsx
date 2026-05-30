import { ReactNode } from "react";
import { Text, TextProps, View, ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";

export interface DetailProps extends ViewProps {
  emptyValueText?: string;
  label: ReactNode;
  labelProps?: Partial<TextProps>;
  overflow?: CSS["overflow"];
  tooltip?: ReactNode;
  value: ReactNode;
  valueProps?: Partial<TextProps>;
  whiteSpace?: CSS["whiteSpace"];
  withTooltip?: boolean;
}

export const Detail = ({
  emptyValueText = "--",
  label,
  labelProps = {},
  overflow = "hidden",
  row = false,
  tooltip,
  value,
  valueProps,
  whiteSpace = "nowrap",
  withTooltip,
  ...props
}: DetailProps) => {
  return (
    <View column={!row} row={row} spacing={row ? "0.5rem" : null} {...props}>
      {["number", "string"].includes(typeof label) ? (
        <Text preset="detail-label" fontSize="0.9em" fontWeight={600} {...labelProps}>
          {label}
        </Text>
      ) : (
        label
      )}

      {!value || ["number", "string"].includes(typeof value) ? (
        <Text
          tooltip={tooltip ?? (withTooltip ? value : undefined)}
          whiteSpace={whiteSpace}
          overflow={overflow}
          {...valueProps}
        >
          {value || emptyValueText}
        </Text>
      ) : (
        value
      )}
    </View>
  );
};

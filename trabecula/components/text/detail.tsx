import { Text, TextProps, View, ViewProps } from "trabecula/components";
import { CSS, makeClasses } from "trabecula/utils/client";

export interface DetailProps extends ViewProps {
  emptyValueText?: string;
  label: string | JSX.Element;
  labelProps?: Partial<TextProps>;
  overflowX?: CSS["overflowX"];
  overflowY?: CSS["overflowY"];
  tooltip?: string | JSX.Element;
  value: string | JSX.Element;
  valueProps?: Partial<TextProps>;
  withTooltip?: boolean;
}

export const Detail = ({
  emptyValueText = "--",
  label,
  labelProps = {},
  overflowX = "auto",
  overflowY = "hidden",
  row = false,
  tooltip,
  value,
  valueProps,
  withTooltip,
  ...props
}: DetailProps) => {
  const { css, cx } = useClasses({ overflowX, overflowY });

  return (
    <View column={!row} row={row} spacing={row ? "0.5rem" : null} {...props}>
      {typeof label === "string" ? (
        <Text preset="detail-label" {...labelProps}>
          {label}
        </Text>
      ) : (
        label
      )}

      {!value || typeof value === "string" ? (
        <Text
          tooltip={tooltip ?? (withTooltip ? value : undefined)}
          className={cx(css.value, valueProps?.className)}
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

interface ClassesProps extends Pick<DetailProps, "overflowX" | "overflowY"> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  value: {
    overflowX: props.overflowX,
    overflowY: props.overflowY,
    whiteSpace: "nowrap",
  },
}));

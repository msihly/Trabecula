import { AriaAttributes } from "react";
import { LinearProgress } from "@mui/material";
import { Chip, Comp, Text, View, ViewProps } from "trabecula/components";
import { colors, CSS, makeClasses } from "trabecula/utils/client";

export interface ProgressBarProps extends Pick<AriaAttributes, "aria-label" | "aria-labelledby"> {
  denominator?: number;
  denominatorFormatter?: (num: number) => string;
  minWidth?: CSS["minWidth"];
  numerator?: number;
  numeratorFormatter?: (num: number) => string;
  variant?: "determinate" | "indeterminate";
  viewProps?: ViewProps;
  withText?: boolean;
}

export const ProgressBar = Comp((props: ProgressBarProps) => {
  const minWidth = props?.minWidth || "2em";

  const { css } = useClasses(null);

  return (
    <View row flex={1} align="center" spacing="1rem" {...props.viewProps}>
      {props.withText ? (
        <Chip
          label={
            <Text minWidth={minWidth} textAlign="center">
              {props.numerator > -1
                ? (props.numeratorFormatter?.(props.numerator) ?? props.numerator)
                : "--"}
            </Text>
          }
          denominator={
            <Text minWidth={minWidth} textAlign="center">
              {props.denominator > -1
                ? (props.denominatorFormatter?.(props.denominator) ?? props.denominator)
                : "--"}
            </Text>
          }
        />
      ) : null}

      <LinearProgress
        aria-label={props["aria-label"]}
        aria-labelledby={props["aria-labelledby"]}
        variant={props.variant ?? "determinate"}
        value={Math.min(
          100,
          Math.max(0, ((props.numerator || 0) / (props.denominator || 1)) * 100),
        )}
        className={css.progressBar}
      />
    </View>
  );
});

const useClasses = makeClasses({
  progressBar: {
    flex: 1,
    backgroundColor: colors.control,
    "& .MuiLinearProgress-bar": {
      backgroundColor: colors.custom.blue,
    },
  },
});

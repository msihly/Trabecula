import { ReactNode } from "react";
import { CircularProgress } from "@mui/material";
import Color from "color";
import { Comp, View } from "trabecula/components";
import { colors, CssColor, makeClasses } from "trabecula/utils/client";

export interface ProgressCircleProps {
  bgColor?: CssColor;
  children?: ReactNode | ReactNode[];
  color?: CssColor;
  percent?: number;
  size?: number | string;
  variant?: "determinate" | "indeterminate";
}

export const ProgressCircle = Comp((props: ProgressCircleProps) => {
  const color = props.color || colors.custom.white;

  const { css } = useClasses({
    bgColor:
      props.variant === "indeterminate"
        ? undefined
        : props.bgColor || (Color(color).fade(0.5).string() as CssColor),
    color,
  });

  return (
    <View column position="relative" justify="center" align="center">
      <View column position="absolute">
        {props.children}
      </View>

      <CircularProgress
        color="inherit"
        value={props.percent || 0}
        variant={props.variant ?? "determinate"}
        size={props.size}
        className={css.circle}
      />

      {props.variant !== "indeterminate" && (
        <View column position="absolute">
          <CircularProgress
            color="inherit"
            value={100}
            variant="determinate"
            size={props.size}
            className={css.bgCircle}
          />
        </View>
      )}
    </View>
  );
});

interface ClassesProps extends Pick<ProgressCircleProps, "bgColor" | "color"> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  bgCircle: {
    zIndex: 1,
    "& circle": { color: props.bgColor },
  },
  circle: {
    zIndex: 10,
    "& circle": { color: props.color },
  },
}));

import { Chip as ChipBase, ChipProps as ChipBaseProps } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";

export interface ChipProps extends ChipBaseProps {
  hasFooter?: boolean;
  flush?: boolean;
  opacity?: number;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export const Chip = ({
  bgColor = colors.background,
  hasFooter,
  flush = false,
  opacity = 0.6,
  position,
  ...props
}: ChipProps) => {
  const { css } = useClasses({ hasFooter, flush, opacity, position });

  return <ChipBase {...props} {...{ bgColor }} className={css.chip} />;
};

interface ClassesProps {
  hasFooter: boolean;
  flush: boolean;
  opacity: number;
  position: ChipProps["position"];
}

const useClasses = makeClasses((props: ClassesProps) => ({
  chip: {
    position: "absolute",
    top: props.position.includes("top") ? (props.flush ? 0 : "0.3rem") : undefined,
    right: props.position.includes("right") ? (props.flush ? 0 : "0.3rem") : undefined,
    bottom: props.position.includes("bottom")
      ? props.hasFooter
        ? "2rem"
        : props.flush
          ? 0
          : "0.3rem"
      : undefined,
    left: props.position.includes("left") ? (props.flush ? 0 : "0.3rem") : undefined,
    cursor: "pointer",
    opacity: props.opacity,
    "&:hover": { opacity: Math.min(1, props.opacity + 0.3) },
  },
}));

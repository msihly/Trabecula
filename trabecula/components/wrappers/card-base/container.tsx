import { MouseEvent, ReactNode } from "react";
import { Paper } from "@mui/material";
import { View, ViewProps } from "trabecula/components";
import { colors, CssColor, makeClasses } from "trabecula/utils/client";

export interface ContainerProps extends ViewProps {
  children: ReactNode | ReactNode[];
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  onDoubleClick?: () => void;
  selected?: boolean;
  selectedColor?: CssColor;
}

export const Container = ({
  children,
  className,
  disabled,
  display = "block",
  height,
  onClick,
  onDoubleClick,
  selected,
  selectedColor = colors.custom.blue,
  width,
  ...viewProps
}: ContainerProps) => {
  const { css, cx } = useClasses({ disabled, display, height, selected, selectedColor, width });

  return (
    <View {...viewProps} className={cx(css.container, className)}>
      <Paper
        onClick={!disabled ? onClick : undefined}
        onDoubleClick={!disabled ? onDoubleClick : undefined}
        elevation={3}
        className={css.paper}
      >
        {children}
      </Paper>
    </View>
  );
};

interface ClassesProps extends Pick<
  ContainerProps,
  "disabled" | "display" | "height" | "selected" | "selectedColor" | "width"
> {}

const useClasses = makeClasses((props: ClassesProps, theme) => ({
  container: {
    position: "relative",
    display: props.display,
    // Spaces cards apart without framing them, keeping the selection ring inside the border.
    border: "2px solid transparent",
    borderRadius: 4,
    padding: "0.25rem",
    height: props.height ?? "20rem",
    [theme.breakpoints.down("xl")]: props.height ? undefined : { height: "18rem" },
    [theme.breakpoints.down("lg")]: props.height ? undefined : { height: "16rem" },
    [theme.breakpoints.down("md")]: props.height ? undefined : { height: "14rem" },
    [theme.breakpoints.down("sm")]: props.height ? undefined : { height: "12rem" },
    ...(props.width ? { width: props.width } : {}),
    background: !props.disabled && props.selected ? props.selectedColor : "transparent",
    backgroundClip: "padding-box",
    overflow: "hidden",
    cursor: "pointer",
    userSelect: "none",
  },
  paper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    backgroundColor: colors.foreground,
    // Replaces the elevation's lightening overlay, which the panel color already gives.
    backgroundImage: "none",
    border: `1px solid ${colors.border}`,
    userSelect: "none",
  },
}));

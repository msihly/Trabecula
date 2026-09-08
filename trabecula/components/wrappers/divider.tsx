// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Divider as MuiDivider, DividerProps as MuiDividerProps } from "@mui/material";
import { Comp } from "trabecula/components";
import { colors, CSS, CssColor, makeClasses, makeMargins, Margins } from "trabecula/utils/client";

export interface DividerProps extends Omit<MuiDividerProps, "color" | "sx"> {
  alignSelf?: CSS["alignSelf"];
  borderWidth?: CSS["borderWidth"];
  color?: CssColor;
  height?: CSS["height"];
  margins?: Margins;
}

export const Divider = Comp(
  (
    {
      alignSelf,
      borderWidth = 1,
      color = colors.custom.blue,
      flexItem = true,
      height,
      margins = {},
      orientation = "horizontal",
      ...props
    }: DividerProps,
    ref,
  ) => {
    const { css } = useClasses({ alignSelf, borderWidth, color, height, margins, orientation });

    return (
      <MuiDivider
        {...props}
        component="div"
        ref={ref}
        flexItem={flexItem}
        orientation={orientation}
        className={css.divider}
      />
    );
  },
);

interface ClassesProps extends Pick<
  DividerProps,
  "alignSelf" | "borderWidth" | "color" | "height" | "margins" | "orientation"
> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  divider: {
    alignSelf: props.alignSelf,
    borderColor: props.color,
    borderBottomWidth: props.orientation === "horizontal" ? props.borderWidth : undefined,
    borderRightWidth: props.orientation === "vertical" ? props.borderWidth : undefined,
    height: props.height,
    ...makeMargins(props.margins),
  },
}));

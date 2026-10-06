import { ReactNode } from "react";
import { Slider as MuiSlider, SliderProps as MuiSliderProps } from "@mui/material";
import { Comp } from "trabecula/components";
import {
  colors,
  CSS,
  CssColor,
  makeClasses,
  makeMargins,
  makePadding,
  Margins,
  Padding,
} from "trabecula/utils/client";

export interface SliderMark {
  label?: ReactNode;
  value: number;
}

export interface SliderProps extends Omit<
  MuiSliderProps,
  "color" | "defaultValue" | "marks" | "onChange" | "onChangeCommitted" | "style" | "sx" | "value"
> {
  color?: CssColor;
  flex?: CSS["flex"];
  height?: CSS["height"];
  margins?: Margins;
  marks?: boolean | SliderMark[];
  onCommit?: (value: number) => void;
  padding?: Padding;
  setValue?: (value: number) => void;
  value: number;
  width?: CSS["width"];
}

export const Slider = Comp<SliderProps, HTMLSpanElement>(
  (
    {
      className,
      color = colors.custom.lightBlue,
      flex,
      height,
      margins,
      onCommit,
      orientation = "horizontal",
      padding,
      setValue,
      value,
      width,
      ...props
    }: SliderProps,
    ref,
  ) => {
    const { css, cx } = useClasses({ color, flex, height, margins, orientation, padding, width });

    const handleChange: MuiSliderProps["onChange"] = (_, value) => setValue?.(value as number);

    const handleCommit: MuiSliderProps["onChangeCommitted"] = (_, value) =>
      onCommit?.(value as number);

    return (
      <MuiSlider
        {...props}
        ref={ref}
        className={cx(css.slider, className)}
        onChange={handleChange}
        onChangeCommitted={handleCommit}
        orientation={orientation}
        value={value}
      />
    );
  },
);

interface ClassesProps extends Pick<
  SliderProps,
  "color" | "flex" | "height" | "margins" | "orientation" | "padding" | "width"
> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  slider: {
    color: props.color,
    "& .MuiSlider-markLabel": {
      top: props.orientation === "horizontal" ? -10 : undefined,
      fontSize: "0.65em",
      fontWeight: 600,
    },
    "& .MuiSlider-thumb": {
      borderRadius: "0.5rem",
      height: props.orientation === "vertical" ? 4 : 18,
      width: props.orientation === "vertical" ? 18 : 4,
    },
    flex: props.flex,
    height: props.height,
    ...makeMargins(props.margins),
    ...makePadding(props.padding),
    width: props.width,
  },
}));

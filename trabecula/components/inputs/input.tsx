import type { ChangeEvent, MutableRefObject, ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import Color from "color";
import { Comp, HeaderWrapper, HeaderWrapperProps, Text, TextProps } from "trabecula/components";
import {
  BorderRadiuses,
  Borders,
  colors,
  CSS,
  CssColor,
  makeBorderRadiuses,
  makeBorders,
  makeClasses,
  makeMargins,
  makePadding,
  Margins,
  Padding,
} from "trabecula/utils/client";
import { CONSTANTS, deepMerge } from "trabecula/utils/common";

export const DENSE_INPUT_PADDING = "0.1rem 0.5rem";

const DEFAULT_HEADER_PROPS: HeaderWrapperProps["headerProps"] = {
  fontSize: "0.8em",
  padding: { all: "0.2rem 0.3rem" },
};

export interface InputProps extends Omit<
  TextFieldProps,
  "color" | "fullWidth" | "helperText" | "label"
> {
  adornment?: ReactNode;
  adornmentColor?: CssColor;
  adornmentPosition?: "end" | "start";
  background?: CssColor;
  borderRadiuses?: BorderRadiuses;
  borders?: Borders;
  className?: string;
  color?: CssColor;
  dense?: boolean;
  flex?: CSS["flex"];
  fontFamily?: CSS["fontFamily"];
  fontSize?: CSS["fontSize"];
  fontWeight?: CSS["fontWeight"];
  hasHelper?: boolean;
  header?: HeaderWrapperProps["header"];
  headerProps?: HeaderWrapperProps["headerProps"];
  height?: CSS["height"];
  helperText?: ReactNode;
  helperTextProps?: Partial<TextProps>;
  label?: HeaderWrapperProps["header"];
  labelProps?: HeaderWrapperProps["headerProps"];
  labelTextProps?: HeaderWrapperProps["textProps"];
  margins?: Margins;
  maxLength?: number;
  minWidth?: CSS["minWidth"];
  noFade?: boolean;
  onEnter?: () => any;
  padding?: Padding;
  setValue?: (value: string) => any;
  textAlign?: CSS["textAlign"];
  textColor?: CssColor;
  value?: string;
  width?: CSS["width"];
}

export const Input = Comp((rawProps: InputProps, ref?: MutableRefObject<HTMLDivElement>) => {
  const {
    adornment,
    adornmentColor = colors.custom.grey,
    adornmentPosition = "end",
    background = "rgb(0 0 0 / 0.2)",
    borderRadiuses,
    borders,
    children,
    className,
    color,
    dense = false,
    flex,
    fontFamily = "Roboto",
    fontSize,
    fontWeight,
    hasHelper = false,
    header,
    headerProps = {},
    height,
    helperText,
    helperTextProps = {},
    inputProps,
    label,
    labelProps,
    labelTextProps = {},
    margins = {},
    maxLength,
    minWidth,
    noFade = false,
    onChange,
    onClick,
    onEnter,
    onKeyDown,
    padding = {},
    setValue,
    textAlign,
    textColor,
    value,
    variant = "outlined",
    width = "100%",
    ...props
  } = rawProps;

  const resolvedLabel = label ?? header;
  const resolvedLabelProps = deepMerge(DEFAULT_HEADER_PROPS, labelProps ?? headerProps);
  const hasLabel = !!resolvedLabel;
  const denseHeight =
    dense && rawProps.height === undefined ? CONSTANTS.DENSE_FORM_ROW_HEIGHT : height;
  const inputHeight = rawProps.multiline && rawProps.height === undefined ? undefined : denseHeight;
  const inputName =
    props.name ??
    (typeof resolvedLabel === "string"
      ? resolvedLabel
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
      : undefined);

  const { css, cx } = useClasses({
    adornmentColor,
    background,
    borderRadiuses,
    borders,
    color,
    dense,
    flex,
    fontFamily,
    fontSize,
    fontWeight,
    hasHelper,
    hasLabel,
    hasOnClick: !!onClick,
    height: inputHeight,
    helperText,
    helperTextProps,
    margins: hasLabel ? {} : margins,
    minWidth,
    noFade,
    padding,
    textAlign,
    textColor,
    width,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue?.(event.target.value);
    onChange?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.stopPropagation();
    onKeyDown?.(event);
    if (event.defaultPrevented || event.key !== "Enter" || event.shiftKey) return;
    event.preventDefault();
    onEnter?.();
  };

  return (
    <HeaderWrapper
      ref={ref}
      flex={flex}
      header={resolvedLabel}
      headerProps={resolvedLabelProps}
      margins={hasLabel ? margins : undefined}
      overflow="initial"
      textProps={labelTextProps}
      width={width}
    >
      <TextField
        {...props}
        id={props.id ?? inputName}
        name={inputName}
        onChange={handleChange}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        value={value}
        variant={variant}
        helperText={
          !helperText ? undefined : typeof helperText === "string" ? (
            <Text color={helperTextProps.color ?? color} {...helperTextProps}>
              {helperText}
            </Text>
          ) : (
            helperText
          )
        }
        FormHelperTextProps={{ component: "div" }}
        inputProps={{
          title: typeof value === "string" ? value : undefined,
          ...inputProps,
          maxLength,
          value: value ?? "",
        }}
        InputProps={{
          endAdornment:
            adornmentPosition === "end" && adornment ? (
              <InputAdornment position="end">
                {typeof adornment === "string" ? (
                  <Text fontSize="0.9em" color={adornmentColor}>
                    {adornment}
                  </Text>
                ) : (
                  adornment
                )}
              </InputAdornment>
            ) : null,
          startAdornment: adornmentPosition === "start" ? adornment : null,
          ...props.InputProps,
        }}
        size="small"
        className={cx(css.input, className)}
        aria-label="input"
      >
        {children}
      </TextField>
    </HeaderWrapper>
  );
});

interface ClassesProps extends NonNullable<
  Pick<
    InputProps,
    | "adornmentColor"
    | "background"
    | "borderRadiuses"
    | "borders"
    | "color"
    | "dense"
    | "flex"
    | "fontFamily"
    | "fontSize"
    | "fontWeight"
    | "hasHelper"
    | "height"
    | "helperText"
    | "helperTextProps"
    | "margins"
    | "minWidth"
    | "noFade"
    | "padding"
    | "textAlign"
    | "textColor"
    | "width"
  >
> {
  hasLabel: boolean;
  hasOnClick: boolean;
}

const useClasses = makeClasses((props: ClassesProps) => ({
  input: {
    flex: props.flex,
    ...makeMargins({
      ...props.margins,
      bottom: props.margins?.bottom ?? (props.hasHelper && !props.helperText ? "1.3rem" : 0),
    }),
    minWidth: props.minWidth,
    width: "100%",
    "& input, & textarea": {
      ...makePadding({
        ...props.padding,
        all: props.padding.all ?? (props.dense ? DENSE_INPUT_PADDING : undefined),
      }),
      color: props.textColor,
      cursor: props.hasOnClick ? "pointer" : undefined,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      height: "100%",
      textAlign: props.textAlign,
      "&.Mui-disabled": {
        color: props.textColor,
        cursor: "not-allowed",
        WebkitTextFillColor: props.textColor,
      },
    },
    "& .MuiInputAdornment-root svg": {
      color: props.adornmentColor,
    },
    "& .MuiTypography-root": {
      display: "inline-grid",
      width: "100%",
      textAlign: props.textAlign,
    },
    "& .MuiOutlinedInput-root": {
      background: props.background,
      minHeight: 0,
      height: props.height,
      "&.Mui-disabled": {
        cursor: "not-allowed",
        opacity: props.noFade ? 1 : 0.5,
      },
      "& fieldset": {
        transition: "all 200ms ease-in-out",
        borderColor: props.color,
        borderStyle: "dotted",
        ...makeBorders(props.borders),
        ...makeBorderRadiuses(
          deepMerge(props.hasLabel ? { top: 0 } : {}, props.borderRadiuses ?? {}),
        ),
      },
      "&:hover fieldset": {
        borderColor: props.color ? Color(props.color).lighten(0.3).toString() : undefined,
      },
      "&.Mui-focused fieldset, &.Mui-disabled fieldset": {
        borderColor: props.color,
      },
    },
    "& .MuiSelect-select": {
      fontFamily: props.fontFamily,
      fontSize: props.fontSize ?? "0.9em",
      padding: props.dense ? DENSE_INPUT_PADDING : undefined,
    },
    "& .MuiInputBase-inputMultiline": {
      padding: 0,
    },
    "& .MuiFormHelperText-root": {
      margin: "0.3rem 0 0 0",
      color: props.helperTextProps?.color ?? props.color,
      fontSize: "0.75em",
      lineHeight: 1.5,
      textAlign: props.textAlign,
    },
  },
}));

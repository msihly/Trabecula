import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  FilterOptionsState,
  MenuItem,
} from "@mui/material";
import Color from "color";
import { HeaderWrapper, Icon, Input, InputProps, Text, TextProps } from "trabecula/components";
import { CSS, CssColor, makeClasses, useElementResize } from "trabecula/utils/client";
import { deepMerge, DENSE_FORM_ROW_HEIGHT } from "trabecula/utils/common";
import { DEFAULT_INPUT_HEADER_PROPS, DENSE_INPUT_PADDING } from "./input";

export type DropdownOption<T = string> = {
  label: string;
  value: T;
};

export interface DropdownProps<T = string> extends Omit<
  InputProps,
  "header" | "label" | "setValue" | "value"
> {
  autoHighlight?: boolean;
  autoSelect?: boolean;
  borderColor?: CssColor;
  caretColor?: CssColor;
  caretSize?: string | number;
  freeSolo?: boolean;
  header?: ReactNode;
  inputFontSize?: CSS["fontSize"];
  inputFontWeight?: CSS["fontWeight"];
  inputHeight?: CSS["height"];
  inputLineHeight?: CSS["lineHeight"];
  inputOutlineWidth?: CSS["borderWidth"];
  inputPadding?: CSS["padding"];
  inputRootAlignItems?: CSS["alignItems"];
  inputRootHeight?: CSS["height"];
  inputRootMinHeight?: CSS["minHeight"];
  inputRootPadding?: CSS["padding"];
  itemBgColor?: CssColor;
  label?: ReactNode;
  listboxBorder?: CSS["border"];
  listboxBorderRadius?: CSS["borderRadius"];
  menuItemBorder?: CSS["borderBottom"];
  menuItemMinHeight?: CSS["minHeight"];
  menuItemPadding?: CSS["padding"];
  menuItemSelectedBgColor?: CssColor;
  optionTextProps?: Partial<TextProps>;
  options: DropdownOption<T>[];
  paperBorder?: CSS["border"];
  paperBorderRadius?: CSS["borderRadius"];
  setValue: (value: T | undefined) => void;
  textColor?: CssColor;
  value: T;
  withClearButton?: boolean;
  withValueTest?: boolean;
}

export function Dropdown<T = string>({
  autoHighlight = true,
  autoSelect = false,
  borderColor,
  caretColor,
  caretSize = "1.4rem",
  dense = false,
  disabled,
  freeSolo = false,
  header,
  headerProps,
  inputFontSize,
  inputFontWeight,
  inputHeight,
  inputLineHeight,
  inputOutlineWidth,
  inputPadding,
  inputProps,
  inputRootAlignItems,
  inputRootHeight,
  inputRootMinHeight,
  inputRootPadding,
  InputProps,
  itemBgColor,
  label,
  labelProps,
  labelTextProps,
  listboxBorder,
  listboxBorderRadius,
  menuItemBorder,
  menuItemMinHeight,
  menuItemPadding,
  menuItemSelectedBgColor,
  optionTextProps,
  options,
  paperBorder,
  paperBorderRadius,
  required,
  setValue,
  textColor,
  value,
  withClearButton = false,
  withValueTest = false,
  ...props
}: DropdownProps<T>) {
  const { css, cx } = useClasses({
    dense,
    inputFontSize,
    inputFontWeight,
    inputHeight,
    inputLineHeight,
    inputOutlineWidth,
    inputPadding,
    inputRootAlignItems,
    inputRootHeight:
      dense && inputRootHeight === undefined && props.height === undefined
        ? DENSE_FORM_ROW_HEIGHT
        : inputRootHeight,
    inputRootMinHeight,
    inputRootPadding,
    itemBgColor,
    listboxBorder,
    listboxBorderRadius,
    menuItemBorder,
    menuItemMinHeight,
    menuItemPadding,
    menuItemSelectedBgColor,
    paperBorder,
    paperBorderRadius,
    textColor,
  });

  const resolvedLabel = label ?? header;
  const resolvedHeader =
    typeof resolvedLabel === "string" && required ? `${resolvedLabel} *` : resolvedLabel;
  const [valueOption, setValueOption] = useState<DropdownOption<T> | null>(null);
  const committedLabel =
    value === ""
      ? ""
      : (options.find((option) => option.value === value)?.label ??
        (freeSolo && typeof value === "string" ? value : ""));
  const [inputValue, setInputValue] = useState(committedLabel);
  const isTypingRef = useRef(false);

  useEffect(() => {
    const matched =
      value === "" ? null : (options.find((option) => option.value === value) ?? null);
    setValueOption(matched);
    if (!isTypingRef.current)
      setInputValue(matched?.label ?? (freeSolo && typeof value === "string" ? value : ""));
  }, [freeSolo, options, value]);

  const filterOptions = (
    availableOptions: DropdownOption<T>[],
    state: FilterOptionsState<DropdownOption<T>>,
  ) => {
    if (!state.inputValue || !isTypingRef.current) return availableOptions;

    const searchString = state.inputValue.trim().toLowerCase();
    const searchTerms = searchString.split(" ");
    const joinedTerms = searchTerms.join(" ");
    const scoreOption = (option: DropdownOption<T>) => {
      const optionLabel = option.label.toLowerCase();
      if (optionLabel === searchString) return 100;
      if (optionLabel.startsWith(searchString)) return 50;
      if (optionLabel.includes(joinedTerms)) return 25;
      return 10;
    };

    return availableOptions
      .filter((option) => {
        const labelMatches = option.label.toLowerCase().includes(searchString);
        const valueMatches =
          withValueTest && typeof option.value === "string"
            ? option.value.toLowerCase().includes(searchString)
            : false;
        return labelMatches || valueMatches;
      })
      .map((option) => ({ option, score: scoreOption(option) }))
      .sort((a, b) => b.score - a.score)
      .map(({ option }) => option);
  };

  const handleChange = (_: unknown, newValue: DropdownOption<T> | string | null) => {
    isTypingRef.current = false;
    if (typeof newValue === "string") {
      setValue(newValue as T);
      setValueOption(null);
      setInputValue(newValue);
      return;
    }

    const newValueOption = newValue?.value === "" ? null : newValue;
    setValue(newValue?.value);
    setValueOption(newValueOption);
    setInputValue(newValueOption?.label ?? "");
  };

  const handleInputChange = (_: unknown, newInputValue: string, reason: string) => {
    if (reason !== "input") return;
    isTypingRef.current = true;
    setInputValue(newInputValue);
    if (freeSolo) setValue(newInputValue as T);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    inputProps?.onKeyDown?.(event);
    if (event.defaultPrevented || !freeSolo || event.key !== "Enter") return;
    event.preventDefault();
    event.stopPropagation();
    isTypingRef.current = false;
    setValue(inputValue as T);
    setValueOption(null);
    setInputValue(inputValue);
  };

  const handleClose = (_: unknown, reason: string) => {
    if (reason !== "blur" && reason !== "escape") return;
    isTypingRef.current = false;
    if (!freeSolo) setInputValue(valueOption?.label ?? "");
  };

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <Input
      {...props}
      {...params}
      className={cx(css.input, props.className)}
      color={borderColor ?? props.color}
      dense={dense}
      InputProps={{ ...params.InputProps, ...InputProps }}
      inputProps={{
        ...params.inputProps,
        title: inputValue,
        ...inputProps,
        onKeyDown: handleInputKeyDown,
      }}
      required={required}
      value={params.inputProps.value as string}
    />
  );

  const renderOption = (itemProps: HTMLAttributes<HTMLLIElement>, option: DropdownOption<T>) => (
    <MenuItem
      {...itemProps}
      key={String(option.value)}
      className={cx(itemProps.className, css.menuItem)}
      title={option.label}
    >
      <Text {...optionTextProps}>{option.label}</Text>
    </MenuItem>
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const { width: inputWidth } = useElementResize(containerRef);

  return (
    <HeaderWrapper
      ref={containerRef}
      header={resolvedHeader}
      headerProps={deepMerge(DEFAULT_INPUT_HEADER_PROPS, labelProps ?? headerProps ?? {})}
      overflow="initial"
      textProps={labelTextProps}
      width={props.width ?? "100%"}
    >
      <Autocomplete<DropdownOption<T>, false, boolean, boolean>
        autoHighlight={autoHighlight}
        autoSelect={autoSelect}
        componentsProps={{
          paper: {
            className: css.paper,
            sx: {
              maxWidth: props.width || inputWidth,
              minWidth: props.width || inputWidth,
            },
          },
        }}
        disableClearable={!withClearButton}
        disabled={disabled}
        filterOptions={filterOptions}
        freeSolo={freeSolo}
        fullWidth
        inputValue={inputValue}
        ListboxProps={{ className: css.listbox }}
        onChange={handleChange}
        onClose={handleClose}
        onInputChange={handleInputChange}
        options={options}
        popupIcon={<Icon name="ArrowDropDown" color={caretColor} size={caretSize} />}
        renderInput={renderInput}
        renderOption={renderOption}
        selectOnFocus={false}
        size="small"
        value={valueOption}
      />
    </HeaderWrapper>
  );
}

interface ClassesProps extends Pick<
  DropdownProps,
  | "dense"
  | "inputFontSize"
  | "inputFontWeight"
  | "inputHeight"
  | "inputLineHeight"
  | "inputOutlineWidth"
  | "inputPadding"
  | "inputRootAlignItems"
  | "inputRootHeight"
  | "inputRootMinHeight"
  | "inputRootPadding"
  | "itemBgColor"
  | "listboxBorder"
  | "listboxBorderRadius"
  | "menuItemBorder"
  | "menuItemMinHeight"
  | "menuItemPadding"
  | "menuItemSelectedBgColor"
  | "paperBorder"
  | "paperBorderRadius"
  | "textColor"
> {}

const useClasses = makeClasses((props: ClassesProps) => {
  const inputPadding = props.inputPadding ?? (props.dense ? DENSE_INPUT_PADDING : undefined);

  return {
    input: {
      "& input": {
        fontSize: props.inputFontSize,
        fontWeight: props.inputFontWeight,
        height: props.inputHeight,
        lineHeight: props.inputLineHeight,
        padding: inputPadding,
      },
      "& .MuiInputBase-input.MuiAutocomplete-input, & .MuiAutocomplete-inputRoot .MuiAutocomplete-input":
        {
          boxSizing: "border-box",
          height: props.inputHeight,
          lineHeight: props.inputLineHeight,
          padding: inputPadding,
        },
      "& .MuiOutlinedInput-root": {
        alignItems: props.inputRootAlignItems,
        boxSizing: "border-box",
        minHeight: props.inputRootMinHeight,
        height: props.inputRootHeight,
        padding: props.inputRootPadding,
        "& fieldset": {
          borderWidth: props.inputOutlineWidth,
        },
        "&:hover fieldset, &.Mui-focused fieldset": {
          borderWidth: props.inputOutlineWidth,
        },
      },
    },
    listbox: {
      padding: 0,
      border: props.listboxBorder,
      borderRadius: props.listboxBorderRadius,
    },
    menuItem: {
      alignItems: "center",
      justifyContent: "flex-start",
      minHeight: props.menuItemMinHeight,
      padding: props.menuItemPadding,
      whiteSpace: "normal",
      color: props.textColor,
      backgroundColor: props.itemBgColor,
      "&.Mui-focused, &.Mui-focusVisible, &[aria-selected='true'], &.Mui-focused[aria-selected='true']":
        {
          backgroundColor: props.menuItemSelectedBgColor,
        },
      "&:hover": {
        backgroundColor: props.itemBgColor
          ? Color(props.itemBgColor).lighten(0.05).hex()
          : undefined,
      },
      "&:not(:last-of-type)": {
        borderBottom: props.menuItemBorder,
      },
    },
    paper: {
      border: props.paperBorder,
      borderRadius: props.paperBorderRadius,
    },
  };
});

import { SyntheticEvent } from "react";
import {
  Autocomplete,
  AutocompleteInputChangeReason,
  AutocompleteProps as MuiAutocompleteProps,
  createFilterOptions,
} from "@mui/material";
import { Comp, Input, InputProps } from "trabecula/components";

export type AutoCompleteOption = {
  label: string;
  value: any;
};

export const createAutoCompleteOptions = (values: any[]): AutoCompleteOption[] =>
  Array.isArray(values) ? values.map((v) => ({ label: String(v), value: v })) : [];

export interface AutoCompleteProps extends Omit<
  MuiAutocompleteProps<any, any, any, any>,
  "fullWidth" | "onChange" | "options" | "renderInput"
> {
  inputProps?: InputProps;
  header?: InputProps["header"];
  onChange?: (val: any) => any;
  options: AutoCompleteOption[];
  required?: boolean;
}

export const AutoComplete = Comp(
  ({
    className,
    freeSolo,
    header,
    inputProps = {},
    onChange,
    options,
    required = false,
    value,
    ...props
  }: AutoCompleteProps) => {
    const handleChange = (
      _: SyntheticEvent<Element, Event>,
      val: string,
      reason: AutocompleteInputChangeReason,
    ) => {
      if (val === "" && reason === "reset") return;
      onChange?.(val ?? "");
    };

    return (
      <Autocomplete
        {...props}
        autoComplete
        autoHighlight={props.autoHighlight ?? true}
        freeSolo={freeSolo}
        options={options.map((o) => o.label)}
        filterOptions={createFilterOptions({ ignoreCase: true, ignoreAccents: true })}
        inputValue={value}
        onInputChange={handleChange}
        renderInput={(params) => (
          <Input
            {...params}
            variant="outlined"
            header={header}
            required={required}
            value={value}
            {...inputProps}
          />
        )}
        size="small"
        fullWidth
        className={className}
      />
    );
  },
);

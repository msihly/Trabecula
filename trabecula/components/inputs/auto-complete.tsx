import { RefAttributes } from "react";
import { Autocomplete, AutocompleteProps as MuiAutocompleteProps } from "@mui/material";
import { Comp, DropdownOption, Input, InputProps } from "trabecula/components";

export type AutoCompleteOption = DropdownOption<any>;

export const createAutoCompleteOptions = (values: any[]): AutoCompleteOption[] =>
  Array.isArray(values) ? values.map((v) => ({ label: String(v), value: v })) : [];

export interface AutoCompleteProps<
  Option = AutoCompleteOption,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false,
> extends Omit<MuiAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>, "renderInput"> {
  header?: InputProps["header"];
  inputProps?: InputProps;
  renderInput?: MuiAutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>["renderInput"];
  required?: boolean;
}

export const AutoComplete = Comp(
  (
    {
      header,
      inputProps = {},
      renderInput,
      required = false,
      ...props
    }: AutoCompleteProps<unknown, boolean, boolean, boolean>,
    ref,
  ) => {
    return (
      <Autocomplete
        autoComplete
        autoHighlight
        fullWidth
        size="small"
        {...props}
        ref={ref}
        renderInput={
          renderInput ??
          ((params) => (
            <Input
              header={header}
              required={required}
              variant="outlined"
              {...inputProps}
              {...params}
              inputProps={{ ...inputProps.inputProps, ...params.inputProps }}
              InputProps={{ ...inputProps.InputProps, ...params.InputProps }}
              stopKeyPropagation={false}
              value={params.inputProps.value as string}
            />
          ))
        }
      />
    );
  },
) as <
  Option = AutoCompleteOption,
  Multiple extends boolean = false,
  DisableClearable extends boolean = false,
  FreeSolo extends boolean = false,
>(
  props: AutoCompleteProps<Option, Multiple, DisableClearable, FreeSolo> &
    RefAttributes<HTMLDivElement>,
) => JSX.Element;

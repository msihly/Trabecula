import { RefAttributes } from "react";
import { Autocomplete, AutocompleteProps as MuiAutocompleteProps } from "@mui/material";
import { Comp, DropdownOption, Input, InputProps } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";

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
    const { css, cx } = useClasses(null);

    return (
      <Autocomplete
        autoComplete
        autoHighlight
        fullWidth
        size="small"
        {...props}
        classes={{
          ...props.classes,
          listbox: cx(css.listbox, props.classes?.listbox),
          paper: cx(css.paper, props.classes?.paper),
        }}
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
              slotProps={{
                ...inputProps.slotProps,
                ...params.slotProps,
                htmlInput: { ...inputProps.slotProps?.htmlInput, ...params.slotProps.htmlInput },
                input: { ...inputProps.slotProps?.input, ...params.slotProps.input },
              }}
              stopKeyPropagation={false}
              value={params.slotProps.htmlInput.value as string}
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
) => React.JSX.Element;

const useClasses = makeClasses({
  // Results fill the popup, without bands of its color above and below them.
  listbox: {
    padding: 0,
  },
  // The menu color, in place of the paper's darker default and its elevation overlay.
  paper: {
    backgroundColor: colors.overlay,
    backgroundImage: "none",
  },
});

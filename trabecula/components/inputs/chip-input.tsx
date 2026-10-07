import { ComponentProps, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Autocomplete, Chip, createFilterOptions } from "@mui/material";
import { Comp } from "trabecula/components/comp";
import { colors, makeClasses } from "trabecula/utils/client";
import { DropdownOption, Input } from ".";

const filterOptions = createFilterOptions({ limit: 100, matchFrom: "start" });

export type ChipOption = DropdownOption<any>;

export type ChipInputProps = Omit<
  ComponentProps<typeof Autocomplete>,
  "renderInput" | "onChange" | "options"
> & {
  opaque?: boolean;
  options?: ChipOption[];
  setValue?: (val: any) => void;
  value: ChipOption[];
};

export const ChipInput = Comp(
  ({ className, opaque = false, options = [], setValue, value = [], ...props }: ChipInputProps) => {
    const { css, cx } = useClasses({ opaque });

    const [inputValue, setInputValue] = useState("");

    const handleChange = (_, val: ChipOption[] | string[]) => {
      setValue?.(
        val.map((v: ChipOption | string) => (typeof v === "string" ? { label: v, value: v } : v)),
      );
      setInputValue("");
    };

    return (
      <Autocomplete
        options={options}
        value={value}
        getOptionLabel={(option: ChipOption) => option.label}
        renderInput={(params) => (
          <Input
            {...params}
            value={inputValue}
            setValue={setInputValue}
            className={cx(css.input, className)}
          />
        )}
        renderTags={(val: ChipOption[], getTagProps) =>
          val.map((option: ChipOption, index) => (
            <Chip {...getTagProps({ index })} key={index} label={option.label} />
          ))
        }
        onChange={handleChange}
        isOptionEqualToValue={(option: ChipOption, val: ChipOption) => option.value === val.value}
        filterOptions={filterOptions}
        size="small"
        freeSolo
        autoSelect
        forcePopupIcon={false}
        clearOnBlur={false}
        disableClearable
        multiple
        {...props}
      />
    );
  },
);

interface ClassesProps extends Pick<ChipInputProps, "opaque"> {}

const useClasses = makeClasses((props: ClassesProps) => ({
  input: {
    backgroundColor: props.opaque ? colors.mui.grey["800"] : "transparent",
  },
}));

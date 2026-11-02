import type { KeyboardEvent } from "react";
import { PickersTextField, PickersTextFieldProps } from "@mui/x-date-pickers/PickersTextField";
import { HeaderWrapper, HeaderWrapperProps } from "trabecula/components";
import {
  BorderRadiuses,
  colors,
  CSS,
  makeBorderRadiuses,
  makeClasses,
} from "trabecula/utils/client";
import { deepMerge, FORM_ROW_HEIGHT } from "trabecula/utils/common";
import { DEFAULT_INPUT_HEADER_PROPS } from "./input";

export type PickerFieldProps = PickersTextFieldProps & {
  borderRadiuses?: BorderRadiuses;
  header?: HeaderWrapperProps["header"];
  headerProps?: HeaderWrapperProps["headerProps"];
  width?: CSS["width"];
};

/** The text field of the date and time pickers, styled like Input. */
export const PickerField = ({
  borderRadiuses,
  className,
  header,
  headerProps = {},
  onKeyDown,
  width = "100%",
  ...props
}: PickerFieldProps) => {
  const { css, cx } = useClasses({ borderRadiuses, hasHeader: !!header });

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onKeyDown?.(event);
  };

  return (
    <HeaderWrapper
      header={header}
      headerProps={deepMerge(DEFAULT_INPUT_HEADER_PROPS, headerProps)}
      overflow="initial"
      width={width}
    >
      <PickersTextField
        {...props}
        onKeyDown={handleKeyDown}
        size="small"
        className={cx(css.field, className)}
      />
    </HeaderWrapper>
  );
};

interface ClassesProps extends Pick<PickerFieldProps, "borderRadiuses"> {
  hasHeader: boolean;
}

const useClasses = makeClasses((props: ClassesProps) => ({
  field: {
    width: "100%",
    "& .MuiInputAdornment-root svg": {
      color: colors.custom.grey,
    },
    "& .MuiPickersOutlinedInput-root": {
      background: "rgb(0 0 0 / 0.2)",
      height: FORM_ROW_HEIGHT,
      paddingLeft: "0.5rem",
      "& fieldset": {
        transition: "all 200ms ease-in-out",
        borderStyle: "dotted",
        ...makeBorderRadiuses(
          deepMerge(props.hasHeader ? { top: 0 } : {}, props.borderRadiuses ?? {}),
        ),
      },
      // Picker outlines turn solid on focus, while Input's stay dotted.
      "&.Mui-focused fieldset": {
        borderStyle: "dotted",
      },
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem",
    },
  },
}));

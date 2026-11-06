import {
  Comp,
  DateInput,
  DateInputProps,
  HeaderWrapperProps,
  RangeWrapper,
} from "trabecula/components";

export interface DateRangeProps {
  dateInputProps?: Partial<DateInputProps>;
  endDate: string;
  header?: HeaderWrapperProps["header"];
  headerProps?: HeaderWrapperProps["headerProps"];
  setEndDate: (val: string) => void;
  setStartDate: (val: string) => void;
  startDate: string;
}

export const DateRange = Comp(
  ({
    dateInputProps = {},
    endDate,
    header,
    headerProps,
    setEndDate,
    setStartDate,
    startDate,
  }: DateRangeProps) => {
    // The dates split the range evenly, shrinking past the date pickers' fixed 182px field width.
    const viewProps = { flex: 1, minWidth: 0, ...dateInputProps.viewProps };

    return (
      <RangeWrapper
        header={header}
        headerProps={headerProps}
        startInput={
          <DateInput
            {...dateInputProps}
            value={startDate}
            setValue={setStartDate}
            inputProps={{ borderRadiuses: { top: 0, right: 0 } }}
            viewProps={viewProps}
          />
        }
        endInput={
          <DateInput
            {...dateInputProps}
            value={endDate}
            setValue={setEndDate}
            inputProps={{ borderRadiuses: { top: 0, left: 0 } }}
            viewProps={viewProps}
          />
        }
      />
    );
  },
);

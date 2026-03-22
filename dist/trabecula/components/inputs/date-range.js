import { DateInput, RangeWrapper } from "trabecula/components";
export const DateRange = ({ dateInputProps = {}, endDate, header, headerProps, setEndDate, setStartDate, startDate, }) => {
    return (<RangeWrapper header={header} headerProps={headerProps} startInput={<DateInput {...dateInputProps} value={startDate} setValue={setStartDate} inputProps={{ borderRadiuses: { top: 0, right: 0 } }}/>} endInput={<DateInput {...dateInputProps} value={endDate} setValue={setEndDate} inputProps={{ borderRadiuses: { top: 0, left: 0 } }}/>}/>);
};

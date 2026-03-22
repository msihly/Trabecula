import { NumInput, RangeWrapper } from "trabecula/components";
export const NumRange = ({ hasHelper = false, header, headerProps, max, min, numInputProps = {}, setMax, setMin, }) => {
    return (<RangeWrapper header={header} headerProps={headerProps} startInput={<NumInput {...numInputProps} {...{ hasHelper }} value={min} setValue={setMin} placeholder="Min" textAlign="center" borderRadiuses={{ top: 0, right: 0 }}/>} endInput={<NumInput {...numInputProps} {...{ hasHelper }} value={max} setValue={setMax} placeholder="Max" textAlign="center" borderRadiuses={{ top: 0, left: 0 }}/>}/>);
};

import { Dropdown, HeaderWrapper, NumInput, } from "trabecula/components";
import { LOGICAL_OPS } from "trabecula/utils/common";
const LOG_OPS_OPTS = [
    { label: "Any", value: "" },
    ...LOGICAL_OPS.map((op) => ({ label: op, value: op })),
];
export const LogOpsInput = ({ dropdownProps = {}, header, headerProps, logOpValue, numInputProps, numValue, numValueDisplay, setLogOpValue, setNumValue, setNumValueDisplay, ...props }) => {
    return (<HeaderWrapper row overflow="hidden" {...{ header, headerProps }} {...props}>
      <Dropdown value={logOpValue} setValue={setLogOpValue} options={LOG_OPS_OPTS} minWidth="3.7em" borderRadiuses={{ top: 0, right: 0 }} textAlign="center" {...dropdownProps}/>

      <NumInput value={numValue} valueDisplay={numValueDisplay} setValue={setNumValue} setValueDisplay={setNumValueDisplay} disabled={logOpValue === ""} width="100%" textAlign="center" hasHelper={false} borderRadiuses={{ top: 0, left: 0 }} {...numInputProps}/>
    </HeaderWrapper>);
};

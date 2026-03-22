import { useState } from "react";
import { Comp, HeaderWrapper, Input, View, } from "trabecula/components";
import { MultiInputList } from "./multi-input-list";
export const MultiInput = Comp(({ hasDelete = true, hasDeleteAll = false, hasHelper = false, hasList = true, header, headerProps = {}, inputProps, max, onChange, single, value = [], }, inputRef) => {
    const isMax = max > -1 && value.length >= max;
    const disabled = inputProps?.disabled || isMax;
    const [inputValue, setInputValue] = useState("");
    const onKeyDown = (e) => {
        if (e.key === "Enter" && !isMax) {
            e.preventDefault();
            if (!value.includes(inputValue))
                onChange([...value, inputValue]);
            setInputValue("");
        }
    };
    const renderList = () => (<MultiInputList {...{ hasDelete, hasDeleteAll }} search={{ onChange, value }} hasInput/>);
    return (<View column height="100%" width="100%">
        {single && value.length > 0 ? (<HeaderWrapper {...{ header, headerProps }}>{renderList()}</HeaderWrapper>) : (<>
            <Input {...{ disabled, hasHelper, header, headerProps }} {...inputProps} onKeyDown={onKeyDown} ref={inputRef} value={inputValue} setValue={setInputValue} borderRadiuses={{ bottom: !single && hasList ? 0 : undefined }}/>

            {!single && hasList && renderList()}
          </>)}
      </View>);
});

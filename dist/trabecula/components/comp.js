import { forwardRef } from "react";
import { observer } from "mobx-react-lite";
export function Comp(component) {
    const Wrapped = forwardRef(component);
    return observer(Wrapped);
}

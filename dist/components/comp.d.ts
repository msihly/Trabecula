import { ForwardRefExoticComponent, PropsWithoutRef, Ref, RefAttributes } from "react";
type Forwarded<P, R> = (props: P, ref: Ref<R>) => JSX.Element;
export declare function Comp<P, R = HTMLDivElement>(component: Forwarded<P, R>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<R>>;
export {};

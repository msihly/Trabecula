import { forwardRef, ForwardRefExoticComponent, PropsWithoutRef, Ref, RefAttributes } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { observer } from "mobx-react-lite";

type Forwarded<P, R> = (props: P, ref: Ref<R>) => JSX.Element;

export function Comp<P, R = HTMLDivElement>(
  component: Forwarded<P, R>,
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<R>> {
  // Components never declare a `ref` prop, so the props forwardRef passes are their own props.
  const Wrapped = forwardRef<R, P>((props, ref) => component(props as P, ref));

  return observer(Wrapped);
}

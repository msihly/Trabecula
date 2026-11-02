import { forwardRef, ForwardRefExoticComponent, PropsWithoutRef, Ref, RefAttributes } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { observer } from "mobx-react-lite";

type Forwarded<P, R> = (props: P, ref: Ref<R>) => React.JSX.Element;

export function Comp<P, R = HTMLDivElement>(
  component: Forwarded<P, R>,
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<R>> {
  // React strips `ref` from forwarded props; the cast only restores the component's prop type.
  const Wrapped = forwardRef<R, P>((props, ref) => component(props as P, ref));

  // observer's function component overload also matches forwarded components, which hides their
  // forwarded type; the result is still the memoized forwarded component.
  return observer(Wrapped) as ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<R>>;
}

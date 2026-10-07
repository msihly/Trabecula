interface ConditionalWrapProps {
  children: JSX.Element | JSX.Element[];
  condition: boolean;
  wrap: (children: JSX.Element | JSX.Element[]) => JSX.Element;
}

export const ConditionalWrap = ({
  children,
  condition,
  wrap,
}: ConditionalWrapProps): JSX.Element => (condition ? wrap(children) : <>{children}</>);

interface ConditionalWrapProps {
  children: React.JSX.Element | React.JSX.Element[];
  condition: boolean;
  wrap: (children: React.JSX.Element | React.JSX.Element[]) => React.JSX.Element;
}

export const ConditionalWrap = ({
  children,
  condition,
  wrap,
}: ConditionalWrapProps): React.JSX.Element => (condition ? wrap(children) : <>{children}</>);

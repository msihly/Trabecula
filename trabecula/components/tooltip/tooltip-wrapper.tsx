import { ConditionalWrap, Tooltip, TooltipProps } from "trabecula/components";

export interface TooltipWrapperProps {
  children: React.JSX.Element | React.JSX.Element[];
  tooltip?: TooltipProps["title"];
  tooltipProps?: Partial<TooltipProps>;
}

export const TooltipWrapper = ({ children, tooltip, tooltipProps = {} }: TooltipWrapperProps) => {
  const wrap = (c: React.JSX.Element) => (
    <Tooltip title={tooltip} {...tooltipProps}>
      {c}
    </Tooltip>
  );

  return (
    <ConditionalWrap
      wrap={wrap}
      condition={tooltip !== undefined && !(typeof tooltip === "string" && !tooltip?.length)}
    >
      {children}
    </ConditionalWrap>
  );
};

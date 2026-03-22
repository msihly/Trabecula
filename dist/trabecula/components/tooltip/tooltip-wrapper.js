import { ConditionalWrap, Tooltip } from "trabecula/components";
export const TooltipWrapper = ({ children, tooltip, tooltipProps = {} }) => {
    const wrap = (c) => (<Tooltip title={tooltip} {...tooltipProps}>
      {c}
    </Tooltip>);
    return (<ConditionalWrap wrap={wrap} condition={tooltip !== undefined && !(typeof tooltip === "string" && !tooltip?.length)}>
      {children}
    </ConditionalWrap>);
};

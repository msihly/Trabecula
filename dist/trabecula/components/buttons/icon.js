// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { IconButton as MuiIconButton } from "@mui/material";
import { Icon, TooltipWrapper, } from "trabecula/components";
import { makeClasses, makeMargins } from "trabecula/utils/client";
export const IconButton = ({ children, className, disabled, iconProps = {}, margins, name, onClick, size, tooltip, tooltipProps, ...props }) => {
    const { css, cx } = useClasses({ disabled, margins });
    return (<TooltipWrapper {...{ tooltip, tooltipProps }}>
      <MuiIconButton {...props} {...{ disabled, onClick, size }} className={cx(css.root, className)}>
        {name && <Icon {...iconProps} name={name}/>}
        {children}
      </MuiIconButton>
    </TooltipWrapper>);
};
const useClasses = makeClasses((props) => ({
    root: {
        ...makeMargins(props.margins),
        opacity: props.disabled ? 0.5 : 1,
        transition: "all 100ms ease-in-out",
    },
}));

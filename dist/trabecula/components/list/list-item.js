import { 
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
ListItem as MuiListItem, ListItemIcon, ListItemText, } from "@mui/material";
import Color from "color";
import { Icon, TooltipWrapper } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";
const DEFAULT_ICON_END_MARGINS = { left: "1em" };
const DEFAULT_ICON_MARGINS = { right: "1em" };
export const ListItem = ({ children, color, icon, iconProps, iconEnd, iconEndMargins, iconMargins, onClick, text, ...props }) => {
    iconMargins = { ...DEFAULT_ICON_MARGINS, ...iconMargins };
    iconEndMargins = { ...DEFAULT_ICON_END_MARGINS, ...iconEndMargins };
    const { css, cx } = useClasses({ color });
    return (<TooltipWrapper tooltip={children} tooltipProps={{
            arrow: false,
            bgColor: Color(colors.custom.black).fade(0.03).string(),
            classes: { tooltip: css.tooltip },
            placement: "right-start",
            PopperProps: { className: css.tooltipPopper },
        }}>
      <MuiListItem 
    // @ts-expect-error
    button={Boolean(onClick)} onClick={onClick} className={cx(css.root, props.className)} {...props}>
        {icon && (<ListItemIcon className={css.icon}>
            <Icon {...iconProps} name={icon} margins={iconMargins}/>
          </ListItemIcon>)}

        <ListItemText className={css.text}>{text}</ListItemText>

        {iconEnd && (<ListItemIcon className={css.icon}>
            <Icon name={iconEnd} margins={iconEndMargins}/>
          </ListItemIcon>)}
      </MuiListItem>
    </TooltipWrapper>);
};
const useClasses = makeClasses((props) => ({
    icon: {
        minWidth: 0,
    },
    root: {
        padding: "0.1rem 0.8rem",
        "&:not(:last-child)": {
            borderBottom: `1px solid ${colors.custom.darkGrey}`,
        },
    },
    text: {
        color: props.color,
    },
    tooltip: {
        margin: 0,
        padding: 0,
    },
    tooltipPopper: {
        marginLeft: "-0.75rem !important",
    },
}));

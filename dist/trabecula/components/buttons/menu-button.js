import { useState } from "react";
import { Menu } from "@mui/material";
import { IconButton } from "trabecula/components/buttons";
import { colors, makeClasses } from "trabecula/utils/client";
export const MenuButton = ({ bgColor = colors.background, button, children, color, icon = "MoreVert", keepMounted = true, menuWidth, ...props }) => {
    const { css } = useClasses({ bgColor, menuWidth });
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => setAnchorEl(null);
    const handleOpen = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    return (<>
      {button ? (button(handleOpen)) : (<IconButton name={icon} onClick={handleOpen} iconProps={{ color }} {...props}/>)}

      <Menu {...{ anchorEl, keepMounted }} open={Boolean(anchorEl)} onClose={handleClose} anchorOrigin={{ horizontal: "right", vertical: "bottom" }} transformOrigin={{ horizontal: "right", vertical: "top" }} className={css.menu}>
        {children}
      </Menu>
    </>);
};
const useClasses = makeClasses((props) => ({
    menu: {
        "& .MuiPaper-root": {
            background: props.bgColor,
            minWidth: props.menuWidth ?? "10rem",
            width: props.menuWidth,
        },
        "& .MuiList-root": {
            padding: "4px 0",
        },
    },
}));

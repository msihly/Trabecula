// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Chip as MuiChip } from "@mui/material";
import { Icon } from "trabecula/components";
import { makeClasses, makePadding } from "trabecula/utils/client";
export const Chip = ({ bgColor, className, color, height, icon, iconColor, iconProps, label, padding, width, ...props }) => {
    const { css, cx } = useClasses({ bgColor, color, height, padding, width });
    return (<MuiChip {...props} {...{ label }} icon={icon ? (<Icon name={icon} color={iconColor} size="inherit" margins={{ left: "0.5rem !important" }} {...iconProps}/>) : undefined} className={cx(css.chip, className)}/>);
};
const useClasses = makeClasses((props) => ({
    chip: {
        height: props.height,
        backgroundColor: props.bgColor,
        color: props.color,
        transition: "all 200ms ease-in-out",
        width: props.width,
        "& > .MuiChip-label": {
            ...makePadding(props.padding),
        },
    },
}));

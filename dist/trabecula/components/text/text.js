// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Typography } from "@mui/material";
import { TooltipWrapper } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";
const PRESETS = {
    default: {
        fontSize: "1em",
        fontWeight: 400,
        overflow: "hidden",
    },
    "detail-label": {
        color: colors.custom.lightBlue,
        fontWeight: 500,
        whiteSpace: "nowrap",
    },
    "label-glow": {
        color: colors.custom.white,
        fontSize: "0.8em",
        textAlign: "center",
        textShadow: `0 0 10px ${colors.custom.blue}`,
        overflow: "visible",
    },
    "sub-text": {
        color: colors.custom.grey,
        fontSize: "0.7em",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    title: {
        color: colors.custom.white,
        fontSize: "1.1em",
        fontWeight: 500,
        textAlign: "center",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
    },
};
export const Text = ({ children, className, color, component = "span", fontSize, fontWeight, overflow, preset = "default", tooltip, tooltipProps, ...props }) => {
    const { css, cx } = useClasses({ color, fontSize, fontWeight, overflow, preset });
    return (<TooltipWrapper {...{ tooltip, tooltipProps }}>
      <Typography {...{ component }} {...props} className={cx(css.root, className)}>
        {children}
      </Typography>
    </TooltipWrapper>);
};
const useClasses = makeClasses((props) => {
    const preset = PRESETS[props.preset];
    return {
        root: {
            ...preset,
            color: props.color ?? preset?.color,
            fontSize: props.fontSize ?? preset?.fontSize,
            fontWeight: props.fontWeight ?? preset?.fontWeight,
            overflow: props.overflow ?? preset?.overflow,
        },
    };
});

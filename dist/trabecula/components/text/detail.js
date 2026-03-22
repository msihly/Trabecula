import { Text, View } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";
export const Detail = ({ emptyValueText = "--", label, labelProps = {}, overflowX = "auto", overflowY = "hidden", row = false, tooltip, value, valueProps, withTooltip, ...props }) => {
    const { css, cx } = useClasses({ overflowX, overflowY });
    return (<View column={!row} row={row} spacing={row ? "0.5rem" : null} {...props}>
      {typeof label === "string" ? (<Text preset="detail-label" {...labelProps}>
          {label}
        </Text>) : (label)}

      {!value || typeof value === "string" ? (<Text tooltip={tooltip ?? (withTooltip ? value : undefined)} className={cx(css.value, valueProps?.className)} {...valueProps}>
          {value || emptyValueText}
        </Text>) : (value)}
    </View>);
};
const useClasses = makeClasses((props) => ({
    value: {
        overflowX: props.overflowX,
        overflowY: props.overflowY,
        whiteSpace: "nowrap",
    },
}));

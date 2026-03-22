import { Button, Text, View } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";
import { CONSTANTS } from "trabecula/utils/common";
export const MULTI_INPUT_ROW_HEIGHT = 35;
export const MultiInputRow = ({ bgColor, ...props }) => {
    bgColor = bgColor || colors.foreground;
    const hasClick = !!props.onClick;
    const { css } = useClasses({ bgColor, hasClick });
    const value = props.valueExtractor?.(props.value) ?? props.value;
    const handleClick = () => props.onClick?.(props.value);
    const handleDelete = () => props.search.onChange(props.search.value.filter((v) => (props.valueExtractor?.(v) ?? v) !== value));
    return (<View row className={css.root} style={props.style}>
      {props.leftNode}

      <View onClick={hasClick ? handleClick : null} row flex={1} overflow="hidden" padding={{ all: "0 0.3rem" }}>
        <Text tooltip={value} tooltipProps={{
            enterDelay: CONSTANTS.TOOLTIP.ENTER_DELAY,
            enterNextDelay: CONSTANTS.TOOLTIP.ENTER_NEXT_DELAY,
            flexShrink: 1,
        }} className={css.label}>
          {value}
        </Text>
      </View>

      {props.rightNode}

      {props.hasDelete && (<Button onClick={handleDelete} icon="Close" color="transparent" colorOnHover={colors.custom.red} boxShadow="none"/>)}
    </View>);
};
const useClasses = makeClasses((props) => ({
    label: {
        padding: "0 0.3rem",
        fontSize: "0.8em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    root: {
        alignItems: "center",
        borderBottom: `1px solid ${colors.custom.black}`,
        height: MULTI_INPUT_ROW_HEIGHT,
        width: "100%",
        backgroundColor: props.bgColor,
        cursor: props.hasClick ? "pointer" : undefined,
    },
}));

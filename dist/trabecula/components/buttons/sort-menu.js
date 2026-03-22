import { Button, Icon, Text, View } from "trabecula/components";
import { MenuButton, SortRow } from "trabecula/components/buttons";
import { colors, makeBorderRadiuses, makeClasses } from "trabecula/utils/client";
export const SortMenu = ({ color = colors.custom.black, hasHeader, rows, setValue, value, width = "fit-content", ...buttonProps }) => {
    const { css, cx } = useClasses({ hasHeader, width });
    const activeRow = rows.find(({ attribute }) => attribute === value?.key);
    const renderButton = (onOpen) => (<Button onClick={onOpen} color={color} justify="space-between" padding={{ left: "0.5em", right: "0.5em" }} className={cx(css.button, buttonProps?.className)} {...buttonProps}>
      <View row>
        <Icon name="Sort" size="1.15em"/>

        <View column align="flex-start" margins={{ left: "0.5em", right: "0.5em" }}>
          <Text className={css.topText}>{"Sort By"}</Text>

          <Text className={css.label}>{activeRow?.label}</Text>
        </View>
      </View>

      <Icon name={value?.isDesc ? "ArrowDownward" : "ArrowUpward"} size="1.15em"/>
    </Button>);
    return (<MenuButton button={renderButton}>
      <View column>
        {rows.map((rowProps) => (<SortRow {...rowProps} {...{ setValue, value }} key={rowProps.attribute}/>))}
      </View>
    </MenuButton>);
};
const useClasses = makeClasses((props) => ({
    button: {
        ...makeBorderRadiuses({ all: "0.3rem", ...(props.hasHeader ? { top: 0 } : {}) }),
        height: "inherit",
        width: props.width,
        boxShadow: "none",
    },
    label: {
        fontSize: "0.9em",
        lineHeight: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        textAlign: "left",
        whiteSpace: "nowrap",
    },
    topText: {
        color: colors.custom.lightGrey,
        fontSize: "0.7em",
        fontWeight: 600,
        lineHeight: 1,
    },
}));

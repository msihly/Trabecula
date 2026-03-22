import { Icon, IconButton, Text, View, } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";
export const SortRow = ({ attribute, label, icon, iconProps = {}, setValue, value, }) => {
    const { css } = useClasses(null);
    return (<View className={css.row}>
      <Icon name={icon} {...iconProps}/>
      <Text className={css.label}>{label}</Text>
      <SortButton {...{ attribute, setValue, value }} isDesc/>
      <SortButton {...{ attribute, setValue, value }}/>
    </View>);
};
const SortButton = ({ attribute, isDesc = false, setValue, value }) => {
    const isActive = attribute === value?.key && isDesc === value?.isDesc;
    const color = isActive ? colors.custom.blue : colors.custom.lightGrey;
    const updateSort = () => setValue({ key: attribute, isDesc });
    return (<IconButton name={isDesc ? "ArrowDownward" : "ArrowUpward"} onClick={updateSort} iconProps={{ color }} margins={{ left: "0.5rem" }} size="small"/>);
};
const useClasses = makeClasses({
    label: {
        flex: 1,
        whiteSpace: "nowrap",
        padding: "0 0.5rem",
    },
    row: {
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        padding: "0.5rem 0.8rem",
    },
});

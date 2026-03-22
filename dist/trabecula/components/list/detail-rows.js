import { Text, View } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";
export const DetailRows = ({ labelWidth = "8rem", rows }) => {
    const { css } = useClasses({ labelWidth });
    return (<View className={css.table}>
      {rows.map(({ label, value }, i) => (<View key={`${i}-${label}`} className={css.row}>
          {typeof label === "string" ? <Text className={css.label}>{label}</Text> : label}
          {typeof value === "string" ? (<Text noWrap tooltip={value}>
              {value}
            </Text>) : (value)}
        </View>))}
    </View>);
};
const useClasses = makeClasses((props) => ({
    label: {
        flexShrink: 0,
        marginRight: "1rem",
        width: props.labelWidth,
        color: colors.custom.blue,
        fontWeight: "bold",
        whiteSpace: "nowrap",
    },
    row: {
        display: "flex",
        flexFlow: "row nowrap",
    },
    table: {
        display: "flex",
        flexFlow: "column nowrap",
        padding: "0.5rem",
    },
}));

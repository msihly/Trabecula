import { HeaderWrapper, Text, View } from "trabecula/components";
import { colors } from "trabecula/utils/client";
export const RangeWrapper = (props) => {
    return (<HeaderWrapper row header={props.header} headerProps={props.headerProps}>
      {props.startInput}

      <View column justify="center" bgColor="rgb(0 0 0 / 0.2)" padding={{ all: "0 0.4rem" }} borders={{
            top: `1px dotted ${colors.custom.grey}`,
            bottom: `1px dotted ${colors.custom.grey}`,
        }}>
        <Text flexShrink={0} fontSize="0.8em" fontWeight={600}>
          {"—"}
        </Text>
      </View>

      {props.endInput}
    </HeaderWrapper>);
};

import { Comp, HeaderWrapper, HeaderWrapperProps, Text, View } from "trabecula/components";
import { colors } from "trabecula/utils/client";

export type RangeWrapperProps = {
  endInput: React.JSX.Element;
  header?: HeaderWrapperProps["header"];
  headerProps?: HeaderWrapperProps["headerProps"];
  startInput: React.JSX.Element;
};

export const RangeWrapper = Comp((props: RangeWrapperProps) => {
  return (
    <HeaderWrapper row header={props.header} headerProps={props.headerProps}>
      {props.startInput}

      <View
        column
        justify="center"
        bgColor={colors.input}
        padding={{ all: "0 0.4rem" }}
        borders={{
          top: `1px dotted ${colors.custom.grey}`,
          bottom: `1px dotted ${colors.custom.grey}`,
        }}
      >
        <Text flexShrink={0} fontSize="0.8em" fontWeight={600}>
          {"—"}
        </Text>
      </View>

      {props.endInput}
    </HeaderWrapper>
  );
});

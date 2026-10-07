import { Text, TextProps, View, ViewProps } from "trabecula/components";
import { colors } from "trabecula/utils/client";

export interface CenteredTextProps extends TextProps {
  text: string;
  viewProps?: Partial<ViewProps>;
}

export const CenteredText = ({
  color = colors.custom.lightGrey,
  text,
  viewProps = {},
  ...props
}: CenteredTextProps) => (
  <View row justify="center" align="center" flex={1} {...viewProps}>
    <Text {...props} color={color}>
      {text}
    </Text>
  </View>
);

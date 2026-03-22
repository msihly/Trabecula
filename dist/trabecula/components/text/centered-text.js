import { Text, View } from "trabecula/components";
import { colors } from "trabecula/utils/client";
export const CenteredText = ({ color = colors.custom.lightGrey, text, viewProps = {}, ...props }) => (<View row justify="center" align="center" flex={1} {...viewProps}>
    <Text {...props} {...{ color }}>
      {text}
    </Text>
  </View>);

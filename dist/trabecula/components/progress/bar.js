import { LinearProgress } from "@mui/material";
import Color from "color";
import { Comp, Text, View } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";
export const ProgressBar = Comp((props) => {
    const minWidth = props?.minWidth || "2em";
    const { css } = useClasses(null);
    return (<View row flex={1} align="center" spacing="1rem" {...props.viewProps}>
      {props.withText ? (<View row spacing="0.5rem">
          <Text minWidth={minWidth} textAlign="center">
            {props.numerator > -1
                ? (props.numeratorFormatter?.(props.numerator) ?? props.numerator)
                : "--"}
          </Text>
          <Text>{"/"}</Text>
          <Text minWidth={minWidth} textAlign="center" color={colors.custom.lightGrey}>
            {props.denominator > -1
                ? (props.denominatorFormatter?.(props.denominator) ?? props.denominator)
                : "--"}
          </Text>
        </View>) : null}

      <LinearProgress variant="determinate" value={((props.numerator || 0) / (props.denominator || 1)) * 100} className={css.progressBar}/>
    </View>);
});
const useClasses = makeClasses({
    progressBar: {
        flex: 1,
        backgroundColor: Color(colors.custom.blue).fade(0.5).string(),
        "& .MuiLinearProgress-bar": {
            backgroundColor: colors.custom.blue,
        },
    },
});

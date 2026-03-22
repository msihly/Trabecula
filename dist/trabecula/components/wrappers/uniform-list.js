import { View } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";
export const UniformList = ({ children, uniformWidth, ...props }) => {
    const { css, cx } = useClasses({ uniformWidth });
    return (<View {...props} className={cx(css.uniform, props?.className)}>
      {children}
    </View>);
};
const useClasses = makeClasses((props) => ({
    uniform: {
        "& > *": {
            flexBasis: "100%",
            maxWidth: props.uniformWidth,
        },
    },
}));

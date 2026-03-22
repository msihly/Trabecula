// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { DialogTitle } from "@mui/material";
import { ConditionalWrap, UniformList, View } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";
export const Header = ({ children, className, justify = "center", leftNode, rightNode, }) => {
    const { css, cx } = useClasses({ justify });
    return (<DialogTitle className={cx(css.root, className)}>
      <ConditionalWrap condition={leftNode !== undefined || rightNode !== undefined} wrap={(wrappedChildren) => (<UniformList row flex={1} align="center">
            {leftNode ? (<View row align="center" justify="flex-start">
                {leftNode}
              </View>) : (<View />)}

            {wrappedChildren}

            {rightNode ? (<View row align="center" justify="flex-end">
                {rightNode}
              </View>) : (<View />)}
          </UniformList>)}>
        {children}
      </ConditionalWrap>
    </DialogTitle>);
};
const useClasses = makeClasses((props) => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: props.justify,
        alignItems: "center",
        padding: "0.5rem 1rem",
        textAlign: "center",
    },
}));

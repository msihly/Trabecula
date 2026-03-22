// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { Icon as MuiIcon } from "@mui/material";
import { View } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";
import { Fmt } from "trabecula/utils/common";
export const Icon = ({ className, color, margins, name, rotation, size, viewProps = {}, ...props }) => {
    const { css, cx } = useClasses({ rotation });
    return (<View column className={cx(css.root, className)} margins={margins} {...viewProps}>
      <MuiIcon {...props} style={{ color, fontSize: size }}>
        {Fmt.pascalToSnake(name)}
      </MuiIcon>
    </View>);
};
const useClasses = makeClasses((props) => ({
    root: {
        justifyContent: "center",
        transform: props.rotation !== undefined ? `rotate(${props.rotation}deg)` : undefined,
        transition: "all 200ms ease-in-out",
    },
}));

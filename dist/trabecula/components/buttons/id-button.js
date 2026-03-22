import { Button } from "trabecula/components";
import { colors, copyToClipboard } from "trabecula/utils/client";
export const IdButton = ({ value, ...props }) => {
    const onClick = () => copyToClipboard(value, `Copied ID`);
    return <Button text="ID" onClick={onClick} color={colors.custom.black} {...props}/>;
};

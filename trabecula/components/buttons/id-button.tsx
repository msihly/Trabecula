import { Button, ButtonProps } from "trabecula/components";
import { colors, copyToClipboard } from "trabecula/utils/client";

export interface IdButtonProps extends ButtonProps {
  value: string;
}

export const IdButton = ({ value, ...props }: IdButtonProps) => {
  const onClick = () => copyToClipboard(value, `Copied ID`);

  return <Button text="ID" onClick={onClick} color={colors.custom.black} {...props} />;
};

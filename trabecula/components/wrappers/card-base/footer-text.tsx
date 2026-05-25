import { Text } from "trabecula/components";

export interface FooterTextProps {
  text: string;
}

export const FooterText = (props: FooterTextProps) => {
  return (
    props.text?.length > 0 && (
      <Text fontSize="0.9em" width="100%" textAlign="center" padding={{ all: "0 0.4rem 0.2rem" }}>
        {props.text}
      </Text>
    )
  );
};

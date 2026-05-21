import { Text } from "trabecula/components";
import { makeClasses } from "trabecula/utils/client";

export interface FooterTextProps {
  text: string;
}

export const FooterText = (props: FooterTextProps) => {
  const { css } = useClasses(null);

  return props.text?.length > 0 && <Text className={css.title}>{props.text}</Text>;
};

const useClasses = makeClasses({
  title: {
    padding: "0 0.4rem 0.2rem",
    width: "100%",
    fontSize: "0.9em",
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

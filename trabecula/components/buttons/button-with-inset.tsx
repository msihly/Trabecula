import { Button, ButtonProps, Comp, Text, View } from "trabecula/components";
import { CSS, makeClasses } from "trabecula/utils/client";

export interface ButtonWithInsetProps extends ButtonProps {
  insetText: string;
  insetWidth?: CSS["width"];
}

export const ButtonWithInset = Comp(
  ({ insetText, insetWidth = "2.5rem", ...props }: ButtonWithInsetProps) => {
    const { css } = useClasses({ insetWidth });

    return (
      <Button
        startNode={
          <View column className={css.insetContainer}>
            <Text fontSize="0.7em">{insetText}</Text>
          </View>
        }
        justify="flex-start"
        width="100%"
        padding={{ all: 0 }}
        {...props}
      />
    );
  },
);

interface ClassesProps {
  insetWidth: ButtonWithInsetProps["insetWidth"];
}

const useClasses = makeClasses((props: ClassesProps) => ({
  insetContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: "0.5rem",
    padding: "0.5rem 0.4rem 0.5rem 0.5rem",
    width: props.insetWidth,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    "& > span": {
      whiteSpace: "nowrap",
      cursor: "pointer",
    },
  },
}));

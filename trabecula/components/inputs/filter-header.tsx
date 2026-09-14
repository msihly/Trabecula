import { Comp, HeaderContent, IconButton, Text } from "trabecula/components";
import { colors } from "trabecula/utils/client";

export interface FilterHeaderProps {
  label: string;
  mode: "optional" | "required";
  setMode: (mode: "optional" | "required") => void;
}

export const FilterHeader = Comp(({ label, mode, setMode }: FilterHeaderProps) => {
  const toggleMode = () => setMode(mode === "required" ? "optional" : "required");

  return (
    <HeaderContent
      rightNode={
        <IconButton
          color={mode === "optional" ? colors.custom.lightBlue : colors.custom.grey}
          iconProps={{ size: "0.8rem" }}
          name={mode === "optional" ? "AddCircle" : "Circle"}
          onClick={toggleMode}
          padding={{ all: 0 }}
          tooltip={mode === "optional" ? "Optional" : "Required"}
        />
      }
    >
      <Text fontSize="0.8em" textAlign="center">
        {label}
      </Text>
    </HeaderContent>
  );
});

import { Button, Comp, Text, View } from "trabecula/components";
import { colors } from "trabecula/utils/client";

export interface FilterHeaderProps {
  label: string;
  mode: "optional" | "required";
  setMode: (mode: "optional" | "required") => void;
}

export const FilterHeader = Comp(({ label, mode, setMode }: FilterHeaderProps) => {
  const toggleMode = () => setMode(mode === "required" ? "optional" : "required");

  return (
    <View row align="center" width="100%">
      <Text flex={1} fontSize="0.8em" textAlign="center">
        {label}
      </Text>

      <Button
        color={mode === "optional" ? colors.custom.lightBlue : colors.custom.grey}
        fontSize="0.8em"
        onClick={toggleMode}
        padding={{ all: "0 0.3rem" }}
        text={mode === "optional" ? "OR" : "AND"}
        tooltip={
          mode === "optional"
            ? "Optional: match at least one optional filter. Click to make required."
            : "Required: match this filter. Click to make optional."
        }
        variant="text"
      />
    </View>
  );
});

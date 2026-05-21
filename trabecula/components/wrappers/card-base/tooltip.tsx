import { Tooltip as TooltipBase, View } from "trabecula/components";

export interface TooltipProps {
  children: JSX.Element;
  disabled?: boolean;
  tooltip: JSX.Element | JSX.Element[];
}

export const Tooltip = ({ children, tooltip }: TooltipProps) => {
  return (
    <TooltipBase
      enterDelay={700}
      enterNextDelay={300}
      minWidth="15rem"
      title={
        <View column padding={{ all: "0.3rem" }} spacing="0.5rem">
          {tooltip}
        </View>
      }
    >
      <View column width="100%">
        {children}
      </View>
    </TooltipBase>
  );
};

import { Comp, HeaderWrapper, View } from "trabecula/components";
import { colors } from "trabecula/utils/client";
import { deepMerge } from "trabecula/utils/common";
export const Card = Comp(({ bgColor = colors.foreground, borderRadiuses = {}, children, column = true, display = "flex", header, height, headerProps, overflow, padding = {}, row = false, spacing, width, ...viewProps }, ref) => {
    borderRadiuses = deepMerge({ bottom: "0.5rem", top: !!header ? 0 : "0.5rem" }, borderRadiuses);
    padding = deepMerge({ all: "0.5rem" }, padding);
    return (<HeaderWrapper {...viewProps} {...{ borderRadiuses, display, header, headerProps, height, overflow, width }}>
        <View position="relative" column={column && !row} flex={1} {...{ bgColor, borderRadiuses, height, overflow, padding, ref, row, spacing, width }} {...viewProps} aria-label="card">
          {children}
        </View>
      </HeaderWrapper>);
});

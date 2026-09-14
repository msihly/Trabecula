import { ReactNode } from "react";
import { ConditionalWrap, View } from "trabecula/components";

export interface HeaderContentProps {
  children: JSX.Element | JSX.Element[];
  leftNode?: ReactNode;
  rightNode?: ReactNode;
}

export const HeaderContent = ({ children, leftNode, rightNode }: HeaderContentProps) => (
  <ConditionalWrap
    condition={leftNode !== undefined || rightNode !== undefined}
    wrap={(wrappedChildren) => (
      <View row flex={1} minWidth={0} align="center">
        <View row flex="1 1 0" minWidth={0} align="center" justify="flex-start">
          {leftNode}
        </View>

        {wrappedChildren}

        <View row flex="1 1 0" minWidth={0} align="center" justify="flex-end">
          {rightNode}
        </View>
      </View>
    )}
  >
    {children}
  </ConditionalWrap>
);

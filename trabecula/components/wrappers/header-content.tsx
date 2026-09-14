import { ReactNode } from "react";
import { ConditionalWrap, UniformList, View } from "trabecula/components";

export interface HeaderContentProps {
  children: JSX.Element | JSX.Element[];
  leftNode?: ReactNode;
  rightNode?: ReactNode;
}

export const HeaderContent = ({ children, leftNode, rightNode }: HeaderContentProps) => (
  <ConditionalWrap
    condition={leftNode !== undefined || rightNode !== undefined}
    wrap={(wrappedChildren) => (
      <UniformList row flex={1} align="center">
        {leftNode ? (
          <View row align="center" justify="flex-start">
            {leftNode}
          </View>
        ) : (
          <View />
        )}

        {wrappedChildren}

        {rightNode ? (
          <View row align="center" justify="flex-end">
            {rightNode}
          </View>
        ) : (
          <View />
        )}
      </UniformList>
    )}
  >
    {children}
  </ConditionalWrap>
);

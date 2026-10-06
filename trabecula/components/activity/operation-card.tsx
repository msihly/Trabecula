import { ReactNode } from "react";
import { LinearProgress } from "@mui/material";
import { Card, Comp, Icon, IconName, Text, View } from "trabecula/components";
import { colors, CssColor, makeClasses } from "trabecula/utils/client";

export interface ActivityOperationCardProps {
  children?: ReactNode;
  controls?: ReactNode;
  dateText?: string;
  error?: string;
  icon: IconName;
  isActive?: boolean;
  label: string;
  message?: string;
  processedCount: number;
  statusColor: CssColor;
  statusText: string;
  totalCount: number;
}

export const ActivityOperationCard = Comp(
  ({
    children,
    controls,
    dateText,
    error,
    icon,
    isActive,
    label,
    message,
    processedCount,
    statusColor,
    statusText,
    totalCount,
  }: ActivityOperationCardProps) => {
    const { css } = useClasses(null);

    return (
      <Card
        bgColor={colors.background}
        flex="none"
        minWidth={0}
        padding={{ all: "0.6rem" }}
        spacing="0.4rem"
        width="100%"
      >
        <View row align="center" justify="space-between" spacing="1rem" wrap="wrap">
          <View row flex={1} align="center" minWidth={0} spacing="0.5rem">
            <Icon color={statusColor} name={icon} />

            <Text minWidth={0} overflowWrap="anywhere" whiteSpace="normal">
              {label}
            </Text>
          </View>

          <View row align="center" spacing="0.75rem" wrap="wrap">
            <Text color={statusColor} fontSize="0.8em" whiteSpace="nowrap">
              {statusText}
            </Text>

            {controls}
          </View>
        </View>

        {isActive && (
          <LinearProgress
            value={
              totalCount > 0 ? Math.min(100, Math.max(0, (processedCount / totalCount) * 100)) : 0
            }
            variant={totalCount > 0 ? "determinate" : "indeterminate"}
          />
        )}

        {(error || message) && (
          <View maxHeight="12rem" minWidth={0} overflow="hidden auto">
            <Text
              className={css.message}
              color={error ? colors.custom.red : colors.custom.lightGrey}
              fontSize="0.8em"
              minWidth={0}
              overflowWrap="anywhere"
              whiteSpace="pre-wrap"
            >
              {error ?? message}
            </Text>
          </View>
        )}

        {dateText && (
          <Text color={colors.custom.lightGrey} flex="none" fontSize="0.8em" whiteSpace="normal">
            {dateText}
          </Text>
        )}

        {children}
      </Card>
    );
  },
);

const useClasses = makeClasses({
  message: { userSelect: "text" },
});

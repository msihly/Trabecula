import { Button, IconName, IconProps, Text, View } from "trabecula/components";
import { ButtonProps, MenuButton, SortRow } from "trabecula/components/buttons";
import { colors, CSS, CssColor, makeClasses } from "trabecula/utils/client";

export interface SortMenuProps extends Omit<ButtonProps, "onChange" | "value"> {
  color?: CssColor;
  hasHeader?: boolean;
  rows: {
    attribute: string;
    label: string;
    icon: IconName;
    iconProps?: Partial<IconProps>;
  }[];
  setValue: (value: { isDesc: boolean; key: string }) => void;
  value: { isDesc: boolean; key: string };
  width?: CSS["width"];
}

export const SortMenu = ({
  color = colors.custom.black,
  hasHeader,
  height = "inherit",
  rows,
  setValue,
  value,
  width = "fit-content",
  ...buttonProps
}: SortMenuProps) => {
  const { css, cx } = useClasses({ hasHeader });

  const activeRow = rows.find(({ attribute }) => attribute === value?.key);

  const renderButton = (onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void) => (
    <Button
      {...buttonProps}
      onClick={onOpen}
      color={color}
      icon="Sort"
      iconRight={value?.isDesc ? "ArrowDownward" : "ArrowUpward"}
      iconProps={{ size: "1.15em" }}
      justify="space-between"
      height={height}
      width={width}
      borderRadiuses={{ all: "0.3rem", ...(hasHeader ? { top: 0 } : {}) }}
      padding={{ left: "0.5em", right: "0.5em" }}
      className={cx(css.button, buttonProps?.className)}
      text={
        <View column align="flex-start" justify="center" width="100%">
          <Text className={css.topText}>{"Sort By"}</Text>
          <Text className={css.label}>{activeRow?.label}</Text>
        </View>
      }
    />
  );

  return (
    <MenuButton button={renderButton}>
      <View column>
        {rows.map((rowProps) => (
          <SortRow {...rowProps} {...{ setValue, value }} key={rowProps.attribute} />
        ))}
      </View>
    </MenuButton>
  );
};

const useClasses = makeClasses({
  button: {
    flexShrink: 0,
    boxShadow: "none",
  },
  label: {
    fontSize: "0.9em",
    lineHeight: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    whiteSpace: "nowrap",
  },
  topText: {
    color: colors.custom.lightGrey,
    fontSize: "0.7em",
    fontWeight: 600,
    lineHeight: 1,
  },
});

import { ReactNode } from "react";
import {
  Button,
  ButtonProps,
  Chip,
  Comp,
  Icon,
  MenuButton,
  MenuButtonProps,
  SortMenu,
  SortMenuProps,
  Text,
  UniformList,
  View,
  ViewProps,
} from "trabecula/components";
import { colors, CSS, CssColor } from "trabecula/utils/client";

export interface FilterMenuProps extends Omit<ButtonProps, "onChange" | "value"> {
  children: ReactNode | ReactNode[];
  color?: CssColor;
  menuProps?: Partial<MenuButtonProps>;
  resetFn?: () => void;
  sortOptions: SortMenuProps["rows"];
  store: {
    hasChanges: boolean;
    isLoading: boolean;
    loadFiltered: (options?: { noCache?: boolean; page?: number }) => void;
    numOfFilters: number;
    reset: () => void;
    setPageCount: (count: number) => void;
    setSortValue: (val: { isDesc: boolean; key: string }) => void;
    sortValue: { isDesc: boolean; key: string };
  };
  viewProps?: ViewProps;
  width?: CSS["width"];
}

export const FilterMenu = Comp(
  ({
    children,
    color = colors.custom.black,
    menuProps = {},
    resetFn,
    sortOptions,
    store,
    viewProps = {},
    width = "fit-content",
    ...buttonProps
  }: FilterMenuProps) => {
    const handleReset = () => {
      resetFn ? resetFn() : store.reset();
      handleSearch();
    };

    const handleSearch = () => {
      store.setPageCount(1);
      store.loadFiltered({ noCache: true, page: 1 });
    };

    const renderButton = (onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void) => (
      <Button
        {...buttonProps}
        onClick={onOpen}
        color={store.hasChanges ? colors.custom.purple : color}
        justify="space-between"
        padding={{ left: "0.5em", right: "0.5em" }}
        width={width}
        text={
          <View row spacing="0.5rem">
            <Icon name="FilterAlt" size="1.15em" />

            <Text>{"Filter Results"}</Text>

            <Chip
              label={store.numOfFilters}
              bgColor={store.numOfFilters > 0 ? colors.custom.blue : colors.foregroundCard}
              height="1.2rem"
              width="2rem"
              size="small"
            />
          </View>
        }
      />
    );

    return (
      <MenuButton button={renderButton} {...menuProps}>
        <View column padding={{ all: "0.5rem" }} spacing="0.5rem" overflow="auto" {...viewProps}>
          <UniformList row spacing="0.5rem">
            <Button
              text="Search"
              icon="Search"
              onClick={handleSearch}
              disabled={store.isLoading}
              color={store.hasChanges ? colors.custom.purple : colors.custom.blue}
            />

            <Button
              text="Reset"
              icon="Refresh"
              onClick={handleReset}
              disabled={store.isLoading}
              color={colors.foregroundCard}
              colorOnHover={colors.custom.red}
            />

            <SortMenu
              rows={sortOptions}
              value={store.sortValue}
              setValue={store.setSortValue}
              color={colors.foregroundCard}
            />
          </UniformList>

          {children}
        </View>
      </MenuButton>
    );
  },
);

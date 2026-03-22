import { Button, Chip, Comp, Icon, MenuButton, SortMenu, Text, UniformList, View, } from "trabecula/components";
import { colors } from "trabecula/utils/client";
export const FilterMenu = Comp(({ children, color = colors.custom.black, menuProps = {}, resetFn, sortOptions, store, viewProps = {}, width = "fit-content", ...buttonProps }) => {
    const handleReset = () => {
        resetFn ? resetFn() : store.reset();
        handleSearch();
    };
    const handleSearch = () => {
        store.setPageCount(1);
        store.loadFiltered({ noCache: true, page: 1 });
    };
    const renderButton = (onOpen) => (<Button onClick={onOpen} color={store.hasChanges ? colors.custom.purple : color} justify="space-between" padding={{ left: "0.5em", right: "0.5em" }} width={width} {...buttonProps}>
        <View row spacing="0.5rem" margins={{ right: "0.5rem" }}>
          <Icon name="FilterAlt" size="1.15em"/>

          <Text>{"Filter Results"}</Text>
        </View>

        <Chip label={store.numOfFilters} bgColor={store.numOfFilters > 0 ? colors.custom.blue : colors.foregroundCard} height="1.2rem" width="2rem" size="small"/>
      </Button>);
    return (<MenuButton button={renderButton} {...menuProps}>
        <View column padding={{ all: "0.5rem" }} spacing="0.5rem" overflow="auto" {...viewProps}>
          <UniformList row spacing="0.5rem">
            <Button text="Search" icon="Search" onClick={handleSearch} disabled={store.isLoading} color={store.hasChanges ? colors.custom.purple : colors.custom.blue}/>

            <Button text="Reset" icon="Refresh" onClick={handleReset} disabled={store.isLoading} color={colors.foregroundCard} colorOnHover={colors.custom.red}/>

            <SortMenu rows={sortOptions} value={store.sortValue} setValue={store.setSortValue} color={colors.foregroundCard}/>
          </UniformList>

          {children}
        </View>
      </MenuButton>);
});

import { ReactNode, useEffect, useState } from "react";
import {
  AutoComplete,
  Button,
  ButtonProps,
  Comp,
  ConfirmModal,
  Divider,
  Icon,
  Input,
  MenuButton,
  MenuButtonProps,
  Modal,
  SortMenu,
  SortMenuProps,
  Text,
  View,
  ViewProps,
} from "trabecula/components";
import { colors, CSS, CssColor } from "trabecula/utils/client";

type FilterStore = {
  applySavedSearch: (id: string) => any;
  deleteSavedSearch: (id?: string) => Promise<any>;
  hasChanges: boolean;
  isDeleteModalOpen: boolean;
  isLoading: boolean;
  isSaveModalOpen: boolean;
  loadSavedSearches: () => Promise<any>;
  loadFiltered: (options?: { noCache?: boolean; page?: number }) => Promise<any>;
  reset: () => any;
  saveSavedSearch: (label: string) => Promise<any>;
  savedSearches: Array<{ id: string; label: string }>;
  selectedSavedSearchId: string;
  setPageCount: (count: number) => any;
  setIsDeleteModalOpen: (value: boolean) => any;
  setIsSaveModalOpen: (value: boolean) => any;
  setSortValue: (val: { isDesc: boolean; key: string }) => any;
  sortValue: { isDesc: boolean; key: string };
};

export interface FilterMenuProps extends Omit<ButtonProps, "onChange" | "value"> {
  children: ReactNode | ReactNode[];
  color?: CssColor;
  menuProps?: Partial<MenuButtonProps>;
  resetFn?: () => void;
  sortOptions: SortMenuProps["rows"];
  store: FilterStore;
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
    width = "8rem",
    ...buttonProps
  }: FilterMenuProps) => {
    const hasSavedSearchApi =
      !!store.applySavedSearch &&
      !!store.deleteSavedSearch &&
      !!store.loadSavedSearches &&
      !!store.saveSavedSearch;

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
          <View row align="center" spacing="0.5rem">
            <Icon name="FilterAlt" size="1.15em" />

            <Text>{"Filter Results"}</Text>
          </View>
        }
      />
    );

    return (
      <MenuButton button={renderButton} {...menuProps}>
        <View column padding={{ all: "0.5rem" }} spacing="0.5rem" overflow="auto" {...viewProps}>
          <View row spacing="0.5rem" width="100%">
            <Button
              text="Search"
              icon="Search"
              onClick={handleSearch}
              disabled={store.isLoading}
              color={store.hasChanges ? colors.custom.purple : colors.custom.blue}
              width="100%"
            />

            <Button
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
              width="9rem"
            />

            {hasSavedSearchApi && (
              <>
                <Divider orientation="vertical" />

                <SavedSearchMenu store={store} />
              </>
            )}
          </View>

          {children}
        </View>
      </MenuButton>
    );
  },
);

interface SavedSearchMenuProps {
  store: FilterStore;
}

const SavedSearchMenu = Comp(({ store }: SavedSearchMenuProps) => {
  const [inputValue, setInputValue] = useState("");
  const [label, setLabel] = useState("");

  const activeSearch = store.savedSearches.find((s) => s.id === store.selectedSavedSearchId);

  const options = store.savedSearches.map((savedSearch) => ({
    label: savedSearch.label,
    value: savedSearch.id,
  }));

  useEffect(() => {
    store.loadSavedSearches();
  }, [store]);

  useEffect(() => {
    setInputValue(activeSearch?.label ?? "");
  }, [activeSearch?.id, activeSearch?.label]);

  const handleDelete = async () => {
    await store.deleteSavedSearch(store.selectedSavedSearchId);
    return true;
  };

  const handleEdit = () => {
    setLabel(activeSearch?.label ?? "");
    store.setIsSaveModalOpen(true);
  };

  const handleSave = () => store.saveSavedSearch(label);

  const handleSelect = (value: string) => {
    setInputValue(value);
    const selectedSearch = options.find((option) => option.label === value);
    if (selectedSearch) store.applySavedSearch(selectedSearch.value);
  };

  return (
    <>
      <AutoComplete
        options={options}
        value={inputValue}
        onChange={handleSelect}
        inputProps={{
          placeholder: "Saved Searches",
          height: "1em",
          width: "100%",
        }}
      />

      <Button
        icon="Save"
        onClick={handleEdit}
        disabled={store.isLoading}
        color={colors.foregroundCard}
        colorOnHover={colors.custom.blue}
      />

      <Button
        icon="Delete"
        onClick={() => store.setIsDeleteModalOpen(true)}
        disabled={store.isLoading || !store.selectedSavedSearchId}
        color={colors.foregroundCard}
        colorOnHover={colors.custom.red}
      />

      {store.isDeleteModalOpen && (
        <ConfirmModal
          subText={`Delete saved search "${activeSearch?.label ?? "Selected Search"}"?`}
          setVisible={store.setIsDeleteModalOpen}
          onConfirm={handleDelete}
        />
      )}

      {store.isSaveModalOpen && (
        <SavedSearchModal
          label={label}
          onClose={() => store.setIsSaveModalOpen(false)}
          onSave={handleSave}
          setLabel={setLabel}
        />
      )}
    </>
  );
});

interface SavedSearchModalProps {
  label: string;
  onClose: () => void;
  onSave: () => Promise<void>;
  setLabel: (value: string) => void;
}

const SavedSearchModal = Comp(({ label, onClose, onSave, setLabel }: SavedSearchModalProps) => (
  <Modal.Container onClose={onClose} width="24rem">
    <Modal.Header>
      <Text preset="title">{"Save Search"}</Text>
    </Modal.Header>

    <Modal.Content spacing="0.5rem" dividers={false}>
      <Input header="Label" value={label} setValue={setLabel} autoFocus />
    </Modal.Content>

    <Modal.Footer>
      <Button text="Cancel" icon="Close" onClick={onClose} color={colors.foregroundCard} />

      <Button
        text="Save"
        icon="Save"
        onClick={onSave}
        disabled={!label.trim()}
        color={colors.custom.green}
      />
    </Modal.Footer>
  </Modal.Container>
));

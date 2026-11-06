import { Comp, MultiActionButton, MultiActionButtonProps } from "trabecula/components";
import { Fmt } from "trabecula/utils/common";

type SelectionStore = {
  results: Array<{ id: string }>;
  selectAllInQuery: () => Promise<{ data?: number | null; error?: string; success: boolean }>;
  selectedIds: string[];
  toggleSelected: (selected: Array<{ id: string; isSelected: boolean }>) => any;
};

type SelectionToast = {
  error: (message: string) => unknown;
  info: (message: string) => unknown;
};

/**
 * Each button takes only the parts of the selection store it uses, so searches without query
 * selection can still deselect all and select all in view.
 */
export interface SelectionButtonProps<
  StoreKey extends keyof SelectionStore = keyof SelectionStore,
> extends Omit<MultiActionButtonProps, "name" | "onClick"> {
  /** Plural name of the selectable items, such as "files". */
  itemLabel: string;
  store: Pick<SelectionStore, StoreKey>;
  /** The app's own toast, so its notification handling, such as history, applies. */
  toast: SelectionToast;
}

export type SelectionButtonsProps<StoreKey extends keyof SelectionStore = keyof SelectionStore> =
  Pick<SelectionButtonProps<StoreKey>, "itemLabel" | "store" | "toast">;

export const selectAllInView = ({
  itemLabel,
  store,
  toast,
}: SelectionButtonsProps<"results" | "toggleSelected">) => {
  store.toggleSelected(store.results.map(({ id }) => ({ id, isSelected: true })));
  toast.info(`Added ${store.results.length} ${itemLabel} to selection`);
};

export const DeselectAllButton = Comp(
  ({
    itemLabel,
    store,
    toast,
    ...props
  }: SelectionButtonProps<"selectedIds" | "toggleSelected">) => {
    const handleClick = () => {
      store.toggleSelected(store.selectedIds.map((id) => ({ id, isSelected: false })));
      toast.info(`Deselected all ${itemLabel}`);
    };

    return (
      <MultiActionButton
        disabled={!store.selectedIds.length}
        tooltip={`Deselect All ${Fmt.capitalize(itemLabel)}`}
        {...props}
        name="Deselect"
        onClick={handleClick}
      />
    );
  },
);

export const SelectAllButton = Comp(
  ({ itemLabel, store, toast, ...props }: SelectionButtonProps<"results" | "toggleSelected">) => {
    const handleClick = () => selectAllInView({ itemLabel, store, toast });

    return (
      <MultiActionButton
        tooltip={`Select All ${Fmt.capitalize(itemLabel)} in View`}
        {...props}
        name="SelectAll"
        onClick={handleClick}
      />
    );
  },
);

export const SelectAllInQueryButton = Comp(
  ({ itemLabel, store, toast, ...props }: SelectionButtonProps<"selectAllInQuery">) => {
    const handleClick = async () => {
      const res = await store.selectAllInQuery();

      if (!res.success) toast.error(res.error);
      else if (res.data !== null) toast.info(`Selected ${res.data} ${itemLabel}`);
    };

    return (
      <MultiActionButton
        tooltip={`Select All ${Fmt.capitalize(itemLabel)} in Query`}
        {...props}
        name="LibraryAddCheck"
        onClick={handleClick}
      />
    );
  },
);

/** Deselect all, select all in view and select all in query, in that order. */
export const SelectionButtons = (props: SelectionButtonsProps) => (
  <>
    <DeselectAllButton {...props} />

    <SelectAllButton {...props} />

    <SelectAllInQueryButton {...props} />
  </>
);

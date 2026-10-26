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

export interface SelectionButtonProps extends Omit<MultiActionButtonProps, "name" | "onClick"> {
  /** Plural name of the selectable items, such as "files". */
  itemLabel: string;
  store: SelectionStore;
  /** The app's own toast, so its notification handling, such as history, applies. */
  toast: SelectionToast;
}

export type SelectionButtonsProps = Pick<SelectionButtonProps, "itemLabel" | "store" | "toast">;

export const selectAllInView = ({ itemLabel, store, toast }: SelectionButtonsProps) => {
  store.toggleSelected(store.results.map(({ id }) => ({ id, isSelected: true })));
  toast.info(`Added ${store.results.length} ${itemLabel} to selection`);
};

export const DeselectAllButton = Comp(
  ({ itemLabel, store, toast, ...props }: SelectionButtonProps) => {
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
  ({ itemLabel, store, toast, ...props }: SelectionButtonProps) => {
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
  ({ itemLabel, store, toast, ...props }: SelectionButtonProps) => {
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

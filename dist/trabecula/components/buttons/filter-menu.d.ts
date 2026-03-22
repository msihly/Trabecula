import { ButtonProps, MenuButtonProps, SortMenuProps, ViewProps } from "trabecula/components";
import { FileCollectionSearch, FileImportBatchSearch, FileSearch, TagSearch } from "trabecula/store";
import { CSS } from "trabecula/utils/client";
export interface FilterMenuProps extends Omit<ButtonProps, "onChange" | "value"> {
    color?: string;
    menuProps?: Partial<MenuButtonProps>;
    resetFn?: () => void;
    sortOptions: SortMenuProps["rows"];
    store: FileCollectionSearch | FileImportBatchSearch | FileSearch | TagSearch;
    viewProps?: ViewProps;
    width?: CSS["width"];
}
export declare const FilterMenu: any;

import { MultiInputListProps, TagInputRowProps, ViewProps } from "trabecula/components";
import { TagOption } from "trabecula/store";
export interface TagListProps extends MultiInputListProps<TagOption> {
    hasDelete?: boolean;
    hasDeleteAll?: boolean;
    hasEditor?: boolean;
    hasSearchMenu?: boolean;
    hasInput?: boolean;
    onTagClick?: (tagOpt: TagOption) => void;
    rightNode?: TagInputRowProps["rightNode"];
    viewProps?: Partial<ViewProps>;
}
export declare const TagList: any;

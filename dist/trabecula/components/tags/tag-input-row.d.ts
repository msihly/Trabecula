import { ReactNode } from "react";
import { MultiInputRowProps } from "trabecula/components";
import { TagOption } from "trabecula/store";
export interface TagInputRowProps extends Omit<MultiInputRowProps<TagOption>, "value"> {
    hasEditor?: boolean;
    hasSearchMenu?: boolean;
    rightNode?: (tag: TagOption) => ReactNode;
    tag: TagOption;
}
export declare const TagInputRow: any;

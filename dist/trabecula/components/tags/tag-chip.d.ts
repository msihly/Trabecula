import { ChipProps, TagToUpsert } from "trabecula/components";
export interface TagChipProps extends Omit<ChipProps, "color" | "label" | "onChange" | "onClick"> {
    color?: string;
    hasEditor?: boolean;
    onClick?: (id: string | null) => void;
    tag: TagToUpsert;
}
export declare const TagChip: any;

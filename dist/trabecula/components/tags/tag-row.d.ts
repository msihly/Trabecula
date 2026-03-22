import { TagToUpsert, ViewProps } from "trabecula/components";
export declare const sortTags: <T extends unknown>(tags: T[]) => T[];
export interface TagRowProps extends ViewProps {
    disabled?: boolean;
    tags: TagToUpsert[];
}
export declare const TagRow: any;

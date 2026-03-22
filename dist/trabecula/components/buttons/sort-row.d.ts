import { IconName, IconProps, SortMenuProps } from "trabecula/components";
export interface SortRowProps {
    attribute: string;
    label: string;
    icon: IconName;
    iconProps?: Partial<IconProps>;
    setValue: SortMenuProps["setValue"];
    value: SortMenuProps["value"];
}
export declare const SortRow: ({ attribute, label, icon, iconProps, setValue, value, }: SortRowProps) => import("react/jsx-runtime").JSX.Element;

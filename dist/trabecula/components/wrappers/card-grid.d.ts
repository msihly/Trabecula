import { ReactNode } from "react";
import { ViewProps } from "trabecula/components";
import { CSS } from "trabecula/utils/client";
export interface CardGridProps extends ViewProps {
    cards: ReactNode[];
    cardsProps?: ViewProps;
    children?: ReactNode;
    flexFlow?: CSS["flexFlow"];
    maxCards?: number;
    noResultsText?: string;
    position?: CSS["position"];
}
export declare const CardGrid: import("react").ForwardRefExoticComponent<CardGridProps & import("react").RefAttributes<HTMLDivElement>>;

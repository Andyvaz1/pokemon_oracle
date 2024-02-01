import { Pokemon, Type } from "@prisma/client";
import { Key, ReactNode } from "react";
import { types } from "util";

export interface SelectFiltersProps {
    selectedRegion: string;
    setSelectedRegion: (region: string) => void;
    selectedType: string;
    setSelectedType: any;
    disabled: boolean;
    setPage: (page: number) => void;
}

export interface SelectRegionProps {
    selectedRegion: string;
    setSelectedRegion: (region: string) => void;
    disabled: boolean;
    setPage: (page: number) => void;
    selectedType?: string;
    page?: number;
}

export type DetailedPokemon = Pokemon & { types: Type[] };

export interface SelectTypeProps {
    selectedType: string;
    setSelectedType: (items: SelectedItems<string> | any) => ReactNode;
    disabled: boolean;
    setPage: (page: number) => void;
    selectedRegion?: string;
}

export type SelectedItemProps<T> = {
    /** A unique key for the item. */
    key?: Key;
    /** The props passed to the item. */
    props?: Record<string, any>;
    /** The item data. */
    data?: T | null;
    /** An accessibility label for this item. */
    "aria-label"?: string;
    /** The rendered contents of this item (e.g. JSX). */
    rendered?: ReactNode;
    /** A string value for this item, used for features like typeahead. */
    textValue?: string;
    /** The type of item this item represents. */
    type?: string;
};

type SelectedItems<T> = Array<SelectedItemProps<T>>;

renderValue:;

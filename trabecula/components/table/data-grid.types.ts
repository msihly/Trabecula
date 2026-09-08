import { ReactNode } from "react";
import { TextProps } from "trabecula/components";
import { CSS, CssColor } from "trabecula/utils/client";

export type DataGridRowData = Record<string, unknown>;
export type DataGridColumnKey<T extends object> = Extract<keyof T, string>;

export interface DataGridRenderContext<T extends object, K extends DataGridColumnKey<T>> {
  index: number;
  isExpanded: boolean;
  isSelected: boolean;
  row: T;
  value: T[K] | undefined;
}

export type DataGridRender<T extends object, K extends DataGridColumnKey<T>> = (
  context: DataGridRenderContext<T, K>,
) => ReactNode;

export type DataGridSortDirection = "asc" | "desc";

export interface DataGridSort<T extends object = DataGridRowData> {
  direction: DataGridSortDirection;
  key: DataGridColumnKey<T>;
}

export type DataGridValue = boolean | Date | null | number | string | undefined;

export type DataGridColumn<T extends object = DataGridRowData> = {
  [K in DataGridColumnKey<T>]: DataGridColumnConfig<T, K>;
}[DataGridColumnKey<T>];

export interface DataGridColumnConfig<T extends object, K extends DataGridColumnKey<T>> {
  align?: CSS["textAlign"];
  header: ReactNode;
  key: K;
  maxWidth?: CSS["maxWidth"];
  minWidth?: CSS["minWidth"];
  render?: DataGridRender<T, K>;
  resizable?: boolean;
  searchable?: boolean;
  searchValue?: (row: T) => DataGridValue;
  sortable?: boolean;
  sortValue?: (row: T) => DataGridValue;
  textPreset?: TextProps["preset"];
  width?: CSS["width"];
  wrapText?: boolean;
}

export interface DataGridProps<T extends object = DataGridRowData> {
  alternatingBgColor?: CssColor;
  alternatingColors?: boolean;
  className?: string;
  columns: DataGridColumn<T>[];
  data: T[];
  defaultTextPreset?: TextProps["preset"];
  emptyColor?: CssColor;
  emptyJustify?: CSS["justifyContent"];
  emptyMessage?: ReactNode;
  expandColumnWidth?: string | number;
  expandableContent?: (row: T, index: number) => ReactNode;
  getRowBgColor?: (row: T, index: number) => CssColor | undefined;
  hasPagination?: boolean;
  hasResizableColumns?: boolean;
  headerBorder?: string;
  hasSearch?: boolean;
  hasSorting?: boolean;
  initialSort?: DataGridSort<T>;
  isExpanded?: boolean;
  isRowSelected?: (row: T, index: number) => boolean;
  onRowClick?: (row: T, index: number) => void;
  rowGap?: string | number;
  rowsPerPage?: number;
  selectedBgColor?: CssColor;
  selectedTextColor?: CssColor;
  spacing?: string | number;
  textPreset?: TextProps["preset"];
}

import type { DataGridColumn, DataGridValue } from "trabecula/components";
import { CSS } from "trabecula/utils/client";

export interface DataGridCellLayoutProps {
  flex?: CSS["flex"];
  maxWidth?: CSS["maxWidth"];
  minWidth?: CSS["minWidth"];
  width?: CSS["width"];
}

export const getDataGridCellLayout = (
  width: CSS["width"] | string | number | undefined,
  minWidth?: CSS["minWidth"],
  maxWidth?: CSS["maxWidth"],
): DataGridCellLayoutProps => {
  if (!width || width === "1fr") return { flex: 1, maxWidth, minWidth };
  if (typeof width === "string" && width.endsWith("fr")) {
    const flex = Number(width.replace("fr", ""));
    return { flex: Number.isFinite(flex) && flex > 0 ? flex : 1, maxWidth, minWidth };
  }

  return {
    flex: `0 0 ${typeof width === "number" ? `${width}px` : width}`,
    maxWidth: maxWidth ?? width,
    minWidth: minWidth ?? width,
    width,
  };
};

export const clampDataGridColumnWidth = (
  width: number,
  minWidth: CSS["minWidth"],
  maxWidth: CSS["maxWidth"],
) => {
  const minWidthPx = getDataGridPixelValue(minWidth) ?? 40;
  const maxWidthPx = getDataGridPixelValue(maxWidth);
  return Math.min(Math.max(width, minWidthPx), maxWidthPx ?? Number.MAX_SAFE_INTEGER);
};

export const compareDataGridValues = (a: DataGridValue, b: DataGridValue) => {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;

  if (a instanceof Date || b instanceof Date) {
    const aTime = getTime(a);
    const bTime = getTime(b);
    if (Number.isFinite(aTime) && Number.isFinite(bTime)) return aTime - bTime;
  }

  if (typeof a === "number" && typeof b === "number") return a - b;
  if (typeof a === "boolean" && typeof b === "boolean") return Number(a) - Number(b);
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
};

export const getDataGridColumnValue = <T extends object>(
  row: T,
  column: DataGridColumn<T>,
  mode: "search" | "sort",
) => {
  if (mode === "search" && column.searchValue) return column.searchValue(row);
  if (mode === "sort" && column.sortValue) return column.sortValue(row);
  return row[column.key] as DataGridValue;
};

export const getDataGridValueText = (value: DataGridValue) => {
  if (value == null) return "";
  if (value instanceof Date) return value.toISOString();
  return String(value);
};

const getTime = (value: DataGridValue) => {
  if (value instanceof Date) return value.getTime();
  if (typeof value === "boolean" || value == null) return NaN;
  return new Date(value).getTime();
};

const getDataGridPixelValue = (value: CSS["maxWidth"] | CSS["minWidth"]) => {
  if (typeof value === "number") return value;
  if (typeof value !== "string" || !value.endsWith("px")) return undefined;
  const parsed = Number(value.replace("px", ""));
  return Number.isFinite(parsed) ? parsed : undefined;
};

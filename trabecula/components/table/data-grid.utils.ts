import type { DataGridColumn, DataGridValue } from "trabecula/components";
import { CSS } from "trabecula/utils/client";

const valueCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

export const dataGridCellClasses = {
  cell: {
    "& > *": {
      maxWidth: "100%",
      minWidth: "0 !important",
    },
  },
  noWrapCell: {
    "& .MuiTypography-root": {
      display: "block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "100%",
    },
  },
} as const;

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
  else if (typeof width === "string" && width.endsWith("fr")) {
    const flex = Number(width.replace("fr", ""));

    return { flex: Number.isFinite(flex) && flex > 0 ? flex : 1, maxWidth, minWidth };
  } else {
    return {
      flex: `0 0 ${typeof width === "number" ? `${width}px` : width}`,
      maxWidth: maxWidth ?? width,
      minWidth: minWidth ?? width,
      width,
    };
  }
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
  else if (a == null) return 1;
  else if (b == null) return -1;

  if (a instanceof Date || b instanceof Date) {
    const aTime = getTime(a);
    const bTime = getTime(b);

    if (Number.isFinite(aTime) && Number.isFinite(bTime)) return aTime - bTime;
  }

  if (typeof a === "number" && typeof b === "number") return a - b;
  else if (typeof a === "boolean" && typeof b === "boolean") return Number(a) - Number(b);
  else return valueCollator.compare(String(a), String(b));
};

export const getDataGridColumnValue = <T extends object>(
  row: T,
  column: DataGridColumn<T>,
  mode: "search" | "sort",
) => {
  if (mode === "search" && column.searchValue) return column.searchValue(row);
  else if (mode === "sort" && column.sortValue) return column.sortValue(row);
  else return row[column.key] as DataGridValue;
};

export const getDataGridValueText = (value: DataGridValue) => {
  if (value == null) return "";
  else if (value instanceof Date) return value.toISOString();
  else return String(value);
};

const getTime = (value: DataGridValue) => {
  if (value instanceof Date) return value.getTime();
  else if (typeof value === "boolean" || value == null) return NaN;
  else return new Date(value).getTime();
};

const getDataGridPixelValue = (value: CSS["maxWidth"] | CSS["minWidth"]) => {
  if (typeof value === "number") return value;
  else if (typeof value !== "string" || !value.endsWith("px")) return undefined;
  else {
    const parsed = Number(value.replace("px", ""));

    return Number.isFinite(parsed) ? parsed : undefined;
  }
};

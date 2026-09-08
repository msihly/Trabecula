import {
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  useRef,
  useState,
} from "react";
import { Icon, Text, View } from "trabecula/components";
import { DataGridProps, getDataGridCellLayout } from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";

export interface DataGridHeaderProps<T extends object> extends Pick<
  DataGridProps<T>,
  "columns" | "expandableContent" | "expandColumnWidth" | "headerBorder" | "rowGap" | "textPreset"
> {
  hasResizableColumns: boolean;
  onColumnResizeStart: (
    column: DataGridProps<T>["columns"][number],
    startWidth: number,
    startClientX: number,
  ) => void;
  hasSorting: boolean;
  onSort: (column: DataGridProps<T>["columns"][number]) => void;
  sort: DataGridProps<T>["initialSort"] | null;
}

export const DataGridHeader = <T extends object>({
  columns,
  expandableContent,
  expandColumnWidth,
  headerBorder,
  hasResizableColumns,
  hasSorting,
  onColumnResizeStart,
  onSort,
  rowGap,
  sort,
  textPreset,
}: DataGridHeaderProps<T>) => {
  const { css, cx } = useClasses(null);

  const suppressSortClickRef = useRef(false);

  const [hoveredColumnKey, setHoveredColumnKey] = useState<string | null>(null);

  return (
    <View
      row
      align="flex-start"
      spacing={rowGap}
      borders={{ bottom: headerBorder }}
      padding={{ all: "0 0.3rem 0.3rem" }}
      minWidth={0}
      width="100%"
    >
      {columns.map((column, columnIndex) => {
        const isSortable = hasSorting && column.sortable !== false;
        const isResizable = hasResizableColumns && column.resizable !== false;
        const isSorted = sort?.key === column.key;
        const isHovered = hoveredColumnKey === column.key;

        const handleHeaderClick = () => {
          if (suppressSortClickRef.current) {
            suppressSortClickRef.current = false;
            return;
          }

          if (isSortable) onSort(column);
        };

        const handleResizeClick = (event: ReactMouseEvent<HTMLDivElement>) => {
          event.preventDefault();
          event.stopPropagation();
          suppressSortClickRef.current = false;
        };

        const handleResizeStart = (event: ReactPointerEvent<HTMLDivElement>) => {
          event.preventDefault();
          event.stopPropagation();
          suppressSortClickRef.current = true;
          onColumnResizeStart(
            column,
            event.currentTarget.parentElement?.offsetWidth ?? 0,
            event.clientX,
          );
        };

        return (
          <View
            key={`${column.key}-${columnIndex}`}
            row
            align="center"
            className={cx(css.cell, column.wrapText === false && css.noWrapCell)}
            cursor={isSortable ? "pointer" : undefined}
            minWidth={0}
            overflow="hidden"
            position="relative"
            spacing="0.2rem"
            title={typeof column.header === "string" ? column.header : undefined}
            onClick={handleHeaderClick}
            onMouseEnter={() => isSortable && setHoveredColumnKey(column.key)}
            onMouseLeave={() => isSortable && setHoveredColumnKey(null)}
            {...getDataGridCellLayout(column.width, column.minWidth, column.maxWidth)}
          >
            <Text
              preset={column.textPreset ?? textPreset}
              textAlign={column.align || "left"}
              overflow="hidden"
            >
              {column.header}
            </Text>

            {!isSortable ? null : (
              <Icon
                name={isSorted && sort?.direction === "asc" ? "ArrowDropUp" : "ArrowDropDown"}
                color={colors.custom.darkGrey}
                size="1rem"
                style={{ opacity: isSorted ? 1 : isHovered ? 0.35 : 0 }}
              />
            )}

            {!isResizable ? null : (
              <View
                className={css.resizeHandle}
                cursor="col-resize"
                height="100%"
                position="absolute"
                onClick={handleResizeClick}
                onPointerDown={handleResizeStart}
              />
            )}
          </View>
        );
      })}

      {expandableContent ? (
        <View minWidth={0} overflow="hidden" {...getDataGridCellLayout(expandColumnWidth)}>
          <Text preset={textPreset} />
        </View>
      ) : null}
    </View>
  );
};

const useClasses = makeClasses({
  cell: {
    "& > *": {
      maxWidth: "100%",
      minWidth: "0 !important",
    },
  },
  resizeHandle: {
    bottom: 0,
    right: 0,
    top: 0,
    width: "0.4rem",
    "&:hover": {
      background: colors.custom.blue,
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
});

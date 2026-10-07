import { useEffect, useMemo, useState } from "react";
import {
  clampDataGridColumnWidth,
  compareDataGridValues,
  DataGridColumn,
  DataGridColumnKey,
  DataGridHeader,
  DataGridProps,
  DataGridRow,
  DataGridRowData,
  DataGridSort,
  getDataGridColumnValue,
  getDataGridValueText,
  Input,
  Pagination,
  Text,
  View,
} from "trabecula/components";
import { colors } from "trabecula/utils/client";

export const DataGrid = <T extends object = DataGridRowData>({
  alternatingBgColor = colors.foregroundCard,
  alternatingColors = true,
  className,
  columns,
  data,
  defaultTextPreset,
  emptyColor = colors.custom.lightBlue,
  emptyJustify = "center",
  emptyMessage = "No data available",
  expandColumnWidth = "5rem",
  expandableContent,
  getRowBgColor,
  hasPagination = false,
  hasResizableColumns = false,
  hasSearch = false,
  hasSorting = false,
  headerBorder = "1px solid #000",
  initialSort,
  isExpanded,
  isRowSelected,
  onRowClick,
  rowAlign = "start",
  rowGap = "0.5rem",
  rowPadding = { all: "0.3rem" },
  rowsPerPage = 15,
  selectedBgColor = colors.custom.blue,
  selectedTextColor = colors.custom.white,
  spacing = "0.3rem",
  textPreset = "default",
}: DataGridProps<T>) => {
  const [columnResize, setColumnResize] = useState<DataGridColumnResize<T> | null>(null);
  const [columnWidths, setColumnWidths] = useState<Partial<Record<DataGridColumnKey<T>, number>>>(
    {},
  );
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<DataGridSort<T> | null>(initialSort ?? null);

  useEffect(() => {
    if (isExpanded === false) setExpandedRows(new Set());
  }, [isExpanded]);

  useEffect(() => {
    if (!columnResize) return;

    const bodyCursor = document.body.style.cursor;
    const bodyUserSelect = document.body.style.userSelect;

    const handlePointerMove = (event: PointerEvent) => {
      const width = clampDataGridColumnWidth(
        columnResize.startWidth + event.clientX - columnResize.startClientX,
        columnResize.minWidth,
        columnResize.maxWidth,
      );

      setColumnWidths((prev) =>
        prev[columnResize.key] === width ? prev : { ...prev, [columnResize.key]: width },
      );
    };

    const handlePointerUp = () => setColumnResize(null);

    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.body.style.cursor = bodyCursor;
      document.body.style.userSelect = bodyUserSelect;
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, [columnResize]);

  useEffect(() => {
    setPage(1);
  }, [data, search, sort]);

  const resizedColumns = useMemo(
    () =>
      columns.map((column) => {
        const width = columnWidths[column.key];

        return width === undefined ? column : { ...column, width: `${width}px` };
      }),
    [columns, columnWidths],
  );

  const filteredData = useMemo(() => {
    const indexedData = data.map((row, index) => ({ index, row }));
    const searchTerms = search.trim().toLowerCase().split(/\s+/).filter(Boolean);

    if (!searchTerms.length) return indexedData;

    const searchColumns = columns.filter((column) => column.searchable !== false);

    return indexedData.filter(({ row }) => {
      const searchText = searchColumns
        .map((column) => getDataGridValueText(getDataGridColumnValue(row, column, "search")))
        .join(" ")
        .toLowerCase();

      return searchTerms.every((term) => searchText.includes(term));
    });
  }, [columns, data, search]);

  const sortedData = useMemo(() => {
    if (!hasSorting || !sort) return filteredData;

    const column = columns.find(({ key }) => key === sort.key);

    if (!column || column.sortable === false) return filteredData;

    return filteredData
      .map((item) => ({ item, value: getDataGridColumnValue(item.row, column, "sort") }))
      .sort((a, b) => {
        const compared = compareDataGridValues(a.value, b.value);

        return compared === 0
          ? a.item.index - b.item.index
          : sort.direction === "asc"
            ? compared
            : -compared;
      })
      .map(({ item }) => item);
  }, [columns, filteredData, hasSorting, sort]);

  const pageSize = Number.isSafeInteger(rowsPerPage) && rowsPerPage > 0 ? rowsPerPage : 15;
  const pageCount = hasPagination ? Math.ceil(sortedData.length / pageSize) : 1;
  const currentPage = Math.min(page, Math.max(pageCount, 1));
  const displayedData = hasPagination
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  useEffect(() => {
    setPage((previous) => Math.min(previous, Math.max(pageCount, 1)));
  }, [pageCount]);

  const handleSort = (column: DataGridColumn<T>) => {
    setSort((prev) => ({
      direction: prev?.key === column.key && prev.direction === "asc" ? "desc" : "asc",
      key: column.key,
    }));
  };

  const handleColumnResizeStart = (
    column: DataGridColumn<T>,
    startWidth: number,
    startClientX: number,
  ) => {
    if (!startWidth) return;

    setColumnResize({
      key: column.key,
      maxWidth: column.maxWidth,
      minWidth: column.minWidth,
      startClientX,
      startWidth,
    });
  };

  return !data.length ? (
    <View display="flex" justify={emptyJustify}>
      <Text preset={textPreset} color={emptyColor}>
        {emptyMessage}
      </Text>
    </View>
  ) : (
    <View column spacing={spacing} width="100%">
      {!hasSearch ? null : (
        <View row justify="flex-end" align="center" spacing="0.5rem" width="100%">
          <Text preset={textPreset} whiteSpace="nowrap">
            {"Search all columns:"}
          </Text>

          <Input dense value={search} setValue={setSearch} height="1.5rem" width="16rem" />
        </View>
      )}

      <DataGridHeader
        columns={resizedColumns}
        expandableContent={expandableContent}
        expandColumnWidth={expandColumnWidth}
        hasResizableColumns={hasResizableColumns}
        hasSorting={hasSorting}
        headerBorder={headerBorder}
        onColumnResizeStart={handleColumnResizeStart}
        onSort={handleSort}
        rowGap={rowGap}
        sort={sort}
        textPreset={textPreset}
      />

      {!displayedData.length ? (
        <View display="flex" justify={emptyJustify}>
          <Text preset={textPreset} color={emptyColor}>
            {emptyMessage}
          </Text>
        </View>
      ) : (
        <View column width="100%">
          {displayedData.map(({ row }, index) => (
            <DataGridRow
              key={index}
              alternatingBgColor={alternatingBgColor}
              alternatingColors={alternatingColors}
              className={className}
              columns={resizedColumns}
              defaultTextPreset={defaultTextPreset ?? textPreset}
              expandableContent={expandableContent}
              expandedRows={expandedRows}
              expandColumnWidth={expandColumnWidth}
              getRowBgColor={getRowBgColor}
              index={index}
              isRowSelected={isRowSelected}
              onRowClick={onRowClick}
              row={row}
              rowAlign={rowAlign}
              rowGap={rowGap}
              rowPadding={rowPadding}
              selectedBgColor={selectedBgColor}
              selectedTextColor={selectedTextColor}
              setExpandedRows={setExpandedRows}
              textPreset={textPreset}
            />
          ))}
        </View>
      )}

      {!hasPagination ? null : (
        <Pagination inline count={pageCount} onChange={setPage} page={currentPage} />
      )}
    </View>
  );
};

interface DataGridColumnResize<T extends object> extends Pick<
  DataGridColumn<T>,
  "maxWidth" | "minWidth"
> {
  key: DataGridColumnKey<T>;
  startClientX: number;
  startWidth: number;
}

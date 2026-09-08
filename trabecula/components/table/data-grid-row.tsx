import React from "react";
import { Collapse } from "@mui/material";
import {
  Button,
  DataGridColumn,
  DataGridProps,
  getDataGridCellLayout,
  getDataGridColumnValue,
  getDataGridValueText,
  Text,
  View,
} from "trabecula/components";
import { colors, makeClasses } from "trabecula/utils/client";

export interface DataGridRowProps<T extends object> extends Pick<
  DataGridProps<T>,
  | "alternatingBgColor"
  | "alternatingColors"
  | "className"
  | "columns"
  | "defaultTextPreset"
  | "expandableContent"
  | "expandColumnWidth"
  | "getRowBgColor"
  | "isRowSelected"
  | "onRowClick"
  | "rowGap"
  | "selectedBgColor"
  | "selectedTextColor"
  | "textPreset"
> {
  expandedRows: Set<number>;
  index: number;
  row: T;
  setExpandedRows: React.Dispatch<Set<number>>;
}

export const DataGridRow = <T extends object>({
  alternatingBgColor,
  alternatingColors,
  className,
  columns,
  defaultTextPreset,
  expandableContent,
  expandedRows,
  expandColumnWidth,
  getRowBgColor,
  index,
  isRowSelected,
  onRowClick,
  row,
  rowGap,
  selectedBgColor,
  selectedTextColor,
  setExpandedRows,
  textPreset,
}: DataGridRowProps<T>) => {
  const { css, cx } = useClasses(null);

  const isExpanded = expandedRows.has(index);
  const isSelected = isRowSelected?.(row, index) ?? false;

  const getBackgroundColor = () =>
    getRowBgColor?.(row, index) ??
    (isSelected
      ? selectedBgColor
      : alternatingColors && index % 2 === 1
        ? alternatingBgColor
        : "transparent");

  const handleRowExpand = () => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(index)) newExpandedRows.delete(index);
    else newExpandedRows.add(index);
    setExpandedRows(newExpandedRows);
  };

  const renderCell = (column: DataGridColumn<T>) => {
    const textPresetForColumn = column.textPreset ?? defaultTextPreset;

    if (column.render) {
      const rendered = column.render({
        index,
        isExpanded,
        isSelected,
        row,
        value: row[column.key],
      });

      if (typeof rendered !== "string") return rendered;

      return (
        <Text
          preset={textPresetForColumn}
          textAlign={column.align || "left"}
          color={isSelected ? selectedTextColor : undefined}
          overflow="hidden"
          whiteSpace={column.wrapText === false ? "nowrap" : undefined}
          textOverflow={column.wrapText === false ? "ellipsis" : undefined}
          overflowWrap={column.wrapText !== false ? "break-word" : undefined}
          wordBreak={column.wrapText !== false ? "break-word" : undefined}
        >
          {rendered}
        </Text>
      );
    }

    return (
      <Text
        preset={textPresetForColumn}
        textAlign={column.align || "left"}
        color={isSelected ? selectedTextColor : undefined}
        overflow="hidden"
        whiteSpace={column.wrapText === false ? "nowrap" : undefined}
        textOverflow={column.wrapText === false ? "ellipsis" : undefined}
        overflowWrap={column.wrapText !== false ? "break-word" : undefined}
        wordBreak={column.wrapText !== false ? "break-word" : undefined}
      >
        {getDataGridValueText(getDataGridColumnValue(row, column, "search")) || "--"}
      </Text>
    );
  };

  return (
    <React.Fragment>
      <View
        row
        align="start"
        bgColor={getBackgroundColor()}
        cursor={onRowClick ? "pointer" : "default"}
        padding={{ all: "0.3rem" }}
        borderRadiuses={{ all: isExpanded ? "0.3rem 0.3rem 0 0" : "0.3rem" }}
        spacing={rowGap}
        minWidth={0}
        width="100%"
        onClick={() => onRowClick?.(row, index)}
        className={className}
      >
        {columns.map((column, columnIndex) => {
          const title =
            column.searchable === false
              ? undefined
              : getDataGridValueText(getDataGridColumnValue(row, column, "search")).trim() ||
                undefined;

          return (
            <View
              key={`${column.key}-${columnIndex}`}
              className={cx(css.cell, column.wrapText === false && css.noWrapCell)}
              minHeight="fit-content"
              minWidth={0}
              overflow="hidden"
              title={title}
              {...getDataGridCellLayout(column.width, column.minWidth, column.maxWidth)}
            >
              {renderCell(column)}
            </View>
          );
        })}

        {expandableContent ? (
          <View
            display="flex"
            justify="center"
            align="flex-start"
            height="100%"
            {...getDataGridCellLayout(expandColumnWidth)}
          >
            <Button
              type="link"
              text={
                <Text preset={textPreset} color={isSelected ? selectedTextColor : undefined}>
                  {isExpanded ? "Close" : "Open"}
                </Text>
              }
              iconRight={isExpanded ? "ArrowDropUp" : "ArrowDropDown"}
              onClick={(e) => {
                e.stopPropagation();
                handleRowExpand();
              }}
              textColor={colors.custom.lightBlue}
              underline="hover"
            />
          </View>
        ) : null}
      </View>

      {expandableContent ? (
        <Collapse in={isExpanded} sx={{ margin: 0, padding: 0 }} timeout={300} easing={"smooth"}>
          <View
            padding={{ all: 0 }}
            bgColor={getBackgroundColor()}
            borderRadiuses={{ all: "0 0 0.3rem 0.3rem" }}
          >
            {expandableContent(row, index)}
          </View>
        </Collapse>
      ) : null}
    </React.Fragment>
  );
};

const useClasses = makeClasses({
  cell: {
    "& > *": {
      maxWidth: "100%",
      minWidth: "0 !important",
    },
  },
  noWrapCell: {
    "& .MuiButton-root": {
      maxWidth: "100%",
      minWidth: "0 !important",
      overflow: "hidden",
    },
    "& .MuiButton-root > *": {
      maxWidth: "100%",
      minWidth: "0 !important",
    },
    "& .MuiTypography-root": {
      display: "block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: "100%",
    },
  },
});

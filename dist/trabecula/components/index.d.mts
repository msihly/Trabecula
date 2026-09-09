import * as react from 'react';
import react__default, { Ref, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, ReactNode, MouseEvent, ComponentProps, Dispatch, SetStateAction, ElementType, DetailedHTMLProps, ImgHTMLAttributes, HTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1, IconButtonProps as IconButtonProps$1, AutocompleteProps, Autocomplete, TextFieldProps, ListProps as ListProps$1, ListItemProps as ListItemProps$1, IconProps as IconProps$1, DialogProps, PaginationProps as PaginationProps$1, LinkProps as LinkProps$1, TypographyProps, AccordionProps as AccordionProps$1, TooltipProps as TooltipProps$2, ChipProps as ChipProps$2, DividerProps as DividerProps$1 } from '@mui/material';
import { b as CssColor, B as BorderRadiuses, a as Borders, C as CSS, M as Margins, P as Padding } from '../css-BUA_CbgU.mjs';
import { IconName as IconName$1 } from '../_generated/client/index.mjs';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { a as LogicalOp } from '../math-CE6iMN_S.mjs';
import { FixedSizeList } from 'react-window';
import { TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import 'csstype';
import '@mui/material/styles';
import 'tss-react';

type Forwarded<P, R> = (props: P, ref: Ref<R>) => JSX.Element;
declare function Comp<P, R = HTMLDivElement>(component: Forwarded<P, R>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<R>>;

interface ButtonProps extends Omit<ButtonProps$1, "children" | "color" | "component" | "endIcon" | "fullWidth" | "startIcon" | "type" | "variant"> {
    borderColorOnHover?: CssColor;
    borderRadiuses?: BorderRadiuses;
    borders?: Borders;
    boxShadow?: CSS["boxShadow"];
    color?: CssColor;
    colorOnHover?: CssColor;
    dense?: boolean;
    endNode?: ReactNode;
    fontFamily?: CSS["fontFamily"];
    fontSize?: CSS["fontSize"];
    fontWeight?: CSS["fontWeight"];
    height?: CSS["height"];
    icon?: IconName;
    iconProps?: Partial<IconProps>;
    iconRight?: IconName;
    iconSize?: string | number;
    justify?: CSS["justifyContent"];
    loading?: boolean;
    margins?: Margins;
    maxWidth?: CSS["maxWidth"];
    outlined?: boolean;
    outlineFill?: CssColor;
    outlineFillOnHover?: CssColor;
    padding?: Padding;
    startNode?: ReactNode;
    text?: ReactNode;
    textClassName?: string;
    textColor?: CssColor;
    textColorOnHover?: CssColor;
    textProps?: Omit<Partial<TextProps>, "color" | "fontFamily" | "fontSize" | "fontWeight">;
    textTransform?: CSS["textTransform"];
    tooltip?: TooltipProps$1["title"];
    tooltipProps?: Partial<TooltipProps$1>;
    type?: "button" | "link";
    underline?: "always" | "hover" | "none";
    variant?: "contained" | "outlined" | "text";
    whiteSpace?: CSS["whiteSpace"];
    width?: CSS["width"];
}
declare const Button: ({ borderColorOnHover, borderRadiuses, borders, boxShadow, className, color, colorOnHover, dense, endNode, fontFamily, fontSize, fontWeight, height, href, icon, iconProps, iconRight, iconSize, justify, loading, margins, maxWidth, onClick, outlined, outlineFill, outlineFillOnHover, padding, size, startNode, text, textClassName, textColor, textColorOnHover, textProps, textTransform, tooltip, tooltipProps, type, underline, variant, whiteSpace, width, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface ButtonWithInsetProps extends ButtonProps {
    insetText: string;
    insetWidth?: CSS["width"];
}
declare const ButtonWithInset: react.ForwardRefExoticComponent<Omit<ButtonWithInsetProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface ColorPickerProps extends Omit<ButtonProps, "onChange" | "value"> {
    color?: CssColor;
    label?: string;
    menuProps?: Partial<MenuButtonProps>;
    noIcon?: boolean;
    setValue: (val: CssColor | null) => void;
    swatches: CssColor[][];
    value: CssColor | null;
    viewProps?: ViewProps;
    width?: CSS["width"];
}
declare const ColorPicker: react.ForwardRefExoticComponent<Omit<ColorPickerProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface IconButtonProps extends Omit<IconButtonProps$1, "color"> {
    children?: ReactNode | ReactNode[];
    color?: CssColor;
    iconProps?: Partial<IconProps>;
    margins?: Margins;
    name?: IconName;
    padding?: Padding;
    tooltip?: TooltipWrapperProps["tooltip"];
    tooltipProps?: TooltipWrapperProps["tooltipProps"];
}
declare const IconButton: ({ children, className, color, disabled, iconProps, margins, name, onClick, padding, size, tooltip, tooltipProps, ...props }: IconButtonProps) => react_jsx_runtime.JSX.Element;

interface IconPickerProps extends Omit<ButtonProps, "onChange" | "value"> {
    color?: CssColor;
    label?: string;
    menuProps?: Partial<MenuButtonProps>;
    setValue: (val: IconName | null) => void;
    value: IconName | null;
    viewProps?: ViewProps;
    withStylePicker?: boolean;
    width?: CSS["width"];
}
declare const IconPicker: react.ForwardRefExoticComponent<Omit<IconPickerProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface MenuButtonProps extends IconButtonProps {
    bgColor?: CssColor;
    button?: (onOpen: (event: MouseEvent) => void) => ReactNode;
    children: ReactNode | ((onClose: () => void) => ReactNode);
    color?: CssColor;
    icon?: IconName;
    keepMounted?: boolean;
    menuWidth?: CSS["width"];
}
declare const MenuButton: ({ bgColor, button, children, color, icon, keepMounted, menuWidth, ...props }: MenuButtonProps) => react_jsx_runtime.JSX.Element;

interface MultiActionButtonProps extends IconButtonProps {
}
declare const MultiActionButton: ({ tooltipProps, ...props }: MultiActionButtonProps) => react_jsx_runtime.JSX.Element;

interface SortMenuProps extends Omit<ButtonProps, "onChange" | "value"> {
    color?: CssColor;
    hasHeader?: boolean;
    rows: {
        attribute: string;
        label: string;
        icon: IconName;
        iconProps?: Partial<IconProps>;
    }[];
    setValue: (value: {
        isDesc: boolean;
        key: string;
    }) => void;
    value: {
        isDesc: boolean;
        key: string;
    };
    width?: CSS["width"];
}
declare const SortMenu: ({ color, hasHeader, height, rows, setValue, value, width, ...buttonProps }: SortMenuProps) => react_jsx_runtime.JSX.Element;

interface SortRowProps {
    attribute: string;
    label: string;
    icon: IconName;
    iconProps?: Partial<IconProps>;
    setValue: SortMenuProps["setValue"];
    value: SortMenuProps["value"];
}
declare const SortRow: ({ attribute, label, icon, iconProps, setValue, value, }: SortRowProps) => react_jsx_runtime.JSX.Element;

type AutoCompleteOption = {
    label: string;
    value: any;
};
declare const createAutoCompleteOptions: (values: any[]) => AutoCompleteOption[];
interface AutoCompleteProps extends Omit<AutocompleteProps<any, any, any, any>, "fullWidth" | "onChange" | "options" | "renderInput"> {
    inputProps?: InputProps;
    header?: InputProps["header"];
    onChange?: (val: any) => any;
    options: AutoCompleteOption[];
    required?: boolean;
}
declare const AutoComplete: react.ForwardRefExoticComponent<Omit<AutoCompleteProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

type ChipOption = {
    label: string;
    value: any;
};
type ChipInputProps = Omit<ComponentProps<typeof Autocomplete>, "renderInput" | "onChange" | "options"> & {
    opaque?: boolean;
    options?: ChipOption[];
    setValue?: (val: any) => void;
    value: ChipOption[];
};
declare const ChipInput: react.ForwardRefExoticComponent<Omit<ChipInputProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface DateInputProps extends Omit<DatePickerProps<dayjs.Dayjs>, "label" | "onChange" | "value"> {
    header?: ReactNode;
    headerProps?: Partial<ViewProps>;
    inputProps?: Omit<Partial<InputProps>, "header" | "headerProps">;
    setValue?: (val: string) => void;
    value: string;
    viewProps?: Partial<ViewProps>;
    width?: CSS["width"];
}
declare const DateInput: react.ForwardRefExoticComponent<DateInputProps & react.RefAttributes<HTMLDivElement>>;

interface DateRangeProps {
    dateInputProps?: Partial<DateInputProps>;
    endDate: string;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    setEndDate: (val: string) => void;
    setStartDate: (val: string) => void;
    startDate: string;
}
declare const DateRange: react.ForwardRefExoticComponent<DateRangeProps & react.RefAttributes<HTMLDivElement>>;

type DropdownOption<T = string> = {
    label: string;
    value: T;
};
interface DropdownProps<T = string> extends Omit<InputProps, "header" | "label" | "setValue" | "value"> {
    autoHighlight?: boolean;
    autoSelect?: boolean;
    borderColor?: CssColor;
    caretColor?: CssColor;
    caretSize?: string | number;
    freeSolo?: boolean;
    header?: ReactNode;
    inputFontSize?: CSS["fontSize"];
    inputFontWeight?: CSS["fontWeight"];
    inputHeight?: CSS["height"];
    inputLineHeight?: CSS["lineHeight"];
    inputOutlineWidth?: CSS["borderWidth"];
    inputPadding?: CSS["padding"];
    inputRootAlignItems?: CSS["alignItems"];
    inputRootHeight?: CSS["height"];
    inputRootMinHeight?: CSS["minHeight"];
    inputRootPadding?: CSS["padding"];
    itemBgColor?: CssColor;
    label?: ReactNode;
    listboxBorder?: CSS["border"];
    listboxBorderRadius?: CSS["borderRadius"];
    menuItemBorder?: CSS["borderBottom"];
    menuItemMinHeight?: CSS["minHeight"];
    menuItemPadding?: CSS["padding"];
    menuItemSelectedBgColor?: CssColor;
    optionTextProps?: Partial<TextProps>;
    options: DropdownOption<T>[];
    paperBorder?: CSS["border"];
    paperBorderRadius?: CSS["borderRadius"];
    setValue: (value: T | undefined) => void;
    textColor?: CssColor;
    value: T;
    withClearButton?: boolean;
    withValueTest?: boolean;
}
declare function Dropdown<T = string>({ autoHighlight, autoSelect, borderColor, caretColor, caretSize, dense, disabled, freeSolo, header, headerProps, inputFontSize, inputFontWeight, inputHeight, inputLineHeight, inputOutlineWidth, inputPadding, inputProps, inputRootAlignItems, inputRootHeight, inputRootMinHeight, inputRootPadding, InputProps, itemBgColor, label, labelProps, labelTextProps, listboxBorder, listboxBorderRadius, menuItemBorder, menuItemMinHeight, menuItemPadding, menuItemSelectedBgColor, optionTextProps, options, paperBorder, paperBorderRadius, required, setValue, textColor, value, withClearButton, withValueTest, ...props }: DropdownProps<T>): react_jsx_runtime.JSX.Element;

type FilterStore = {
    applySavedSearch: (id: string) => any;
    deleteSavedSearch: (id?: string) => Promise<any>;
    hasChanges: boolean;
    isDeleteModalOpen: boolean;
    isLoading: boolean;
    isSaveModalOpen: boolean;
    loadSavedSearches: () => Promise<any>;
    loadFiltered: (options?: {
        noCache?: boolean;
        page?: number;
    }) => Promise<any>;
    reset: () => any;
    saveSavedSearch: (label: string) => Promise<any>;
    savedSearches: Array<{
        id: string;
        label: string;
    }>;
    selectedSavedSearchId: string;
    setPageCount: (count: number) => any;
    setIsDeleteModalOpen: (value: boolean) => any;
    setIsSaveModalOpen: (value: boolean) => any;
    setSortValue: (val: {
        isDesc: boolean;
        key: string;
    }) => any;
    sortValue: {
        isDesc: boolean;
        key: string;
    };
};
interface FilterMenuProps extends Omit<ButtonProps, "onChange" | "value"> {
    children: ReactNode | ReactNode[];
    color?: CssColor;
    menuProps?: Partial<MenuButtonProps>;
    resetFn?: () => void;
    sortOptions: SortMenuProps["rows"];
    store: FilterStore;
    viewProps?: ViewProps;
    width?: CSS["width"];
}
declare const FilterMenu: react.ForwardRefExoticComponent<Omit<FilterMenuProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const DENSE_INPUT_PADDING = "0.1rem 0.5rem";
declare const DEFAULT_INPUT_HEADER_PROPS: HeaderWrapperProps["headerProps"];
interface InputProps extends Omit<TextFieldProps, "color" | "fullWidth" | "helperText" | "label"> {
    adornment?: ReactNode;
    adornmentColor?: CssColor;
    adornmentPosition?: "end" | "start";
    background?: CssColor;
    borderRadiuses?: BorderRadiuses;
    borders?: Borders;
    className?: string;
    color?: CssColor;
    dense?: boolean;
    flex?: CSS["flex"];
    fontFamily?: CSS["fontFamily"];
    fontSize?: CSS["fontSize"];
    fontWeight?: CSS["fontWeight"];
    hasHelper?: boolean;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    height?: CSS["height"];
    helperText?: ReactNode;
    helperTextProps?: Partial<TextProps>;
    label?: HeaderWrapperProps["header"];
    labelProps?: HeaderWrapperProps["headerProps"];
    labelTextProps?: HeaderWrapperProps["textProps"];
    margins?: Margins;
    maxLength?: number;
    minWidth?: CSS["minWidth"];
    noFade?: boolean;
    onEnter?: () => any;
    padding?: Padding;
    setValue?: (value: string) => any;
    textAlign?: CSS["textAlign"];
    textColor?: CssColor;
    value?: string;
    width?: CSS["width"];
}
declare const Input: react.ForwardRefExoticComponent<Omit<InputProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface LogOpsInputProps extends ViewProps {
    dropdownProps?: Partial<DropdownProps>;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    logOpValue: "" | LogicalOp;
    numInputProps?: Partial<NumInputProps>;
    numValue: number;
    numValueDisplay?: string;
    setLogOpValue: (val: LogicalOp) => void;
    setNumValue?: (val: number) => void;
    setNumValueDisplay?: (val: string) => void;
}
declare const LogOpsInput: react.ForwardRefExoticComponent<LogOpsInputProps & react.RefAttributes<HTMLDivElement>>;

interface MultiInputProps<T = string> {
    hasDelete?: boolean;
    hasDeleteAll?: boolean;
    hasEditor?: boolean;
    hasHelper?: boolean;
    hasList?: boolean;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    inputProps?: InputProps;
    max?: number;
    onChange: (val: T[]) => void;
    single?: boolean;
    value: T[];
}
declare const MultiInput: react.ForwardRefExoticComponent<MultiInputProps<string> & react.RefAttributes<HTMLDivElement>>;

interface MultiInputListProps<T = string> {
    hasDelete?: boolean;
    hasDeleteAll?: boolean;
    hasInput?: boolean;
    renderRow?: (index: number, style: React.CSSProperties) => JSX.Element;
    search: {
        onChange: (val: T[]) => void;
        value: T[];
    };
    viewProps?: Partial<ViewProps>;
}
declare const MultiInputList: react.ForwardRefExoticComponent<MultiInputListProps<unknown> & react.RefAttributes<FixedSizeList<any>>>;

declare const MULTI_INPUT_ROW_HEIGHT = 35;
type MultiInputRowOption<T = string> = {
    label: string;
    value: T;
};
interface MultiInputRowProps<T> {
    bgColor?: CssColor;
    hasDelete?: boolean;
    leftNode?: React.ReactNode;
    onClick?: (value: T) => void;
    rightNode?: React.ReactNode;
    search: {
        onChange: (val: T[]) => void;
        value: T[];
    };
    style?: React.CSSProperties;
    value: T;
    valueExtractor?: (value: T) => string;
}
declare const MultiInputRow: <T>({ bgColor, ...props }: MultiInputRowProps<T>) => react_jsx_runtime.JSX.Element;

interface NumInputProps extends Omit<InputProps, "setValue" | "value"> {
    maxValue?: number;
    minValue?: number;
    setValue?: (value: number) => void;
    setValueDisplay?: (value: string) => void;
    value?: number;
    valueDisplay?: string;
}
declare const NumInput: react.ForwardRefExoticComponent<Omit<NumInputProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface NumRangeProps {
    hasHelper?: boolean;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    max: number;
    min: number;
    numInputProps?: Partial<NumInputProps>;
    setMax: (val: number) => void;
    setMin: (val: number) => void;
}
declare const NumRange: react.ForwardRefExoticComponent<NumRangeProps & react.RefAttributes<HTMLDivElement>>;

type RangeWrapperProps = {
    endInput: JSX.Element;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    startInput: JSX.Element;
};
declare const RangeWrapper: react.ForwardRefExoticComponent<RangeWrapperProps & react.RefAttributes<HTMLDivElement>>;

interface TimeInputProps extends Omit<TimePickerProps<dayjs.Dayjs>, "label" | "onChange" | "value"> {
    inputProps?: Omit<Partial<InputProps>, "label" | "labelProps">;
    label?: InputProps["label"];
    labelProps?: InputProps["labelProps"];
    setValue?: (val: string) => void;
    value: string;
    viewProps?: Partial<ViewProps>;
    width?: CSS["width"];
}
declare const TimeInput: (rawProps: TimeInputProps) => react_jsx_runtime.JSX.Element;

type Row = {
    label: string | ReactNode;
    value: string | ReactNode;
};
interface DetailRowsProps {
    labelWidth?: CSS["maxWidth"];
    rows: Row[];
}
declare const DetailRows: ({ labelWidth, rows }: DetailRowsProps) => react_jsx_runtime.JSX.Element;

interface ListProps extends ListProps$1 {
    dividerColor?: CssColor;
    noDividers?: boolean;
}
declare const List: ({ children, className, dividerColor, noDividers, ...props }: ListProps) => react_jsx_runtime.JSX.Element;

interface ListItemProps extends Omit<ListItemProps$1, "children"> {
    children?: ReactNode;
    color?: CssColor;
    icon?: IconName;
    iconProps?: Partial<IconProps>;
    iconEnd?: IconName;
    iconEndMargins?: Margins;
    iconMargins?: Margins;
    onClick?: (event?: MouseEvent) => void;
    text: ReactNode;
}
declare const ListItem: ({ children, color, icon, iconProps, iconEnd, iconEndMargins, iconMargins, onClick, text, ...props }: ListItemProps) => react_jsx_runtime.JSX.Element;

type IconName = IconName$1;
interface IconLayer {
    color?: CssColor;
    name: IconName & string;
    rotation?: number;
    size?: number | string;
    x?: number | string;
    y?: number | string;
}
interface IconProps extends Omit<IconProps$1, "color" | "fontSize"> {
    color?: CssColor;
    layers?: IconLayer[];
    name?: IconName & string;
    rotation?: number;
    margins?: Margins;
    size?: number | string;
    viewProps?: Partial<Omit<ViewProps, "className" | "margins">>;
}
declare const Icon: ({ className, color, layers, margins, name, rotation, size, style, viewProps, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

interface ConfirmModalProps {
    cancelColor?: CssColor;
    cancelIcon?: IconName;
    cancelText?: string;
    children?: ReactNode | ReactNode[];
    confirmColor?: CssColor;
    confirmIcon?: IconName;
    confirmText?: string;
    headerText?: string;
    height?: CSS["height"];
    onCancel?: () => void;
    onConfirm: () => Promise<boolean>;
    setVisible: Dispatch<SetStateAction<boolean>>;
    subText?: string;
    width?: CSS["width"];
}
declare const ConfirmModal: ({ cancelColor, cancelIcon, cancelText, children, confirmColor, confirmIcon, confirmText, headerText, height, onCancel, onConfirm, setVisible, subText, width, }: ConfirmModalProps) => react_jsx_runtime.JSX.Element;

interface HeaderProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    justify?: CSS["justifyContent"];
    leftNode?: ReactNode;
    rightNode?: ReactNode;
}

interface FooterProps$1 extends UniformListProps {
}

interface ContentProps extends ViewProps {
    children: ReactNode | ReactNode[];
    className?: string;
    dividers?: boolean;
    overflow?: CSS["overflow"];
    padding?: Padding;
    position?: CSS["position"];
}

interface ContainerProps$1 extends Omit<DialogProps, "maxWidth" | "open" | "onClose" | "title"> {
    closeOnBackdrop?: boolean;
    height?: CSS["height"];
    isLoading?: boolean;
    maxHeight?: CSS["maxHeight"];
    maxWidth?: CSS["maxWidth"];
    onClose?: () => void;
    visible?: boolean;
    width?: CSS["width"];
}

declare const Modal: {
    Container: ({ children, className, closeOnBackdrop, draggable, height, isLoading, maxHeight, maxWidth, onClose, scroll, visible, width, ...props }: ContainerProps$1) => react_jsx_runtime.JSX.Element;
    Content: ({ children, className, dividers, overflow, padding, position, ...viewProps }: ContentProps) => react_jsx_runtime.JSX.Element;
    Footer: ({ children, uniformWidth, ...props }: FooterProps$1) => react_jsx_runtime.JSX.Element;
    Header: ({ children, className, justify, leftNode, rightNode, }: HeaderProps) => react_jsx_runtime.JSX.Element;
};

interface ProgressBarProps {
    denominator: number;
    denominatorFormatter?: (num: number) => string;
    minWidth?: CSS["minWidth"];
    numerator: number;
    numeratorFormatter?: (num: number) => string;
    viewProps?: ViewProps;
    withText?: boolean;
}
declare const ProgressBar: react.ForwardRefExoticComponent<ProgressBarProps & react.RefAttributes<HTMLDivElement>>;

interface ProgressCircleProps {
    bgColor?: CssColor;
    children?: ReactNode | ReactNode[];
    color?: CssColor;
    percent: number;
    size?: number | string;
}
declare const ProgressCircle: react.ForwardRefExoticComponent<ProgressCircleProps & react.RefAttributes<HTMLDivElement>>;

declare function DataGrid<T extends object = DataGridRowData>(rawProps: DataGridProps<T>): react_jsx_runtime.JSX.Element;

type DataGridRowData = Record<string, unknown>;
type DataGridColumnKey<T extends object> = Extract<keyof T, string>;
interface DataGridRenderContext<T extends object, K extends DataGridColumnKey<T>> {
    index: number;
    isExpanded: boolean;
    isSelected: boolean;
    row: T;
    value: T[K] | undefined;
}
type DataGridRender<T extends object, K extends DataGridColumnKey<T>> = (context: DataGridRenderContext<T, K>) => ReactNode;
type DataGridSortDirection = "asc" | "desc";
interface DataGridSort<T extends object = DataGridRowData> {
    direction: DataGridSortDirection;
    key: DataGridColumnKey<T>;
}
type DataGridValue = boolean | Date | null | number | string | undefined;
type DataGridColumn<T extends object = DataGridRowData> = {
    [K in DataGridColumnKey<T>]: DataGridColumnConfig<T, K>;
}[DataGridColumnKey<T>];
interface DataGridColumnConfig<T extends object, K extends DataGridColumnKey<T>> {
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
interface DataGridProps<T extends object = DataGridRowData> {
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

interface DataGridCellLayoutProps {
    flex?: CSS["flex"];
    maxWidth?: CSS["maxWidth"];
    minWidth?: CSS["minWidth"];
    width?: CSS["width"];
}
declare const getDataGridCellLayout: (width: CSS["width"] | string | number | undefined, minWidth?: CSS["minWidth"], maxWidth?: CSS["maxWidth"]) => DataGridCellLayoutProps;
declare const clampDataGridColumnWidth: (width: number, minWidth: CSS["minWidth"], maxWidth: CSS["maxWidth"]) => number;
declare const compareDataGridValues: (a: DataGridValue, b: DataGridValue) => number;
declare const getDataGridColumnValue: <T extends object>(row: T, column: DataGridColumn<T>, mode: "search" | "sort") => DataGridValue;
declare const getDataGridValueText: (value: DataGridValue) => string;

interface DataGridHeaderProps<T extends object> extends Pick<DataGridProps<T>, "columns" | "expandableContent" | "expandColumnWidth" | "headerBorder" | "rowGap" | "textPreset"> {
    hasResizableColumns: boolean;
    onColumnResizeStart: (column: DataGridProps<T>["columns"][number], startWidth: number, startClientX: number) => void;
    hasSorting: boolean;
    onSort: (column: DataGridProps<T>["columns"][number]) => void;
    sort: DataGridProps<T>["initialSort"] | null;
}
declare const DataGridHeader: <T extends object>({ columns, expandableContent, expandColumnWidth, headerBorder, hasResizableColumns, hasSorting, onColumnResizeStart, onSort, rowGap, sort, textPreset, }: DataGridHeaderProps<T>) => react_jsx_runtime.JSX.Element;

interface DataGridRowProps<T extends object> extends Pick<DataGridProps<T>, "alternatingBgColor" | "alternatingColors" | "className" | "columns" | "defaultTextPreset" | "expandableContent" | "expandColumnWidth" | "getRowBgColor" | "isRowSelected" | "onRowClick" | "rowGap" | "selectedBgColor" | "selectedTextColor" | "textPreset"> {
    expandedRows: Set<number>;
    index: number;
    row: T;
    setExpandedRows: react__default.Dispatch<Set<number>>;
}
declare const DataGridRow: <T extends object>({ alternatingBgColor, alternatingColors, className, columns, defaultTextPreset, expandableContent, expandedRows, expandColumnWidth, getRowBgColor, index, isRowSelected, onRowClick, row, rowGap, selectedBgColor, selectedTextColor, setExpandedRows, textPreset, }: DataGridRowProps<T>) => react_jsx_runtime.JSX.Element;

interface PaginationProps extends Omit<PaginationProps$1, "onChange"> {
    isLoading?: boolean;
    onChange: (page: number) => void;
    onFullLoad?: () => void;
    viewProps?: Partial<ViewProps>;
}
declare const Pagination: react.ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface TableColumn<T> {
    header: string;
    valueFunc: (row: T) => ReactNode;
    className?: string;
    wrap?: boolean;
}
interface TableProps<T> {
    className?: string;
    columns: TableColumn<T>[];
    hasEmptyRows?: boolean;
    hasPagination?: boolean;
    rowCountOptions?: number[];
    paginationClassName?: string;
    rows: T[];
}
declare const Table: <T extends object>({ className, columns, hasEmptyRows, hasPagination, rowCountOptions, rows, paginationClassName, }: TableProps<T>) => react_jsx_runtime.JSX.Element;

interface CenteredTextProps extends TextProps {
    color?: CssColor;
    text: string;
    viewProps?: Partial<ViewProps>;
}
declare const CenteredText: ({ color, text, viewProps, ...props }: CenteredTextProps) => react_jsx_runtime.JSX.Element;

interface DateDetailProps extends DetailProps {
    value: string;
}
declare const DateDetail: (props: DateDetailProps) => react_jsx_runtime.JSX.Element;

interface DetailProps extends ViewProps {
    emptyValueText?: string;
    label: ReactNode;
    labelProps?: Partial<TextProps>;
    overflow?: CSS["overflow"];
    tooltip?: ReactNode;
    value: ReactNode;
    valueProps?: Partial<TextProps>;
    whiteSpace?: CSS["whiteSpace"];
    withTooltip?: boolean;
}
declare const Detail: ({ emptyValueText, label, labelProps, overflow, row, tooltip, value, valueProps, whiteSpace, withTooltip, ...props }: DetailProps) => react_jsx_runtime.JSX.Element;

interface LinkProps extends Omit<LinkProps$1, "color"> {
    bold?: boolean;
    color?: CssColor;
}
declare const Link: ({ bold, children, className, color, fontSize, fontWeight, rel, target, underline, ...props }: LinkProps) => react_jsx_runtime.JSX.Element;

type TextPreset = "default" | "detail-label" | "label-glow" | "sub-text" | "title";
declare const PRESETS: Record<TextPreset, CSS>;
interface TextProps extends Omit<TypographyProps, "color" | "component" | "fontSize" | "fontWeight" | "lineHeight" | "opacity" | "overflow" | "textDecoration" | "title" | "variant"> {
    bold?: boolean;
    color?: CssColor;
    component?: ElementType;
    fontSize?: CSS["fontSize"];
    fontWeight?: CSS["fontWeight"];
    italic?: boolean;
    lineHeight?: CSS["lineHeight"];
    opacity?: CSS["opacity"];
    overflow?: CSS["overflow"];
    overflowWrap?: CSS["overflowWrap"];
    preset?: TextPreset;
    tooltip?: TooltipProps$1["title"];
    tooltipProps?: Partial<TooltipProps$1>;
    textOverflow?: CSS["textOverflow"];
    whiteSpace?: CSS["whiteSpace"];
    wordBreak?: CSS["wordBreak"];
}
declare const Text: {
    ({ bold, children, className, color, component, fontFamily, fontSize, fontWeight, italic, lineHeight, opacity, overflow, overflowWrap, preset, tooltip, tooltipProps, textOverflow, whiteSpace, wordBreak, ...props }: TextProps): react_jsx_runtime.JSX.Element;
    Inline(props: Omit<TextProps, "component">): react_jsx_runtime.JSX.Element;
};

interface TextTruncation {
    isTruncated: boolean;
    preview: string;
    remainder: string;
    truncationIndex: number;
}
interface TruncatedTextProps extends Omit<TextProps, "children"> {
    expanded?: boolean;
    maxLength: number;
    text: string;
    ellipsis?: ReactNode;
    lineClamp?: number;
    wordBoundaryRatio?: number;
}
interface TruncatedTextRemainderProps extends Omit<TextProps, "children"> {
    maxLength: number;
    text: string;
    wordBoundaryRatio?: number;
}
declare const getTextTruncation: (text: string, maxLength: number, wordBoundaryRatio?: number) => TextTruncation;
declare const TruncatedText: {
    ({ expanded, maxLength, text, ellipsis, lineClamp, wordBoundaryRatio, display, overflow, overflowWrap, sx, textOverflow, wordBreak, ...textProps }: TruncatedTextProps): react_jsx_runtime.JSX.Element;
    Remainder({ maxLength, text, wordBoundaryRatio, ...textProps }: TruncatedTextRemainderProps): react_jsx_runtime.JSX.Element;
};

interface AccordionProps extends Omit<AccordionProps$1, "children" | "expanded" | "onChange" | "title"> {
    children: ReactNode | ReactNode[];
    buttonProps?: Partial<ButtonProps>;
    color?: CssColor;
    contentPadding?: CSS["padding"];
    borderColor?: CssColor;
    dense?: boolean;
    expanded?: boolean;
    fullWidth?: boolean;
    header?: ReactNode;
    headerBgColor?: CssColor;
    headerBorderMode?: "always" | "expanded" | "visibleBorder";
    headerBorderColor?: CssColor;
    headerButton?: ReactNode;
    headerPadding?: CSS["padding"];
    isExpanded?: boolean;
    isLoading?: boolean;
    onToggle?: () => void;
    setExpanded?: (expanded: boolean) => void;
    showBorder?: boolean;
    showExpandToggle?: boolean;
    title?: ReactNode;
    titleProps?: Partial<TextProps>;
    toggleButtonProps?: Partial<ButtonProps>;
    width?: CSS["width"];
}
declare const Accordion: (rawProps: AccordionProps) => react_jsx_runtime.JSX.Element;

interface AccordionGroupProps {
    children: ReactNode;
    defaultExpanded?: boolean;
    sectionIds: readonly string[];
}
declare const AccordionGroup: ({ children, defaultExpanded, sectionIds, }: AccordionGroupProps) => react_jsx_runtime.JSX.Element;
declare const useAccordionGroup: () => {
    allExpanded: boolean;
    setAllExpanded: (expanded: boolean) => void;
    toggleAll: () => void;
};
declare const useAccordionGroupSection: (sectionId: string) => {
    isExpanded: boolean;
    setExpanded: (expanded: boolean) => void;
};

type CheckboxState = "false" | "null" | "true";
interface CheckboxProps {
    center?: boolean;
    checked: boolean;
    checkedIcon?: ReactNode;
    className?: string;
    color?: CssColor;
    disabled?: boolean;
    flex?: CSS["flex"];
    indeterminate?: boolean;
    indeterminateColor?: CssColor;
    icon?: ReactNode;
    label?: ReactNode;
    labelProps?: Omit<Partial<TextProps>, "children">;
    margins?: Margins;
    noHover?: boolean;
    padding?: Padding;
    setChecked: (checked: boolean, ternary?: boolean) => void;
    stateIcons?: Partial<Record<CheckboxState, ReactNode>>;
    ternary?: boolean;
    ternaryColor?: CssColor;
    ternaryIcon?: ReactNode;
    whiteSpace?: CSS["whiteSpace"];
    width?: CSS["width"];
}
declare const Checkbox: ({ center, checked, checkedIcon, className, color, disabled, flex, indeterminate, indeterminateColor, icon, label, labelProps, margins, noHover, padding, setChecked, stateIcons, ternary, ternaryColor, ternaryIcon, whiteSpace, width, }: CheckboxProps) => react_jsx_runtime.JSX.Element;

interface RadioProps {
    boldWhenChecked?: boolean;
    center?: boolean;
    checked: boolean;
    checkedIcon?: ReactNode;
    className?: string;
    color?: CssColor;
    disabled?: boolean;
    flex?: CSS["flex"];
    fontFamily?: CSS["fontFamily"];
    icon?: ReactNode;
    label?: ReactNode;
    margins?: Margins;
    name?: string;
    noHover?: boolean;
    padding?: Padding;
    setChecked: (checked: boolean) => void;
    value?: string | number | boolean;
    whiteSpace?: CSS["whiteSpace"];
    width?: CSS["width"];
}
declare const Radio: (rawProps: RadioProps) => react_jsx_runtime.JSX.Element;

interface TooltipProps$1 extends Omit<TooltipProps$2, "children" | "color"> {
    borderColor?: CssColor;
    bgColor?: CssColor;
    children: JSX.Element;
    color?: CssColor;
    flexShrink?: CSS["flexShrink"];
    fontSize?: CSS["fontSize"];
    maxWidth?: CSS["maxWidth"];
    minWidth?: CSS["minWidth"];
    padding?: CSS["padding"];
    viewProps?: Partial<ViewProps>;
}
declare const Tooltip: ({ arrow, bgColor, borderColor, children, color, flexShrink, fontSize, minWidth, maxWidth, padding, placement, title, viewProps, ...props }: TooltipProps$1) => react_jsx_runtime.JSX.Element;

interface TooltipWrapperProps {
    children: JSX.Element | JSX.Element[];
    tooltip?: TooltipProps$1["title"];
    tooltipProps?: Partial<TooltipProps$1>;
}
declare const TooltipWrapper: ({ children, tooltip, tooltipProps }: TooltipWrapperProps) => react_jsx_runtime.JSX.Element;

interface CardProps extends ViewProps {
    boxShadow?: CSS["boxShadow"];
    elevated?: boolean;
    header?: ReactNode;
    headerProps?: Partial<ViewProps>;
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;

interface TooltipProps {
    children: JSX.Element;
    disabled?: boolean;
    tooltip: JSX.Element | JSX.Element[];
}

interface ImageProps extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt" | "height" | "src" | "title" | "width"> {
    autoAnimate?: boolean;
    children?: ReactNode | ReactNode[];
    disabled?: boolean;
    draggable?: boolean;
    fit?: "contain" | "cover";
    height?: CSS["height"];
    rounded?: "all" | "bottom" | "top";
    title?: string;
    thumbPaths: string[];
}

interface FooterTextProps {
    text: string;
}

interface FooterProps {
    children?: ReactNode | ReactNode[];
}

interface ContainerProps extends ViewProps {
    children: ReactNode | ReactNode[];
    className?: string;
    disabled?: boolean;
    display?: CSS["display"];
    height?: CSS["height"];
    onClick?: (event: MouseEvent) => void;
    onDoubleClick?: () => void;
    selected?: boolean;
    selectedColor?: CssColor;
    width?: CSS["width"];
}

interface ChipProps$1 extends ChipProps {
    hasFooter?: boolean;
    flush?: boolean;
    opacity?: number;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

declare const CardBase: {
    Chip: ({ bgColor, hasFooter, flush, opacity, position, ...props }: ChipProps$1) => react_jsx_runtime.JSX.Element;
    Container: ({ children, className, disabled, display, height, onClick, onDoubleClick, selected, selectedColor, width, ...viewProps }: ContainerProps) => react_jsx_runtime.JSX.Element;
    Footer: ({ children }: FooterProps) => react_jsx_runtime.JSX.Element;
    FooterText: (props: FooterTextProps) => react_jsx_runtime.JSX.Element;
    Image: ({ autoAnimate, children, className, disabled, draggable, fit, height, loading, onDragEnd, onDragStart, rounded, thumbPaths, title, }: ImageProps) => react_jsx_runtime.JSX.Element;
    Tooltip: ({ children, tooltip }: TooltipProps) => react_jsx_runtime.JSX.Element;
};

interface CardGridProps extends ViewProps {
    cards: ReactNode[];
    cardsProps?: ViewProps;
    children?: ReactNode;
    flexFlow?: CSS["flexFlow"];
    maxCards?: number;
    noResultsText?: string;
    position?: CSS["position"];
}
declare const CardGrid: react.ForwardRefExoticComponent<CardGridProps & react.RefAttributes<HTMLDivElement>>;

interface ChipProps extends Omit<ChipProps$2, "color" | "icon"> {
    bgColor?: CssColor;
    className?: string;
    color?: CssColor;
    fontSize?: CSS["fontSize"];
    fontWeight?: CSS["fontWeight"];
    height?: CSS["height"];
    icon?: IconName;
    iconColor?: CssColor;
    iconProps?: Partial<IconProps>;
    label: ReactNode;
    padding?: Padding;
    radiuses?: BorderRadiuses;
    width?: CSS["width"];
}
declare const Chip: react.ForwardRefExoticComponent<Omit<ChipProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface ConditionalWrapProps {
    children: JSX.Element | JSX.Element[];
    condition: boolean;
    wrap: (children: JSX.Element | JSX.Element[]) => JSX.Element;
}
declare const ConditionalWrap: ({ condition, wrap, children, }: ConditionalWrapProps) => JSX.Element;

interface MenuItem {
    color?: CssColor;
    divider?: "bottom" | "top";
    icon: IconName;
    iconProps?: Partial<IconProps>;
    label: string;
}
interface ContextMenuProps extends ViewProps {
    children: ReactNode;
    disabled?: boolean;
    id: string;
    menuItems: Array<MenuItem & ({
        onClick?: never;
        subItems: Array<MenuItem & {
            onClick: () => void;
        }>;
    } | {
        onClick: () => void;
        subItems?: never;
    })>;
}
declare const ContextMenu: ({ children, disabled, id, menuItems, ...props }: ContextMenuProps) => react_jsx_runtime.JSX.Element;

interface DisabledOverlayProps {
    children?: ReactNode | ReactNode[];
    isDisabled: boolean;
    zIndex?: number;
}
declare const DisabledOverlay: ({ children, isDisabled, zIndex, }: DisabledOverlayProps) => react_jsx_runtime.JSX.Element;

interface DividerProps extends Omit<DividerProps$1, "color" | "sx"> {
    alignSelf?: CSS["alignSelf"];
    borderWidth?: CSS["borderWidth"];
    color?: CssColor;
    height?: CSS["height"];
    margins?: Margins;
}
declare const Divider: react.ForwardRefExoticComponent<Omit<DividerProps, "ref"> & react.RefAttributes<HTMLHRElement>>;

interface HeaderWrapperProps extends ViewProps {
    header?: ReactNode;
    headerProps?: Partial<ViewProps> & {
        fontSize?: string;
    };
    textProps?: Partial<TextProps>;
}
declare const HeaderWrapper: react.ForwardRefExoticComponent<HeaderWrapperProps & react.RefAttributes<HTMLDivElement>>;

interface LoadingOverlayProps {
    children?: ReactNode | ReactNode[];
    isLoading: boolean;
    sub?: ReactNode;
}
declare const LoadingOverlay: ({ children, isLoading, sub }: LoadingOverlayProps) => react_jsx_runtime.JSX.Element;

interface SideScrollerProps {
    children: JSX.Element[];
    className?: string;
    innerClassName?: string;
}
declare const SideScroller: ({ children, className, innerClassName }: SideScrollerProps) => react_jsx_runtime.JSX.Element;

interface UniformListProps extends ViewProps {
    children: ReactNode | ReactNode[];
    uniformWidth?: CSS["maxWidth"];
}
declare const UniformList: ({ children, uniformWidth, ...props }: UniformListProps) => react_jsx_runtime.JSX.Element;

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
    align?: CSS["alignItems"];
    bgColor?: CssColor;
    borders?: Borders;
    borderRadiuses?: BorderRadiuses;
    children?: ReactNode | ReactNode[];
    className?: string;
    column?: boolean;
    cursor?: CSS["cursor"];
    display?: CSS["display"];
    flex?: CSS["flex"];
    height?: CSS["height"];
    justify?: CSS["justifyContent"];
    margins?: Margins;
    maxHeight?: CSS["maxHeight"];
    maxWidth?: CSS["maxWidth"];
    minHeight?: CSS["minHeight"];
    minWidth?: CSS["minWidth"];
    opacity?: CSS["opacity"];
    overflow?: CSS["overflow"];
    padding?: Padding;
    position?: CSS["position"];
    row?: boolean;
    spacing?: CSS["marginRight"];
    width?: CSS["width"];
    wrap?: CSS["flexWrap"];
}
declare const View: react.ForwardRefExoticComponent<ViewProps & react.RefAttributes<HTMLDivElement>>;

declare const MuiProvider: ({ children, portalContainer, styleContainer, }: {
    children: React.ReactNode;
    portalContainer?: HTMLElement;
    styleContainer?: Node;
}) => react_jsx_runtime.JSX.Element;

export { Accordion, AccordionGroup, type AccordionProps, AutoComplete, type AutoCompleteOption, type AutoCompleteProps, Button, type ButtonProps, ButtonWithInset, type ButtonWithInsetProps, Card, CardBase, CardGrid, type CardGridProps, type CardProps, CenteredText, type CenteredTextProps, Checkbox, type CheckboxProps, Chip, ChipInput, type ChipInputProps, type ChipOption, type ChipProps, ColorPicker, type ColorPickerProps, Comp, ConditionalWrap, ConfirmModal, type ConfirmModalProps, type ContainerProps$1 as ContainerProps, type ContentProps, ContextMenu, type ContextMenuProps, DEFAULT_INPUT_HEADER_PROPS, DENSE_INPUT_PADDING, DataGrid, type DataGridCellLayoutProps, type DataGridColumn, type DataGridColumnConfig, type DataGridColumnKey, DataGridHeader, type DataGridHeaderProps, type DataGridProps, type DataGridRender, type DataGridRenderContext, DataGridRow, type DataGridRowData, type DataGridRowProps, type DataGridSort, type DataGridSortDirection, type DataGridValue, DateDetail, type DateDetailProps, DateInput, type DateInputProps, DateRange, type DateRangeProps, Detail, type DetailProps, DetailRows, DisabledOverlay, type DisabledOverlayProps, Divider, type DividerProps, Dropdown, type DropdownOption, type DropdownProps, FilterMenu, type FilterMenuProps, type FooterProps$1 as FooterProps, type HeaderProps, HeaderWrapper, type HeaderWrapperProps, Icon, IconButton, type IconButtonProps, type IconLayer, type IconName, IconPicker, type IconPickerProps, type IconProps, Input, type InputProps, Link, List, ListItem, type ListItemProps, type ListProps, LoadingOverlay, type LoadingOverlayProps, LogOpsInput, type LogOpsInputProps, MULTI_INPUT_ROW_HEIGHT, MenuButton, type MenuButtonProps, Modal, MuiProvider, MultiActionButton, type MultiActionButtonProps, MultiInput, MultiInputList, type MultiInputListProps, type MultiInputProps, MultiInputRow, type MultiInputRowOption, type MultiInputRowProps, NumInput, type NumInputProps, NumRange, type NumRangeProps, Pagination, type PaginationProps, ProgressBar, type ProgressBarProps, ProgressCircle, type ProgressCircleProps, Radio, type RadioProps, RangeWrapper, type RangeWrapperProps, SideScroller, SortMenu, type SortMenuProps, SortRow, type SortRowProps, PRESETS as TEXT_PRESETS, Table, type TableColumn, type TableProps, Text, type TextPreset, type TextProps, type TextTruncation, TimeInput, type TimeInputProps, Tooltip, type TooltipProps$1 as TooltipProps, TooltipWrapper, type TooltipWrapperProps, TruncatedText, type TruncatedTextProps, type TruncatedTextRemainderProps, UniformList, type UniformListProps, View, type ViewProps, clampDataGridColumnWidth, compareDataGridValues, createAutoCompleteOptions, getDataGridCellLayout, getDataGridColumnValue, getDataGridValueText, getTextTruncation, useAccordionGroup, useAccordionGroupSection };

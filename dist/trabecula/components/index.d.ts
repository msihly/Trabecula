import * as react from 'react';
import react__default, { Ref, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, ReactNode, MouseEvent, Dispatch, SetStateAction, AriaAttributes, ElementType, DetailedHTMLProps, ImgHTMLAttributes, DragEvent, ComponentPropsWithoutRef, ElementRef } from 'react';
import { CssColor, BorderRadiuses, Borders, CSS, Margins, Padding } from '../utils/client/index.js';
import { ButtonProps as ButtonProps$1, IconButtonProps as IconButtonProps$1, MenuProps, AutocompleteProps, TextFieldProps, SliderProps as SliderProps$1, ListProps as ListProps$1, ListItemProps as ListItemProps$1, IconProps as IconProps$1, DialogProps, PaginationProps as PaginationProps$1, LinkProps as LinkProps$1, TypographyProps, AccordionProps as AccordionProps$1, TooltipProps as TooltipProps$2, ChipProps as ChipProps$2, DividerProps as DividerProps$1 } from '@mui/material';
import { IconName as IconName$1 } from '../_generated/client/index.js';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { PickersTextFieldProps } from '@mui/x-date-pickers/PickersTextField';
import { LogicalOp } from '../utils/common/index.js';
import { FixedSizeList } from 'react-window';
import { TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import { ServerProcessStatus } from '../utils/common/index.js';
import '../palette-CoCY-L8m.js';
import 'csstype';
import '@mui/material/styles';
import 'tss-react';

type Forwarded<P, R> = (props: P, ref: Ref<R>) => React.JSX.Element;
declare function Comp<P, R = HTMLDivElement>(component: Forwarded<P, R>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<R>>;

interface ActivityModalProps {
    children: ReactNode;
    error?: string;
    isEmpty?: boolean;
    isLoading?: boolean;
    onClose: () => void;
    onPageChange: (page: number) => void;
    onRefresh: () => void;
    page: number;
    pageCount: number;
    title?: string;
}
declare const ActivityModal: react.ForwardRefExoticComponent<ActivityModalProps & react.RefAttributes<HTMLDivElement>>;

interface ActivityOperationCardProps {
    children?: ReactNode;
    controls?: ReactNode;
    dateText?: string;
    error?: string;
    icon: IconName;
    isActive?: boolean;
    label: string;
    message?: string;
    processedCount: number;
    statusColor: CssColor;
    statusText: string;
    totalCount: number;
}
declare const ActivityOperationCard: react.ForwardRefExoticComponent<ActivityOperationCardProps & react.RefAttributes<HTMLDivElement>>;

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
    pill?: ReactNode;
    pillPosition?: "left" | "right";
    pillWidth?: CSS["width"];
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
declare const Button: ({ borderColorOnHover, borderRadiuses, borders, boxShadow, className, color, colorOnHover, dense, endNode, fontFamily, fontSize, fontWeight, height, href, icon, iconProps, iconRight, iconSize, justify, loading, margins, maxWidth, outlined, outlineFill, outlineFillOnHover, padding, pill, pillPosition, pillWidth, size, startNode, text, textClassName, textColor, textColorOnHover, textProps, textTransform, tooltip, tooltipProps, type, underline, variant, whiteSpace, width, ...props }: ButtonProps) => react.JSX.Element;

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
    /** Colors already in use, offered above the swatches for reuse. */
    usedColors?: CssColor[];
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
declare const IconButton: ({ children, className, color, disabled, iconProps, margins, name, padding, tooltip, tooltipProps, ...props }: IconButtonProps) => react.JSX.Element;

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

interface MenuButtonProps extends Omit<IconButtonProps, "children"> {
    anchorOrigin?: MenuProps["anchorOrigin"];
    bgColor?: CssColor;
    button?: (onOpen: (event: MouseEvent) => void) => ReactNode;
    children: ReactNode | ((onClose: () => void) => ReactNode);
    icon?: IconName;
    keepMounted?: boolean;
    menuClassName?: string;
    menuWidth?: CSS["width"];
    transformOrigin?: MenuProps["transformOrigin"];
}
declare const MenuButton: ({ anchorOrigin, bgColor, button, children, color, icon, keepMounted, menuClassName, menuWidth, transformOrigin, ...props }: MenuButtonProps) => react.JSX.Element;

interface MultiActionButtonProps extends IconButtonProps {
}
declare const MultiActionButton: ({ tooltipProps, ...props }: MultiActionButtonProps) => react.JSX.Element;

type SelectionStore = {
    results: Array<{
        id: string;
    }>;
    selectAllInQuery: () => Promise<{
        data?: number | null;
        error?: string;
        success: boolean;
    }>;
    selectedIds: string[];
    toggleSelected: (selected: Array<{
        id: string;
        isSelected: boolean;
    }>) => any;
};
type SelectionToast = {
    error: (message: string) => unknown;
    info: (message: string) => unknown;
};
interface SelectionButtonProps extends Omit<MultiActionButtonProps, "name" | "onClick"> {
    /** Plural name of the selectable items, such as "files". */
    itemLabel: string;
    store: SelectionStore;
    /** The app's own toast, so its notification handling, such as history, applies. */
    toast: SelectionToast;
}
type SelectionButtonsProps = Pick<SelectionButtonProps, "itemLabel" | "store" | "toast">;
declare const selectAllInView: ({ itemLabel, store, toast }: SelectionButtonsProps) => void;
declare const DeselectAllButton: react.ForwardRefExoticComponent<Omit<SelectionButtonProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const SelectAllButton: react.ForwardRefExoticComponent<Omit<SelectionButtonProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const SelectAllInQueryButton: react.ForwardRefExoticComponent<Omit<SelectionButtonProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
/** Deselect all, select all in view and select all in query, in that order. */
declare const SelectionButtons: (props: SelectionButtonsProps) => react.JSX.Element;

interface SortMenuProps extends Omit<ButtonProps, "onChange" | "value"> {
    hasHeader?: boolean;
    rows: Omit<SortRowProps, "setValue" | "value">[];
    setValue: (value: {
        isDesc: boolean;
        key: string;
    }) => void;
    value: {
        isDesc: boolean;
        key: string;
    };
}
declare const SortMenu: ({ color, hasHeader, height, rows, setValue, value, width, ...buttonProps }: SortMenuProps) => react.JSX.Element;

interface SortRowProps {
    attribute: string;
    icon: IconName;
    iconProps?: Partial<IconProps>;
    label: string;
    setValue: SortMenuProps["setValue"];
    value: SortMenuProps["value"];
}
declare const SortRow: ({ attribute, icon, iconProps, label, setValue, value, }: SortRowProps) => react.JSX.Element;

interface AreaChartSeries {
    color: CssColor;
    label: string;
    values: number[];
}
interface AreaChartProps {
    height?: number;
    /** Drawn in order, so later series overlap earlier ones. */
    series: AreaChartSeries[];
    valueFormatter?: (value: number) => string;
    xValueFormatter?: (value: Date) => string;
    xValues: Date[];
}
/** Overlapping filled lines over a time axis, with a legend and an axis tooltip. */
declare const AreaChart: react.ForwardRefExoticComponent<AreaChartProps & react.RefAttributes<HTMLDivElement>>;

type AutoCompleteOption = DropdownOption<any>;
declare const createAutoCompleteOptions: (values: any[]) => AutoCompleteOption[];
interface AutoCompleteProps<Option = AutoCompleteOption, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false> extends Omit<AutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>, "renderInput"> {
    header?: InputProps["header"];
    inputProps?: InputProps;
    renderInput?: AutocompleteProps<Option, Multiple, DisableClearable, FreeSolo>["renderInput"];
    required?: boolean;
}
declare const AutoComplete: <Option = AutoCompleteOption, Multiple extends boolean = false, DisableClearable extends boolean = false, FreeSolo extends boolean = false>(props: AutoCompleteProps<Option, Multiple, DisableClearable, FreeSolo> & RefAttributes<HTMLDivElement>) => React.JSX.Element;

type ChipOption = DropdownOption<any>;
type ChipInputProps = Omit<AutocompleteProps<ChipOption, true, true, true>, "renderInput" | "onChange" | "options"> & {
    opaque?: boolean;
    options?: ChipOption[];
    setValue?: (val: any) => void;
    value: ChipOption[];
};
declare const ChipInput: react.ForwardRefExoticComponent<Omit<ChipInputProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface DateInputProps extends Omit<DatePickerProps, "label" | "onChange" | "value"> {
    header?: ReactNode;
    headerProps?: Partial<ViewProps>;
    inputProps?: Omit<Partial<PickerFieldProps>, "header" | "headerProps">;
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
    pill?: ReactNode;
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
    pillPosition?: "left" | "right";
    setValue: (value: T | undefined) => void;
    textColor?: CssColor;
    value: T;
    withClearButton?: boolean;
    withValueTest?: boolean;
}
declare function Dropdown<T = string>({ autoHighlight, autoSelect, borderColor, caretColor, caretSize, dense, disabled, freeSolo, header, headerProps, inputFontSize, inputFontWeight, inputHeight, inputLineHeight, inputOutlineWidth, inputPadding, inputRootAlignItems, inputRootHeight, inputRootMinHeight, inputRootPadding, itemBgColor, label, labelProps, labelTextProps, listboxBorder, listboxBorderRadius, menuItemBorder, menuItemMinHeight, menuItemPadding, menuItemSelectedBgColor, optionTextProps, options, paperBorder, paperBorderRadius, pillPosition, required, setValue, slotProps, textColor, value, withClearButton, withValueTest, ...props }: DropdownProps<T>): react.JSX.Element;

interface FilterHeaderProps {
    label: string;
    mode: "optional" | "required";
    setMode: (mode: "optional" | "required") => void;
}
declare const FilterHeader: react.ForwardRefExoticComponent<FilterHeaderProps & react.RefAttributes<HTMLDivElement>>;

type FilterStore = {
    applySavedSearch: (id: string) => any;
    deleteSavedSearch: (id?: string) => Promise<any>;
    hasChanges: boolean;
    isDeleteModalOpen: boolean;
    isLoading: boolean;
    isSaveModalOpen: boolean;
    loadFiltered: (options?: {
        noCache?: boolean;
        page?: number;
    }) => Promise<any>;
    loadSavedSearches: () => Promise<any>;
    reset: () => any;
    saveSavedSearch: (label: string) => Promise<any>;
    savedSearches: Array<{
        id: string;
        label: string;
    }>;
    selectedSavedSearchId: string;
    setIsDeleteModalOpen: (value: boolean) => any;
    setIsSaveModalOpen: (value: boolean) => any;
    setPageCount: (count: number) => any;
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
    menuProps?: Partial<MenuButtonProps>;
    resetFn?: () => void;
    /** Replaces loading the store's results, for menus whose filter applies elsewhere. */
    searchFn?: () => void;
    sortOptions: SortMenuProps["rows"];
    store: FilterStore;
    viewProps?: ViewProps;
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
    stopKeyPropagation?: boolean;
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
    renderRow?: (index: number, style: React.CSSProperties) => React.JSX.Element;
    search: {
        onChange: (val: T[]) => void;
        value: T[];
    };
    viewProps?: Partial<ViewProps>;
}
declare const MultiInputList: react.ForwardRefExoticComponent<MultiInputListProps<unknown> & react.RefAttributes<FixedSizeList<any>>>;

declare const MULTI_INPUT_ROW_HEIGHT = 35;
type MultiInputRowOption<T = string> = DropdownOption<T>;
interface MultiInputRowProps<T> {
    bgColor?: CssColor;
    hasDelete?: boolean;
    leftNode?: React.ReactNode;
    onClick?: (value: T) => void;
    rightNode?: React.ReactNode;
    search: MultiInputListProps<T>["search"];
    style?: React.CSSProperties;
    value: T;
    valueExtractor?: (value: T) => string;
}
declare const MultiInputRow: <T>({ bgColor, ...props }: MultiInputRowProps<T>) => react.JSX.Element;

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

type PickerFieldProps = PickersTextFieldProps & {
    borderRadiuses?: BorderRadiuses;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    width?: CSS["width"];
};
/** The text field of the date and time pickers, styled like Input. */
declare const PickerField: ({ borderRadiuses, className, header, headerProps, onKeyDown, width, ...props }: PickerFieldProps) => react.JSX.Element;

type RangeWrapperProps = {
    endInput: React.JSX.Element;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    startInput: React.JSX.Element;
};
declare const RangeWrapper: react.ForwardRefExoticComponent<RangeWrapperProps & react.RefAttributes<HTMLDivElement>>;

interface SliderMark {
    label?: ReactNode;
    value: number;
}
interface SliderProps extends Omit<SliderProps$1, "color" | "defaultValue" | "marks" | "onChange" | "onChangeCommitted" | "style" | "sx" | "value"> {
    color?: CssColor;
    flex?: CSS["flex"];
    height?: CSS["height"];
    margins?: Margins;
    marks?: boolean | SliderMark[];
    onCommit?: (value: number) => void;
    padding?: Padding;
    setValue?: (value: number) => void;
    value: number;
    width?: CSS["width"];
}
declare const Slider: react.ForwardRefExoticComponent<Omit<SliderProps, "ref"> & react.RefAttributes<HTMLSpanElement>>;

interface TimeInputProps extends Omit<TimePickerProps, "label" | "onChange" | "value"> {
    inputProps?: Omit<Partial<PickerFieldProps>, "header" | "headerProps">;
    label?: PickerFieldProps["header"];
    labelProps?: PickerFieldProps["headerProps"];
    setValue?: (val: string) => void;
    value: string;
    viewProps?: Partial<ViewProps>;
    width?: CSS["width"];
}
declare const TimeInput: ({ inputProps, label, labelProps, setValue, slotProps, value, viewProps, width, ...timePickerProps }: TimeInputProps) => react.JSX.Element;

type Row = {
    label: string | ReactNode;
    value: string | ReactNode;
};
interface DetailRowsProps {
    labelWidth?: CSS["maxWidth"];
    rows: Row[];
}
declare const DetailRows: ({ labelWidth, rows }: DetailRowsProps) => react.JSX.Element;

interface ListProps extends ListProps$1 {
    dividerColor?: CssColor;
    noDividers?: boolean;
}
declare const List: ({ children, className, dividerColor, noDividers, ...props }: ListProps) => react.JSX.Element;

interface ListItemProps extends Omit<ListItemProps$1, "children"> {
    children?: ReactNode;
    color?: CssColor;
    icon?: IconName;
    iconEnd?: IconName;
    iconEndMargins?: Margins;
    iconMargins?: Margins;
    iconProps?: Partial<IconProps>;
    onClick?: (event?: MouseEvent) => void;
    text: ReactNode;
}
declare const ListItem: ({ children, className, color, icon, iconEnd, iconEndMargins, iconMargins, iconProps, onClick, text, ...props }: ListItemProps) => react.JSX.Element;

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
    margins?: Margins;
    name?: IconName & string;
    rotation?: number;
    size?: number | string;
    viewProps?: Partial<Omit<ViewProps, "className" | "margins">>;
}
declare const Icon: ({ className, color, layers, margins, name, rotation, size, style, viewProps, ...props }: IconProps) => react.JSX.Element;

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
declare const ConfirmModal: ({ cancelColor, cancelIcon, cancelText, children, confirmColor, confirmIcon, confirmText, headerText, height, onCancel, onConfirm, setVisible, subText, width, }: ConfirmModalProps) => react.JSX.Element;

interface HeaderProps {
    children: React.JSX.Element | React.JSX.Element[];
    className?: string;
    justify?: CSS["justifyContent"];
    leftNode?: ReactNode;
    rightNode?: ReactNode;
}

interface FooterProps$1 extends UniformListProps {
}

interface ContentProps extends ViewProps {
    children: ReactNode | ReactNode[];
    dividers?: boolean;
}

interface ContainerProps$1 extends Omit<DialogProps, "maxWidth" | "open" | "onClose" | "title"> {
    closeOnBackdrop?: boolean;
    height?: CSS["height"];
    isLoading?: boolean;
    /** Single CSS length applied to every side and subtracted from the default max height and width. */
    margin?: string;
    maxHeight?: CSS["maxHeight"];
    maxWidth?: CSS["maxWidth"];
    onClose?: () => void;
    visible?: boolean;
    width?: CSS["width"];
}

declare const Modal: {
    Container: ({ children, className, closeOnBackdrop, draggable, height, isLoading, margin, maxHeight, maxWidth, onClose, scroll, visible, width, ...props }: ContainerProps$1) => react.JSX.Element;
    Content: ({ children, className, dividers, overflow, padding, position, ...viewProps }: ContentProps) => react.JSX.Element;
    Footer: ({ children, uniformWidth, ...props }: FooterProps$1) => react.JSX.Element;
    Header: ({ children, className, justify, leftNode, rightNode, }: HeaderProps) => react.JSX.Element;
};

interface ProgressBarProps extends Pick<AriaAttributes, "aria-label" | "aria-labelledby"> {
    denominator?: number;
    denominatorFormatter?: (num: number) => string;
    minWidth?: CSS["minWidth"];
    numerator?: number;
    numeratorFormatter?: (num: number) => string;
    variant?: "determinate" | "indeterminate";
    viewProps?: ViewProps;
    withText?: boolean;
}
declare const ProgressBar: react.ForwardRefExoticComponent<ProgressBarProps & react.RefAttributes<HTMLDivElement>>;

interface ProgressCircleProps {
    bgColor?: CssColor;
    children?: ReactNode | ReactNode[];
    color?: CssColor;
    percent?: number;
    size?: number | string;
    variant?: "determinate" | "indeterminate";
}
declare const ProgressCircle: react.ForwardRefExoticComponent<ProgressCircleProps & react.RefAttributes<HTMLDivElement>>;

declare const DataGrid: <T extends object = DataGridRowData>({ alternatingBgColor, alternatingColors, className, columns, data, defaultTextPreset, emptyColor, emptyJustify, emptyMessage, expandColumnWidth, expandableContent, getRowBgColor, hasPagination, hasResizableColumns, hasSearch, hasSorting, headerBorder, initialSort, isExpanded, isRowSelected, onRowClick, rowAlign, rowGap, rowPadding, rowsPerPage, selectedBgColor, selectedTextColor, spacing, textPreset, }: DataGridProps<T>) => react.JSX.Element;

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
    hasSearch?: boolean;
    hasSorting?: boolean;
    headerBorder?: string;
    initialSort?: DataGridSort<T>;
    isExpanded?: boolean;
    isRowSelected?: (row: T, index: number) => boolean;
    onRowClick?: (row: T, index: number) => void;
    rowAlign?: CSS["alignItems"];
    rowGap?: string | number;
    rowPadding?: Padding;
    rowsPerPage?: number;
    selectedBgColor?: CssColor;
    selectedTextColor?: CssColor;
    spacing?: string | number;
    textPreset?: TextProps["preset"];
}

declare const dataGridCellClasses: {
    readonly cell: {
        readonly "& > *": {
            readonly maxWidth: "100%";
            readonly minWidth: "0 !important";
        };
    };
    readonly noWrapCell: {
        readonly "& .MuiTypography-root": {
            readonly display: "block";
            readonly overflow: "hidden";
            readonly textOverflow: "ellipsis";
            readonly whiteSpace: "nowrap";
            readonly width: "100%";
        };
    };
};
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
    hasSorting: boolean;
    onColumnResizeStart: (column: DataGridProps<T>["columns"][number], startWidth: number, startClientX: number) => void;
    onSort: (column: DataGridProps<T>["columns"][number]) => void;
    sort: DataGridProps<T>["initialSort"] | null;
}
declare const DataGridHeader: <T extends object>({ columns, expandableContent, expandColumnWidth, hasResizableColumns, hasSorting, headerBorder, onColumnResizeStart, onSort, rowGap, sort, textPreset, }: DataGridHeaderProps<T>) => react.JSX.Element;

interface DataGridRowProps<T extends object> extends Pick<DataGridProps<T>, "alternatingBgColor" | "alternatingColors" | "className" | "columns" | "defaultTextPreset" | "expandableContent" | "expandColumnWidth" | "getRowBgColor" | "isRowSelected" | "onRowClick" | "rowAlign" | "rowGap" | "rowPadding" | "selectedBgColor" | "selectedTextColor" | "textPreset"> {
    expandedRows: Set<number>;
    index: number;
    pageIndex: number;
    row: T;
    setExpandedRows: react__default.Dispatch<Set<number>>;
}
declare const DataGridRow: <T extends object>({ alternatingBgColor, alternatingColors, className, columns, defaultTextPreset, expandableContent, expandedRows, expandColumnWidth, getRowBgColor, index, isRowSelected, onRowClick, pageIndex, row, rowAlign, rowGap, rowPadding, selectedBgColor, selectedTextColor, setExpandedRows, textPreset, }: DataGridRowProps<T>) => react__default.JSX.Element;

interface PaginationProps extends Omit<PaginationProps$1, "onChange"> {
    inline?: boolean;
    isLoading?: boolean;
    onChange: (page: number) => void;
    onFullLoad?: () => void;
    viewProps?: Partial<ViewProps>;
}
declare const Pagination: react.ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface TableColumn<T> {
    className?: string;
    header: string;
    valueFunc: (row: T) => ReactNode;
    wrap?: boolean;
}
interface TableProps<T> {
    className?: string;
    columns: TableColumn<T>[];
    hasEmptyRows?: boolean;
    hasPagination?: boolean;
    paginationClassName?: string;
    rowCountOptions?: number[];
    rows: T[];
}
declare const Table: <T extends object>({ className, columns, hasEmptyRows, hasPagination, paginationClassName, rowCountOptions, rows, }: TableProps<T>) => react__default.JSX.Element;

interface CenteredTextProps extends TextProps {
    text: string;
    viewProps?: Partial<ViewProps>;
}
declare const CenteredText: ({ color, text, viewProps, ...props }: CenteredTextProps) => react.JSX.Element;

interface DateDetailProps extends DetailProps {
    value: string;
}
declare const DateDetail: (props: DateDetailProps) => react.JSX.Element;

interface DetailProps extends ViewProps {
    emptyValueText?: string;
    label: ReactNode;
    labelProps?: Partial<TextProps>;
    tooltip?: ReactNode;
    value: ReactNode;
    valueProps?: Partial<TextProps>;
    whiteSpace?: CSS["whiteSpace"];
    withTooltip?: boolean;
}
declare const Detail: ({ emptyValueText, label, labelProps, overflow, row, tooltip, value, valueProps, whiteSpace, withTooltip, ...props }: DetailProps) => react.JSX.Element;

interface LinkProps extends Omit<LinkProps$1, "color"> {
    bold?: boolean;
    color?: CssColor;
}
declare const Link: ({ bold, children, className, color, rel, target, underline, ...props }: LinkProps) => react.JSX.Element;

type TextPreset = "default" | "detail-label" | "label-glow" | "sub-text" | "sub-text-muted" | "title";
declare const PRESETS: Record<TextPreset, CSS>;
interface TextProps extends Omit<TypographyProps, "color" | "component" | "title" | "variant"> {
    bold?: boolean;
    color?: CssColor;
    component?: ElementType;
    display?: CSS["display"];
    flex?: CSS["flex"];
    flexShrink?: CSS["flexShrink"];
    fontFamily?: CSS["fontFamily"];
    fontSize?: CSS["fontSize"];
    fontWeight?: CSS["fontWeight"];
    italic?: boolean;
    lineHeight?: CSS["lineHeight"];
    margins?: Margins;
    minHeight?: CSS["minHeight"];
    minWidth?: CSS["minWidth"];
    opacity?: CSS["opacity"];
    overflow?: CSS["overflow"];
    overflowWrap?: CSS["overflowWrap"];
    padding?: Padding;
    preset?: TextPreset;
    textAlign?: CSS["textAlign"];
    textOverflow?: CSS["textOverflow"];
    textTransform?: CSS["textTransform"];
    tooltip?: TooltipProps$1["title"];
    tooltipProps?: Partial<TooltipProps$1>;
    whiteSpace?: CSS["whiteSpace"];
    width?: CSS["width"];
    wordBreak?: CSS["wordBreak"];
}
declare const Text: {
    ({ bold, children, className, color, component, display, flex, flexShrink, fontFamily, fontSize, fontWeight, italic, lineHeight, margins, minHeight, minWidth, opacity, overflow, overflowWrap, padding, preset, textAlign, textOverflow, textTransform, tooltip, tooltipProps, whiteSpace, width, wordBreak, ...props }: TextProps): react.JSX.Element;
    Inline(props: Omit<TextProps, "component">): react.JSX.Element;
};

interface TextTruncation {
    isTruncated: boolean;
    preview: string;
    remainder: string;
    truncationIndex: number;
}
interface TruncatedTextProps extends Omit<TextProps, "children"> {
    ellipsis?: ReactNode;
    expanded?: boolean;
    lineClamp?: number;
    maxLength: number;
    text: string;
    wordBoundaryRatio?: number;
}
interface TruncatedTextRemainderProps extends Omit<TextProps, "children"> {
    maxLength: number;
    text: string;
    wordBoundaryRatio?: number;
}
declare const getTextTruncation: (text: string, maxLength: number, wordBoundaryRatio?: number) => TextTruncation;
declare const TruncatedText: {
    ({ className, display, ellipsis, expanded, lineClamp, maxLength, overflow, overflowWrap, sx, text, textOverflow, wordBoundaryRatio, wordBreak, ...textProps }: TruncatedTextProps): react.JSX.Element;
    Remainder({ maxLength, text, wordBoundaryRatio, ...textProps }: TruncatedTextRemainderProps): react.JSX.Element;
};

interface AccordionProps extends Omit<AccordionProps$1, "children" | "expanded" | "onChange" | "title"> {
    borderColor?: CssColor;
    buttonProps?: Partial<ButtonProps>;
    children: ReactNode | ReactNode[];
    color?: CssColor;
    contentPadding?: CSS["padding"];
    dense?: boolean;
    expanded?: boolean;
    fullWidth?: boolean;
    header?: ReactNode;
    headerBgColor?: CssColor;
    headerBorderColor?: CssColor;
    headerBorderMode?: "always" | "expanded" | "visibleBorder";
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
declare const Accordion: (rawProps: AccordionProps) => react.JSX.Element;

interface AccordionGroupProps {
    children: ReactNode;
    defaultExpanded?: boolean;
    sectionIds: readonly string[];
}
declare const AccordionGroup: ({ children, defaultExpanded, sectionIds, }: AccordionGroupProps) => react.JSX.Element;
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
    icon?: ReactNode;
    indeterminate?: boolean;
    indeterminateColor?: CssColor;
    label?: ReactNode;
    labelProps?: Omit<Partial<TextProps>, "children">;
    margins?: Margins;
    noHover?: boolean;
    padding?: Padding;
    setChecked: (checked: boolean, ternary?: boolean, event?: MouseEvent<HTMLButtonElement>) => void;
    stateIcons?: Partial<Record<CheckboxState, ReactNode>>;
    ternary?: boolean;
    ternaryColor?: CssColor;
    ternaryIcon?: ReactNode;
    whiteSpace?: CSS["whiteSpace"];
    width?: CSS["width"];
}
declare const Checkbox: ({ center, checked, checkedIcon, className, color, disabled, flex, icon, indeterminate, indeterminateColor, label, labelProps, margins, noHover, padding, setChecked, stateIcons, ternary, ternaryColor, ternaryIcon, whiteSpace, width, }: CheckboxProps) => react.JSX.Element;

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
declare const Radio: (rawProps: RadioProps) => react.JSX.Element;

interface TooltipProps$1 extends Omit<TooltipProps$2, "children" | "color"> {
    bgColor?: CssColor;
    borderColor?: CssColor;
    children: React.JSX.Element;
    color?: CssColor;
    flexShrink?: CSS["flexShrink"];
    fontSize?: CSS["fontSize"];
    maxWidth?: CSS["maxWidth"];
    minWidth?: CSS["minWidth"];
    padding?: CSS["padding"];
    viewProps?: Partial<ViewProps>;
}
declare const Tooltip: ({ arrow, bgColor, borderColor, children, color, flexShrink, fontSize, maxWidth, minWidth, padding, placement, title, viewProps, ...props }: TooltipProps$1) => react.JSX.Element;

interface TooltipWrapperProps {
    children: React.JSX.Element | React.JSX.Element[];
    tooltip?: TooltipProps$1["title"];
    tooltipProps?: Partial<TooltipProps$1>;
}
declare const TooltipWrapper: ({ children, tooltip, tooltipProps }: TooltipWrapperProps) => react.JSX.Element;

interface CardProps extends ViewProps, Pick<HeaderWrapperProps, "header" | "headerProps"> {
    boxShadow?: CSS["boxShadow"];
    elevated?: boolean;
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;

interface TooltipProps {
    children: React.JSX.Element;
    tooltip: React.JSX.Element | React.JSX.Element[];
}

interface ImageProps extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt" | "height" | "src" | "title" | "width"> {
    autoAnimate?: boolean;
    children?: ReactNode | ReactNode[];
    disabled?: boolean;
    draggable?: boolean;
    fit?: "contain" | "cover";
    height?: CSS["height"];
    rounded?: "all" | "bottom" | "top";
    thumbPaths: string[];
    title?: string;
}

interface FooterTextProps {
    text: string;
}

interface FooterProps {
    children?: ReactNode | ReactNode[];
}

interface ContainerProps extends ViewProps {
    children: ReactNode | ReactNode[];
    disabled?: boolean;
    onClick?: (event: MouseEvent) => void;
    onDoubleClick?: () => void;
    selected?: boolean;
    selectedColor?: CssColor;
}

interface ChipProps$1 extends ChipProps {
    flush?: boolean;
    hasFooter?: boolean;
    opacity?: number;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

declare const CardBase: {
    Chip: ({ bgColor, className, flush, hasFooter, opacity, position, ...props }: ChipProps$1) => react.JSX.Element;
    Container: ({ children, className, disabled, display, height, onClick, onDoubleClick, selected, selectedColor, width, ...viewProps }: ContainerProps) => react.JSX.Element;
    Footer: ({ children }: FooterProps) => react.JSX.Element;
    FooterText: (props: FooterTextProps) => react.JSX.Element;
    Image: ({ autoAnimate, children, className, disabled, draggable, fit, height, loading, onDragEnd, onDragStart, rounded, thumbPaths, title, }: ImageProps) => react.JSX.Element;
    Tooltip: ({ children, tooltip }: TooltipProps) => react.JSX.Element;
};

interface CardGridProps extends ViewProps {
    cards: ReactNode[];
    cardsProps?: ViewProps;
    children?: ReactNode;
    flexFlow?: CSS["flexFlow"];
    maxCards?: number;
    noResultsText?: string;
}
declare const CardGrid: react.ForwardRefExoticComponent<CardGridProps & react.RefAttributes<HTMLDivElement>>;

interface ChipProps extends Omit<ChipProps$2, "color" | "icon"> {
    bgColor?: CssColor;
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
    children: React.JSX.Element | React.JSX.Element[];
    condition: boolean;
    wrap: (children: React.JSX.Element | React.JSX.Element[]) => React.JSX.Element;
}
declare const ConditionalWrap: ({ children, condition, wrap, }: ConditionalWrapProps) => React.JSX.Element;

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
declare const ContextMenu: ({ children, disabled, id, menuItems, ...props }: ContextMenuProps) => react.JSX.Element;

interface DisabledOverlayProps {
    children?: ReactNode | ReactNode[];
    isDisabled: boolean;
    zIndex?: number;
}
declare const DisabledOverlay: ({ children, isDisabled, zIndex, }: DisabledOverlayProps) => react.JSX.Element;

interface DividerProps extends Omit<DividerProps$1, "color" | "sx"> {
    alignSelf?: CSS["alignSelf"];
    borderWidth?: CSS["borderWidth"];
    color?: CssColor;
    height?: CSS["height"];
    margins?: Margins;
}
declare const Divider: react.ForwardRefExoticComponent<Omit<DividerProps, "ref"> & react.RefAttributes<HTMLHRElement>>;

interface DropOverlayProps {
    onDragLeave: (event: DragEvent) => void;
    onDrop: (event: DragEvent) => void;
}
declare const DropOverlay: ({ onDragLeave, onDrop }: DropOverlayProps) => react.JSX.Element;

interface HeaderWrapperProps extends ViewProps {
    header?: ReactNode;
    headerProps?: Partial<ViewProps> & {
        fontSize?: string;
    };
    textProps?: Partial<TextProps>;
}
declare const HeaderWrapper: react.ForwardRefExoticComponent<HeaderWrapperProps & react.RefAttributes<HTMLDivElement>>;

interface HeaderContentProps {
    children: React.JSX.Element | React.JSX.Element[];
    leftNode?: ReactNode;
    rightNode?: ReactNode;
}
declare const HeaderContent: ({ children, leftNode, rightNode }: HeaderContentProps) => react.JSX.Element;

interface LoadingOverlayProps {
    children?: ReactNode | ReactNode[];
    isLoading: boolean;
    sub?: ReactNode;
}
declare const LoadingOverlay: ({ children, isLoading, sub }: LoadingOverlayProps) => react.JSX.Element;

interface PillProps extends ViewProps {
    fontFamily?: CSS["fontFamily"];
    fontSize?: CSS["fontSize"];
    fontWeight?: CSS["fontWeight"];
}
declare const Pill: react.ForwardRefExoticComponent<PillProps & react.RefAttributes<HTMLDivElement>>;

type ServerStatusMessageType = "error" | "info" | "success";
/** Renderer IPC for reading the main process's server statuses, like Electron's `ipcRenderer`. */
interface ServerStatusIpc {
    invoke: (channel: string) => Promise<unknown>;
    off: (channel: string, listener: (event: unknown, statuses: ServerProcessStatus[]) => void) => unknown;
    on: (channel: string, listener: (event: unknown, statuses: ServerProcessStatus[]) => void) => unknown;
}
interface ServerStatusSyncProps {
    appName: string;
    children: ReactNode;
    header?: ReactNode;
    ipcRenderer: ServerStatusIpc;
    /** Called once for each new status message, such as to keep a notification history. */
    onStatusMessage?: (message: string, type: ServerStatusMessageType) => void;
    /** How to relaunch the app when its services cannot start. */
    restartInstruction: string;
}
/** Shows startup until every server process is ready, then notifies when they drop or recover. */
declare const ServerStatusSync: ({ appName, children, header, ipcRenderer, onStatusMessage, restartInstruction, }: ServerStatusSyncProps) => react.JSX.Element;

interface SideScrollerProps {
    children: React.JSX.Element[];
    className?: string;
    innerClassName?: string;
}
declare const SideScroller: ({ children, className, innerClassName }: SideScrollerProps) => react.JSX.Element;

interface TabItem {
    content: ReactNode;
    keepMounted?: boolean;
    label: string;
    pill?: ReactNode;
}
interface TabContainerProps {
    activeTab?: string;
    borderRadius?: CSS["borderRadius"];
    color?: CSS["color"];
    contentClassName?: string;
    headerRightNode?: ReactNode;
    maxWidth?: CSS["maxWidth"];
    minHeight?: CSS["minHeight"];
    onTabChange?: (tabIndex: string) => void;
    pillPosition?: "left" | "right";
    tabHeight?: CSS["height"];
    tabs: TabItem[];
    viewProps?: Partial<ViewProps>;
    withBorder?: boolean;
}
declare const TabContainer: ({ activeTab, borderRadius, color, contentClassName, headerRightNode, maxWidth, minHeight, onTabChange, pillPosition, tabHeight, tabs, viewProps, withBorder, }: TabContainerProps) => react.JSX.Element;

interface UniformListProps extends ViewProps {
    children: ReactNode | ReactNode[];
    uniformWidth?: CSS["maxWidth"];
}
declare const UniformList: ({ children, uniformWidth, ...props }: UniformListProps) => react.JSX.Element;

type ViewProps<Component extends keyof React.JSX.IntrinsicElements = "div"> = Omit<ComponentPropsWithoutRef<Component>, "align" | "height" | "width" | "wrap"> & {
    align?: CSS["alignItems"];
    bgColor?: CssColor;
    borderRadiuses?: BorderRadiuses;
    borders?: Borders;
    column?: boolean;
    component?: Component;
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
};
declare const View: <Component extends keyof React.JSX.IntrinsicElements = "div">(props: ViewProps<Component> & RefAttributes<ElementRef<Component>>) => React.JSX.Element;

declare const usePortalContainer: () => HTMLElement;
declare const MuiProvider: ({ children, portalContainer, styleContainer, }: {
    children: React.ReactNode;
    portalContainer?: HTMLElement;
    styleContainer?: Node;
}) => react.JSX.Element;

export { Accordion, AccordionGroup, ActivityModal, ActivityOperationCard, AreaChart, AutoComplete, Button, ButtonWithInset, Card, CardBase, CardGrid, CenteredText, Checkbox, Chip, ChipInput, ColorPicker, Comp, ConditionalWrap, ConfirmModal, ContextMenu, DEFAULT_INPUT_HEADER_PROPS, DENSE_INPUT_PADDING, DataGrid, DataGridHeader, DataGridRow, DateDetail, DateInput, DateRange, DeselectAllButton, Detail, DetailRows, DisabledOverlay, Divider, DropOverlay, Dropdown, FilterHeader, FilterMenu, HeaderContent, HeaderWrapper, Icon, IconButton, IconPicker, Input, Link, List, ListItem, LoadingOverlay, LogOpsInput, MULTI_INPUT_ROW_HEIGHT, MenuButton, Modal, MuiProvider, MultiActionButton, MultiInput, MultiInputList, MultiInputRow, NumInput, NumRange, Pagination, PickerField, Pill, ProgressBar, ProgressCircle, Radio, RangeWrapper, SelectAllButton, SelectAllInQueryButton, SelectionButtons, ServerStatusSync, SideScroller, Slider, SortMenu, SortRow, PRESETS as TEXT_PRESETS, TabContainer, Table, Text, TimeInput, Tooltip, TooltipWrapper, TruncatedText, UniformList, View, clampDataGridColumnWidth, compareDataGridValues, createAutoCompleteOptions, dataGridCellClasses, getDataGridCellLayout, getDataGridColumnValue, getDataGridValueText, getTextTruncation, selectAllInView, useAccordionGroup, useAccordionGroupSection, usePortalContainer };
export type { AccordionProps, ActivityModalProps, ActivityOperationCardProps, AreaChartProps, AreaChartSeries, AutoCompleteOption, AutoCompleteProps, ButtonProps, ButtonWithInsetProps, CardGridProps, CardProps, CenteredTextProps, CheckboxProps, ChipInputProps, ChipOption, ChipProps, ColorPickerProps, ConfirmModalProps, ContainerProps$1 as ContainerProps, ContentProps, ContextMenuProps, DataGridCellLayoutProps, DataGridColumn, DataGridColumnConfig, DataGridColumnKey, DataGridHeaderProps, DataGridProps, DataGridRender, DataGridRenderContext, DataGridRowData, DataGridRowProps, DataGridSort, DataGridSortDirection, DataGridValue, DateDetailProps, DateInputProps, DateRangeProps, DetailProps, DisabledOverlayProps, DividerProps, DropOverlayProps, DropdownOption, DropdownProps, FilterHeaderProps, FilterMenuProps, FooterProps$1 as FooterProps, HeaderContentProps, HeaderProps, HeaderWrapperProps, IconButtonProps, IconLayer, IconName, IconPickerProps, IconProps, InputProps, ListItemProps, ListProps, LoadingOverlayProps, LogOpsInputProps, MenuButtonProps, MultiActionButtonProps, MultiInputListProps, MultiInputProps, MultiInputRowOption, MultiInputRowProps, NumInputProps, NumRangeProps, PaginationProps, PickerFieldProps, PillProps, ProgressBarProps, ProgressCircleProps, RadioProps, RangeWrapperProps, SelectionButtonProps, SelectionButtonsProps, ServerStatusIpc, ServerStatusMessageType, ServerStatusSyncProps, SliderMark, SliderProps, SortMenuProps, SortRowProps, TabContainerProps, TableColumn, TableProps, TextPreset, TextProps, TextTruncation, TimeInputProps, TooltipProps$1 as TooltipProps, TooltipWrapperProps, TruncatedTextProps, TruncatedTextRemainderProps, UniformListProps, ViewProps };

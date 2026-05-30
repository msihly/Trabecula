import * as react from 'react';
import { Ref, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, ReactNode, MouseEvent, Dispatch, SetStateAction, ElementType, DetailedHTMLProps, ImgHTMLAttributes, HTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1, IconButtonProps as IconButtonProps$1, TextFieldProps, ListItemProps as ListItemProps$1, IconProps as IconProps$1, DialogProps, PaginationProps as PaginationProps$1, TypographyProps, AccordionProps as AccordionProps$1, TooltipProps as TooltipProps$2, ChipProps as ChipProps$2, DividerProps as DividerProps$1 } from '@mui/material';
import { B as BorderRadiuses, C as CSS, b as CssColor, M as Margins, P as Padding, a as Borders } from '../css-B32sWQHL.mjs';
import { IconName as IconName$1 } from '../_generated/client/index.mjs';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { a as LogicalOp } from '../math-CE6iMN_S.mjs';
import { FixedSizeList } from 'react-window';
import 'csstype';
import '@mui/material/styles';
import 'tss-react';

type Forwarded<P, R> = (props: P, ref: Ref<R>) => JSX.Element;
declare function Comp<P, R = HTMLDivElement>(component: Forwarded<P, R>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<R>>;

interface ButtonProps extends Omit<ButtonProps$1, "children" | "color" | "endIcon" | "fullWidth" | "startIcon" | "type" | "variant"> {
    borderRadiuses?: BorderRadiuses;
    boxShadow?: CSS["boxShadow"];
    color?: CssColor;
    colorOnHover?: CssColor;
    endNode?: ReactNode;
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
    outlined?: boolean;
    outlineFill?: string;
    padding?: Padding;
    startNode?: ReactNode;
    text?: ReactNode;
    textColor?: CssColor;
    textClassName?: string;
    textTransform?: CSS["textTransform"];
    tooltip?: TooltipProps$1["title"];
    tooltipProps?: Partial<TooltipProps$1>;
    type?: "button" | "link";
    width?: CSS["width"];
    whiteSpace?: CSS["whiteSpace"];
}
declare const Button: ({ borderRadiuses, boxShadow, className, color, colorOnHover, endNode, fontSize, fontWeight, height, href, icon, iconProps, iconRight, iconSize, justify, loading, margins, onClick, outlined, outlineFill, padding, size, startNode, text, textColor, textTransform, tooltip, tooltipProps, type, width, whiteSpace, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

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
    iconProps?: Partial<IconProps>;
    margins?: Margins;
    name?: IconName;
    tooltip?: TooltipWrapperProps["tooltip"];
    tooltipProps?: TooltipWrapperProps["tooltipProps"];
}
declare const IconButton: ({ children, className, disabled, iconProps, margins, name, onClick, size, tooltip, tooltipProps, ...props }: IconButtonProps) => react_jsx_runtime.JSX.Element;

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
    children: ReactNode;
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
declare const SortMenu: ({ color, hasHeader, rows, setValue, value, width, ...buttonProps }: SortMenuProps) => react_jsx_runtime.JSX.Element;

interface SortRowProps {
    attribute: string;
    label: string;
    icon: IconName;
    iconProps?: Partial<IconProps>;
    setValue: SortMenuProps["setValue"];
    value: SortMenuProps["value"];
}
declare const SortRow: ({ attribute, label, icon, iconProps, setValue, value, }: SortRowProps) => react_jsx_runtime.JSX.Element;

interface DateInputProps extends Omit<DatePickerProps<dayjs.Dayjs>, "label" | "onChange" | "value"> {
    header?: ReactNode;
    headerProps?: Partial<ViewProps>;
    inputProps?: Partial<InputProps>;
    setValue?: (val: string) => void;
    value: string;
    width?: CSS["width"];
}
declare const DateInput: ({ header, headerProps, inputProps, setValue, value, width, ...datePickerProps }: DateInputProps) => react_jsx_runtime.JSX.Element;

interface DateRangeProps {
    dateInputProps?: Partial<DateInputProps>;
    endDate: string;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    setEndDate: (val: string) => void;
    setStartDate: (val: string) => void;
    startDate: string;
}
declare const DateRange: ({ dateInputProps, endDate, header, headerProps, setEndDate, setStartDate, startDate, }: DateRangeProps) => react_jsx_runtime.JSX.Element;

type DropdownOption = {
    label: string;
    value: string;
};
interface DropdownProps extends InputProps {
    options: DropdownOption[];
}
declare const Dropdown: ({ options, value, ...props }: DropdownProps) => react_jsx_runtime.JSX.Element;

interface FilterMenuProps extends Omit<ButtonProps, "onChange" | "value"> {
    children: ReactNode | ReactNode[];
    color?: CssColor;
    menuProps?: Partial<MenuButtonProps>;
    resetFn?: () => void;
    sortOptions: SortMenuProps["rows"];
    store: {
        hasChanges: boolean;
        isLoading: boolean;
        loadFiltered: (options?: {
            noCache?: boolean;
            page?: number;
        }) => void;
        numOfFilters: number;
        reset: () => void;
        setPageCount: (count: number) => void;
        setSortValue: (val: {
            isDesc: boolean;
            key: string;
        }) => void;
        sortValue: {
            isDesc: boolean;
            key: string;
        };
    };
    viewProps?: ViewProps;
    width?: CSS["width"];
}
declare const FilterMenu: react.ForwardRefExoticComponent<Omit<FilterMenuProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

interface InputProps extends Omit<TextFieldProps, "color" | "fullWidth" | "onChange" | "helperText" | "label"> {
    adornment?: ReactNode;
    adornmentPosition?: "end" | "start";
    borders?: Borders;
    borderRadiuses?: BorderRadiuses;
    className?: string;
    color?: CssColor;
    dense?: boolean;
    flex?: CSS["flex"];
    hasHelper?: boolean;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    helperText?: ReactNode;
    margins?: Margins;
    maxLength?: number;
    minWidth?: CSS["minWidth"];
    setValue?: (value: string) => void;
    textAlign?: CSS["textAlign"];
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
declare const LogOpsInput: ({ dropdownProps, header, headerProps, logOpValue, numInputProps, numValue, numValueDisplay, setLogOpValue, setNumValue, setNumValueDisplay, ...props }: LogOpsInputProps) => react_jsx_runtime.JSX.Element;

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
declare const NumRange: ({ hasHelper, header, headerProps, max, min, numInputProps, setMax, setMin, }: NumRangeProps) => react_jsx_runtime.JSX.Element;

type RangeWrapperProps = {
    endInput: JSX.Element;
    header?: HeaderWrapperProps["header"];
    headerProps?: HeaderWrapperProps["headerProps"];
    startInput: JSX.Element;
};
declare const RangeWrapper: (props: RangeWrapperProps) => react_jsx_runtime.JSX.Element;

type Row = {
    label: string | ReactNode;
    value: string | ReactNode;
};
interface DetailRowsProps {
    labelWidth?: CSS["maxWidth"];
    rows: Row[];
}
declare const DetailRows: ({ labelWidth, rows }: DetailRowsProps) => react_jsx_runtime.JSX.Element;

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
interface IconProps extends Omit<IconProps$1, "color" | "fontSize"> {
    color?: CssColor;
    name: IconName & string;
    rotation?: number;
    margins?: Margins;
    size?: number | string;
    viewProps?: Partial<Omit<ViewProps, "margins">>;
}
declare const Icon: ({ className, color, margins, name, rotation, size, viewProps, ...props }: IconProps) => react_jsx_runtime.JSX.Element;

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

interface PaginationProps extends Omit<PaginationProps$1, "onChange"> {
    isLoading?: boolean;
    onChange: (page: number) => void;
    onFullLoad?: () => void;
    viewProps?: Partial<ViewProps>;
}
declare const Pagination: ({ className, count, isLoading, onChange, onFullLoad, viewProps, ...props }: PaginationProps) => react_jsx_runtime.JSX.Element;

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

type TextPreset = "default" | "detail-label" | "label-glow" | "sub-text" | "title";
interface TextProps extends Omit<TypographyProps, "color" | "component" | "fontSize" | "fontWeight" | "overflow" | "title" | "whiteSpace"> {
    color?: CssColor;
    component?: ElementType;
    fontSize?: CSS["fontSize"];
    fontWeight?: CSS["fontWeight"];
    overflow?: CSS["overflow"];
    preset?: TextPreset;
    tooltip?: TooltipProps$1["title"];
    tooltipProps?: Partial<TooltipProps$1>;
    whiteSpace?: CSS["whiteSpace"];
}
declare const Text: ({ children, className, color, component, fontFamily, fontSize, fontWeight, overflow, preset, tooltip, tooltipProps, whiteSpace, ...props }: TextProps) => react_jsx_runtime.JSX.Element;

interface AccordionProps extends AccordionProps$1 {
    children: ReactNode | ReactNode[];
    color?: CssColor;
    dense?: boolean;
    expanded?: boolean;
    fullWidth?: boolean;
    header: ReactNode;
    setExpanded?: (expanded: boolean) => void;
}
declare const Accordion: ({ children, className, color, dense, expanded, fullWidth, header, setExpanded, }: AccordionProps) => react_jsx_runtime.JSX.Element;

interface CheckboxProps {
    center?: boolean;
    checked: boolean;
    className?: string;
    color?: CssColor;
    disabled?: boolean;
    flex?: CSS["flex"];
    indeterminate?: boolean;
    indeterminateColor?: CssColor;
    label?: ReactNode;
    margins?: Margins;
    padding?: Padding;
    setChecked: (checked: boolean) => void;
    width?: CSS["width"];
}
declare const Checkbox: ({ center, checked, className, color, disabled, flex, indeterminate, indeterminateColor, label, margins, padding, setChecked, width, }: CheckboxProps) => react_jsx_runtime.JSX.Element;

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
declare const Chip: ({ bgColor, className, color, fontSize, fontWeight, height, icon, iconColor, iconProps, label, padding, radiuses, width, ...props }: ChipProps) => react_jsx_runtime.JSX.Element;

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

interface DividerProps extends DividerProps$1 {
}
declare const Divider: ({ ...props }: DividerProps) => react_jsx_runtime.JSX.Element;

interface HeaderWrapperProps extends ViewProps {
    header?: ReactNode;
    headerProps?: Partial<ViewProps> & {
        fontSize?: string;
    };
}
declare const HeaderWrapper: ({ children, display, header, height, headerProps, position, row, spacing, ...viewProps }: HeaderWrapperProps) => react_jsx_runtime.JSX.Element;

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
    display?: CSS["display"];
    flex?: CSS["flex"];
    height?: CSS["height"];
    justify?: CSS["justifyContent"];
    margins?: Margins;
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

export { Accordion, type AccordionProps, Button, type ButtonProps, ButtonWithInset, type ButtonWithInsetProps, Card, CardBase, CardGrid, type CardGridProps, type CardProps, CenteredText, type CenteredTextProps, Checkbox, type CheckboxProps, Chip, type ChipProps, ColorPicker, type ColorPickerProps, Comp, ConditionalWrap, ConfirmModal, type ConfirmModalProps, type ContainerProps$1 as ContainerProps, type ContentProps, ContextMenu, type ContextMenuProps, DateDetail, type DateDetailProps, DateInput, type DateInputProps, DateRange, type DateRangeProps, Detail, type DetailProps, DetailRows, Divider, type DividerProps, Dropdown, type DropdownOption, type DropdownProps, FilterMenu, type FilterMenuProps, type FooterProps$1 as FooterProps, type HeaderProps, HeaderWrapper, type HeaderWrapperProps, Icon, IconButton, type IconButtonProps, type IconName, IconPicker, type IconPickerProps, type IconProps, Input, type InputProps, ListItem, type ListItemProps, LoadingOverlay, type LoadingOverlayProps, LogOpsInput, type LogOpsInputProps, MULTI_INPUT_ROW_HEIGHT, MenuButton, type MenuButtonProps, Modal, MultiActionButton, type MultiActionButtonProps, MultiInput, MultiInputList, type MultiInputListProps, type MultiInputProps, MultiInputRow, type MultiInputRowOption, type MultiInputRowProps, NumInput, type NumInputProps, NumRange, type NumRangeProps, Pagination, type PaginationProps, ProgressBar, type ProgressBarProps, ProgressCircle, type ProgressCircleProps, RangeWrapper, type RangeWrapperProps, SideScroller, SortMenu, type SortMenuProps, SortRow, type SortRowProps, Table, type TableColumn, type TableProps, Text, type TextPreset, type TextProps, Tooltip, type TooltipProps$1 as TooltipProps, TooltipWrapper, type TooltipWrapperProps, UniformList, type UniformListProps, View, type ViewProps };

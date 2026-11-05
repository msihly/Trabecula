export { B as BorderRadiuses, a as Borders, C as CSS, b as CssColor, c as CssNamedColor, M as Margins, P as Padding, d as colors, g as getContrastText, m as makeBorderRadiuses, e as makeBorders, f as makeClasses, h as makeMargins, i as makePadding } from '../../css-B7_r9_hB.js';
import * as react from 'react';
import { EffectCallback, DependencyList, MutableRefObject, RefObject, ReactNode } from 'react';
import * as mobx_keystone from 'mobx-keystone';
import { PromiseQueue } from '../common/index.js';
import { GridImperativeAPI, ListImperativeAPI } from 'react-window';
import * as react_toastify_unstyled from 'react-toastify/unstyled';
import { ToastContainerProps, TypeOptions } from 'react-toastify/unstyled';
import '../../palette-CoCY-L8m.js';
import 'csstype';
import '@mui/material';
import '@mui/material/styles';
import 'tss-react';

declare const useDeepEffect: (cb: EffectCallback, deps: DependencyList) => void;
declare const useDeepMemo: <T>(value: T) => T;
declare const useElementResize: (ref: MutableRefObject<any>, condition?: any) => {
    height: number;
    left: number;
    top: number;
    width: number;
};
declare const useForceUpdate: () => () => void;
declare const useLazyLoad: (containerRef: React.RefObject<HTMLElement>, options?: {
    rootMargin?: string;
    threshold?: number | number[];
}) => boolean;

declare const copyToClipboard: (value: string, message?: string) => Promise<void>;

type MobxKeystoneBindings = {
    _async: typeof mobx_keystone._async;
    _await: typeof mobx_keystone._await;
    getSnapshot: typeof mobx_keystone.getSnapshot;
    isTreeNode: typeof mobx_keystone.isTreeNode;
    onPatches: typeof mobx_keystone.onPatches;
    prop: typeof mobx_keystone.prop;
};
declare const initMobx: (bindings: MobxKeystoneBindings) => MobxKeystoneBindings;
declare const getMobx: () => MobxKeystoneBindings;

interface PaginatedResult<T> {
    items: T[];
    pageCount: number;
}
declare const usePaginatedList: <T>(loadPage: (page: number, signal: AbortSignal) => Promise<PaginatedResult<T>>, { pollIntervalMs }?: {
    pollIntervalMs?: number;
}) => {
    error: string;
    isLoading: boolean;
    items: T[];
    page: number;
    pageCount: number;
    refresh: () => void;
    setError: react.Dispatch<react.SetStateAction<string>>;
    setPage: react.Dispatch<react.SetStateAction<number>>;
};

declare const makeQueue: <T>({ action, items, logPrefix, logSuffix, onComplete, queue, withTabTitle, }: {
    action: (item: T, escapeFn: () => Promise<void>) => Promise<any>;
    items: T[];
    logPrefix: string;
    logSuffix: string;
    onComplete?: (hasError?: boolean) => Promise<any>;
    queue: PromiseQueue;
    withTabTitle?: boolean;
}) => Promise<void>;

interface UseDragScrollProps {
    listRef: RefObject<GridImperativeAPI | ListImperativeAPI>;
    momentum?: number;
}
declare const useDragScroll: ({ listRef, momentum }: UseDragScrollProps) => {
    handleMouseDown: (event: React.MouseEvent) => void;
    isDragging: boolean;
};

declare const asyncAction: <ThisArg, Output, Input>(fn: (input: Input) => Promise<Output>) => (input?: Input) => Promise<{
    data?: Output;
    error?: string;
    success: boolean;
}>;
declare const attachTouchedTracker: <T extends {
    _touched: Record<string, boolean>;
}>(model: T) => void;
declare const clearTouched: <T extends {
    _touched: Record<string, boolean>;
}>(model: T, keys: string[]) => void;
declare const derefMobx: (value: any) => any;
declare const makeTouchedProp: () => {
    _touched: mobx_keystone.OptionalModelProp<Partial<Record<string, boolean>>>;
};
declare const triggerAllTouched: <T extends {
    _touched: Record<string, boolean>;
}>(model: T) => void;
declare const validateProp: <TStore extends {
    _touched: Partial<Record<K, boolean>>;
}, K extends keyof TStore>(store: TStore, field: K, validator: () => string) => string;

declare const toast: {
    error: <TData = unknown>(content: react_toastify_unstyled.ToastContent<TData>, options?: react_toastify_unstyled.ToastOptions<TData>) => react_toastify_unstyled.Id;
    info: <TData = unknown>(content: react_toastify_unstyled.ToastContent<TData>, options?: react_toastify_unstyled.ToastOptions<TData>) => react_toastify_unstyled.Id;
    success: <TData = unknown>(content: react_toastify_unstyled.ToastContent<TData>, options?: react_toastify_unstyled.ToastOptions<TData>) => react_toastify_unstyled.Id;
    warn: <TData = unknown>(content: react_toastify_unstyled.ToastContent<TData>, options?: react_toastify_unstyled.ToastOptions<TData>) => react_toastify_unstyled.Id;
};
declare class Toaster {
    private toastRef;
    private toastTimeoutRef;
    toast(text: ReactNode, options?: {
        autoClose?: number | false;
        type?: TypeOptions;
    }): void;
}
declare const ToastContainer: (props: ToastContainerProps) => react.JSX.Element;

export { ToastContainer, Toaster, asyncAction, attachTouchedTracker, clearTouched, copyToClipboard, derefMobx, getMobx, initMobx, makeQueue, makeTouchedProp, toast, triggerAllTouched, useDeepEffect, useDeepMemo, useDragScroll, useElementResize, useForceUpdate, useLazyLoad, usePaginatedList, validateProp };
export type { PaginatedResult };

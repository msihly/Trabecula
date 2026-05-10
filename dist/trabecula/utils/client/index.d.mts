export { B as BorderRadiuses, a as Borders, C as CSS, b as CssColor, c as CssNamedColor, M as Margins, P as Padding, d as colors, m as makeBorderRadiuses, e as makeBorders, f as makeClasses, g as makeMargins, h as makePadding } from '../../css-B32sWQHL.mjs';
import { EffectCallback, DependencyList, MutableRefObject, ReactNode } from 'react';
import * as mobx_keystone from 'mobx-keystone';
import { P as PromiseQueue } from '../../queue-CNnYljaI.mjs';
import { FixedSizeList, VariableSizeList } from 'react-window';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react_toastify from 'react-toastify';
import { ToastContainerProps, TypeOptions } from 'react-toastify';
import 'csstype';
import '@mui/material';
import '@mui/material/styles';
import 'tss-react';

declare const useDeepEffect: (cb: EffectCallback, deps: DependencyList) => void;
declare const useDeepMemo: <T>(value: T) => T;
declare const useElementResize: (ref: MutableRefObject<any>, condition?: any) => {
    top: number;
    left: number;
    width: number;
    height: number;
};
declare const useForceUpdate: () => () => void;
declare const useLazyLoad: (containerRef: React.RefObject<HTMLElement>, options?: {
    rootMargin?: string;
    threshold?: number | number[];
}) => boolean;

declare const copyToClipboard: (value: string, message: string) => void;

type MobxKeystoneBindings = {
    onPatches: typeof mobx_keystone.onPatches;
    isTreeNode: typeof mobx_keystone.isTreeNode;
    getSnapshot: typeof mobx_keystone.getSnapshot;
    _async: typeof mobx_keystone._async;
    _await: typeof mobx_keystone._await;
    prop: typeof mobx_keystone.prop;
};
declare const initMobx: (bindings: MobxKeystoneBindings) => MobxKeystoneBindings;
declare const getMobx: () => MobxKeystoneBindings;

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
    momentum?: number;
    listRef: MutableRefObject<FixedSizeList<any> | VariableSizeList<any>>;
    listOuterRef: MutableRefObject<any>;
    scrollLeft: MutableRefObject<number>;
    width: number;
}
declare const useDragScroll: ({ listRef, listOuterRef, momentum, scrollLeft, width, }: UseDragScrollProps) => {
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
    error: <TData = unknown>(content: react_toastify.ToastContent<TData>, options?: react_toastify.ToastOptions<{}>) => react_toastify.Id;
    info: <TData_1 = unknown>(content: react_toastify.ToastContent<TData_1>, options?: react_toastify.ToastOptions<{}>) => react_toastify.Id;
    success: <TData_2 = unknown>(content: react_toastify.ToastContent<TData_2>, options?: react_toastify.ToastOptions<{}>) => react_toastify.Id;
    warn: <TData_3 = unknown>(content: react_toastify.ToastContent<TData_3>, options?: react_toastify.ToastOptions<{}>) => react_toastify.Id;
};
declare class Toaster {
    private toastTimeoutRef;
    private toastRef;
    toast(text: ReactNode, options?: {
        autoClose?: number | false;
        type?: TypeOptions;
    }): void;
}
declare const ToastContainer: (props: ToastContainerProps) => react_jsx_runtime.JSX.Element;

export { ToastContainer, Toaster, asyncAction, attachTouchedTracker, clearTouched, copyToClipboard, derefMobx, getMobx, initMobx, makeQueue, makeTouchedProp, toast, triggerAllTouched, useDeepEffect, useDeepMemo, useDragScroll, useElementResize, useForceUpdate, useLazyLoad, validateProp };

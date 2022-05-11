import React, { MutableRefObject } from "react";
declare type SuccessFunction<T> = (value: T) => void;
declare type ErrorFunction = (error: string) => void;
declare type OpenType<T> = (onSuccess: SuccessFunction<T>, onError: ErrorFunction, close: () => void, ref: MutableRefObject<HTMLDivElement>, elements: T[]) => React.ReactNode;
interface useModalResponse<T> {
    open: (component: OpenType<T>, elements?: T[]) => void;
    isOpen: boolean;
    close: () => void;
    render: () => React.ReactNode;
}
interface useModalProps<T> {
    onError: ErrorFunction;
    onSuccess: SuccessFunction<T>;
}
export declare const useModal: <T extends unknown>(config: useModalProps<T>) => useModalResponse<T>;
export {};

import { MutableRefObject } from "react";
export declare const useOnOutsideClick: <T extends HTMLElement | undefined>(ref: MutableRefObject<T>, handler: (e: MouseEvent | TouchEvent) => void) => void;

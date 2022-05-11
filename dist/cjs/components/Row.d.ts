/// <reference types="react" />
import { GenericProps } from "./Generic";
import { Size } from "../types";
export declare const Row: (props: GenericProps) => JSX.Element;
interface ColProps extends GenericProps {
    size: Size;
}
export declare const Col: (props: ColProps) => JSX.Element;
export {};

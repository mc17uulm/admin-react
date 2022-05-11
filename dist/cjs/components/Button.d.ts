import React, { FormEvent, MouseEvent } from "react";
import { Color } from "../types";
interface Props {
    children?: React.ReactNode;
    size?: 'default' | 'lg' | 'sm' | 'xs';
    color?: Color;
    type?: 'button' | 'submit' | 'reset';
    block?: boolean;
    disabled?: boolean;
    flat?: boolean;
    outline?: boolean;
    icon?: string;
    onClick?: (e: MouseEvent) => void;
    onSubmit?: (e: FormEvent) => void;
}
export declare const Button: (props: Props) => JSX.Element;
export {};

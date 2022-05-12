import React, { ChangeEventHandler } from "react";
import { GenericProps } from "./Generic";
export declare type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
export interface InputProps {
    id?: string;
    name?: string;
    className?: string;
    type?: InputType;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    max?: number;
    min?: number;
    maxLength?: number;
    multiple?: boolean;
    pattern?: string;
    required?: boolean;
    step?: number;
    autofocus?: boolean;
    size?: 'default' | 'lg' | 'sm';
    bottomBorder?: boolean;
    bigBottomBorder?: boolean;
    flat?: boolean;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    success?: string;
    warning?: string;
    error?: string;
    value?: string | number | readonly string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare const Input: {
    (props: InputProps): JSX.Element;
    Group: {
        (props: InputGroupProps): JSX.Element;
        Text: (props: GenericProps) => JSX.Element;
    };
    Prepend: (props: GenericProps) => JSX.Element;
    Append: (props: GenericProps) => JSX.Element;
};
interface InputGroupProps extends GenericProps {
    size?: 'default' | 'lg' | 'sm';
}
export declare const InputGroup: {
    (props: InputGroupProps): JSX.Element;
    Text: (props: GenericProps) => JSX.Element;
};
export declare const Addon: (props: GenericProps & {
    name: string;
}) => JSX.Element;
export declare const InputPrepend: (props: GenericProps) => JSX.Element;
export declare const InputAppend: (props: GenericProps) => JSX.Element;
export declare const InputGroupText: (props: GenericProps) => JSX.Element;
export declare const Checkbox: (props: InputProps & {
    id: string;
    label: string;
}) => JSX.Element;
export {};

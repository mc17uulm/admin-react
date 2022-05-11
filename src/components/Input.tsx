import React, {ChangeEventHandler, Fragment} from "react";
import { useClassName } from "./../hooks/useClassName";
import { useDefault } from "./../hooks/useDefault";
import { Generic, GenericProps } from "./Generic";

export type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password'  | 'radio'  | 'range' | 'reset'  | 'search'  | 'submit'  | 'tel'  | 'text'  | 'time'  | 'url'  | 'week';

export interface InputProps {
    id?: string,
    name?: string,
    className?: string,
    type?: InputType,
    placeholder?: string,
    readonly?: boolean,
    disabled?: boolean,
    max?: number,
    min?: number,
    maxLength?: number,
    multiple?: boolean,
    pattern?: string,
    required?: boolean,
    step?: number,
    autofocus?: boolean,
    size?: 'default' | 'lg' | 'sm',
    bottomBorder?: boolean,
    bigBottomBorder?: boolean,
    flat?: boolean,
    prepend?: React.ReactNode,
    append?: React.ReactNode,
    success?: string,
    warning?: string,
    error?: string,
    value?: string | number | readonly string[],
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input = (props : InputProps) => {

    const type = useDefault(props.type, 'text');
    const size = useDefault(props.size, 'default');

    const className = useClassName(
        props.className,
        size === 'default' ? undefined : `form-control-${size}`,
        props.flat ? '.rounded-0' : undefined,
        props.bottomBorder ? 'form-control-border' : undefined,
        props.bigBottomBorder ? 'form-control-border border-width-2' : undefined,
        props.success ? 'is-valid' : undefined,
        props.error ? 'is-invalid' : undefined,
        props.warning ? 'is-warning' : undefined
    );

    return (
        <input
            id={props.id}
            name={props.name}
            className={className}
            type={type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            readOnly={props.readonly}
            disabled={props.disabled}
            maxLength={props.maxLength}
            max={props.max}
            min={props.min}
            aria-invalid={typeof props.error !== 'undefined'}
            multiple={props.multiple}
            pattern={props.pattern}
            required={props.required}
            step={props.step}
            autoFocus={props.autofocus}
        />
    );

}

interface InputGroupProps extends GenericProps {
    size?: 'default' | 'lg' | 'sm'
}

export const InputGroup = (props : InputGroupProps) => {

    const size = useDefault(props.size, 'default');

    const className = useClassName(
        props.className,
        props.size === 'default' ? undefined : `input-group-${size}`
    )

    return (
        <Generic name='input-group' className={className} {...props} />
    );
}

export const Addon = (props : GenericProps & {name : string}) => {
    return (
        <Generic {...props}>
            <span className='input-group-text'>
                {props.children}
            </span>
        </Generic>
    );
}
export const InputPrepend = (props : GenericProps) => <Addon name='input-group-prepend' {...props} />;
export const InputAppend = (props : GenericProps) => <Addon name='input-group-append' {...props} />;
export const InputGroupText = (props : GenericProps) => <Generic name='input-group-text' {...props} />

Input.Group = InputGroup;
Input.Prepend = InputPrepend;
Input.Append = InputAppend;
InputGroup.Text = InputGroupText;

export const Checkbox = (props : InputProps & {id : string, label: string}) => {
    return (
        <Fragment>
            <Input {...props} id={props.id} type='checkbox' />
            <label htmlFor={props.id} style={{paddingLeft: '5px'}}>{props.label}</label>
        </Fragment>
    )
}

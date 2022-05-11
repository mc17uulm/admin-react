import React, {FormEvent, MouseEvent} from "react";
import {useClassName} from "../hooks/useClassName";
import {useDefault} from "../hooks/useDefault";
import {Icon} from "./Icon";
import {Color} from "../types";

interface Props {
    children?: React.ReactNode
    size?: 'default' | 'lg' | 'sm' | 'xs',
    color?: Color
    type?: 'button' | 'submit' | 'reset',
    block?: boolean,
    disabled?: boolean,
    flat?: boolean,
    outline?: boolean,
    icon?: string,
    onClick?: (e : MouseEvent) => void,
    onSubmit?: (e : FormEvent) => void
}

export const Button = (props: Props) => {

    const size = useDefault(props.size, 'default');
    const color = useDefault(props.color, 'default');
    const type = useDefault(props.type, 'button');

    const className = useClassName(
        'btn',
        size === 'default' ? undefined : `btn-${size}`,
        props.block ? 'btn-block' : undefined,
        props.disabled ? 'disabled' : undefined,
        props.flat ? 'btn-flat' : undefined,
        `btn-${props.outline ? 'outline-' : ''}${color}`
    );

    return (
        <button
            className={className}
            type={type}
            onClick={props.onClick}
            onSubmit={props.onSubmit}
        >
            {typeof props.icon !== "undefined" ? <Icon className={props.icon} /> : ''}
            {props.children}
        </button>
    )

}
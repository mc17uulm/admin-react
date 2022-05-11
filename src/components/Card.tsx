import {useClassName} from "../hooks/useClassName";
import {Color} from "../types";
import {useDefault} from "../hooks/useDefault";
import React from "react";
import {Generic, GenericProps} from "./Generic";

interface CardProps {
    color?: Color,
    outline?: boolean,
    tabs?: boolean,
    children?: React.ReactNode
}

export const Card = (props : CardProps) => {

    const color = useDefault(props.color, 'default');

    const className = useClassName(
        'card',
        color === 'default' ? undefined : `card-${color}`,
        props.outline ? 'card-outline' : undefined,
        props.tabs ? 'card-tabs' : undefined
    );

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

interface CardHeaderProps {
    border?: boolean,
    className?: string,
    children?: React.ReactNode
}

export const CardHeader = (props : CardHeaderProps) => {

    const className = useClassName(
        'card-header',
        props.className,
        props.border ? 'border-bottom-0' : undefined
    );

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Card.Header = CardHeader;

export const CardBody = (props : GenericProps) => <Generic name='card-body' {...props} />

Card.Body = CardBody;
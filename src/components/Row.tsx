import React from 'react';
import {Generic, GenericProps} from "./Generic";
import {Size} from "../types";
import {useClassName} from "../hooks/useClassName";

export const Row = (props : GenericProps) => <Generic name='row' {...props} />;

interface ColProps extends GenericProps {
    size: Size
}

export const Col = (props : ColProps) => {

    const className = useClassName(
        props.className,
        `col-${props.size}`
    )

    return (
        <div className={className}>
            {props.children}
        </div>
    )

}
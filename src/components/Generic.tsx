import React, {CSSProperties} from "react";
import {useClassName} from "../hooks/useClassName";

export interface GenericProps {
    className?: string,
    style?: CSSProperties,
    id?: string,
    key?: string,
    children?: React.ReactNode
}

interface Props extends GenericProps {
    name: string
}

export const Generic = (props : Props) => {

    const className = useClassName(
        props.className,
        props.name
    )

    return (
        <div className={className} style={props.style} id={props.id} key={props.key}>
            {props.children}
        </div>
    )

}
import React from "react";
import {useClassName} from "../hooks/useClassName";

export interface GenericProps {
    className?: string,
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
        <div className={className}>
            {props.children}
        </div>
    )

}
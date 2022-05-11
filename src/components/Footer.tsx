import React from "react";
import {GenericProps} from "./Generic";
import {useClassName} from "../hooks/useClassName";

export const Footer = (props : GenericProps) => {
    
    const className = useClassName(
        props.className,
        'main-footer'
    )
    
    return (
        <footer className={className}>
            {props.children}
        </footer>
    )
}

export const FooterVersion = (props : {version : string}) => {
    return (
        <div className='float-right d-none d-sm-inline-block'>
            <strong>Version</strong> {props.version}
        </div>
    );
}

Footer.Version = FooterVersion;
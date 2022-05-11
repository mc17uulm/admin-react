import {useDefault} from "../hooks/useDefault";
import React from "react";

interface Props {
    title: string
    children?: React.ReactNode
}

export const Header = (props : Props) => {
    return (
        <div className='content-header'>
            <div className='container-fluid'>
                <div className='row mb-2'>
                    <div className='col-sm-6'>
                        <h1 className='m-0'>{props.title}</h1>
                    </div>
                    <div className='col-sm-6'>
                        <ol className='breadcrumb float-sm-right'>
                            {props.children}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface BreadcrumbProps {
    active?: boolean,
    href?: string,
    children?: string
}

export const Breadcrumb = (props : BreadcrumbProps) => {

    const active = useDefault(props.active, false);
    const href = useDefault(props.href, '#');

    return (
        <li className={'breadcrumb-item' + (active ? ' active' : '')}>
            {active ? props.children : (
                <a href={href}>{props.children}</a>
            )}
        </li>
    )
}
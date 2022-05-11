import React, {useMemo, useRef, useState} from "react";
import {Icon} from "./../components/Icon";
import {useOnOutsideClick} from "../hooks/useOnOutsideClick";
import {useDefault} from "../hooks/useDefault";
import {useClassName} from "../hooks/useClassName";

export interface Badge {
    color: string,
    count : number
}

interface Props {
    icon: string | React.ReactNode,
    badge?: Badge | undefined,
    large?: boolean,
    right?: boolean,
    children: React.ReactNode
}

export const MenuDropdown = (props : Props) => {

    const ref = useRef() as React.MutableRefObject<HTMLLIElement>;
    const [show, setShow] = useState<boolean>(false);
    const large = useDefault(props.large, false);
    const right = useDefault(props.right, true);
    useOnOutsideClick(ref, () => setShow(false));

    const renderLogo = () => {
        return useMemo(() => {
            if(typeof props.icon === 'string') {
                return <Icon className={props.icon} />
            } else {
                return props.icon;
            }
        }, [props.icon]);
    }

    const className = useClassName(
        'dropdown-menu',
        large ? 'dropdown-menu-lg' : undefined,
        right ? 'dropdown-menu-right' : undefined,
        show ? 'show' : undefined
    );

    return (
        <li className={'nav-item dropdown' + (show ? ' show' : '')} ref={ref}>
            <a className='nav-link' aria-expanded={show} href='#' onClick={() => setShow(!show)}>
                {renderLogo()}
                {typeof props.badge !== 'undefined' ? (
                    <span className={`badge badge-${props.badge.color} navbar-badge`}>{props.badge.count}</span>
                ) : ''}
            </a>
            <div
                className={className}
                style={{left: 'inherit', right: '0px'}}
            >
                {props.children}
            </div>
        </li>
    )
}

interface MenuItemProps {
    href?: string,
    icon?: string,
    children?: string | React.ReactNode
}

export const MenuItem = (props : MenuItemProps) => {

    const href = useDefault(props.href, '#');

    return (
        <li className='list-group-item'>
            <a className='text-dark' href={href}>
                {props.icon ? <Icon className={props.icon} /> : ''} {props.children}
            </a>
        </li>
    );
}
import React, { MouseEvent } from "react";
import { Generic, GenericProps } from "./Generic";
import {useClassName} from "../hooks/useClassName";

export const Navbar = (props : GenericProps) => {

    const className = useClassName(
        'main-header navbar navbar-expand navbar-white navbar-light',
        props.className
    );

    return (
        <nav className={className}>
            {props.children}
        </nav>
    );

}

export const NavbarNav = (props : GenericProps) => {
    const className = useClassName(
        'navbar-nav',
        props.className
    );

    return (
        <ul className={className}>
            {props.children}
        </ul>
    )
}

Navbar.Nav = NavbarNav;

export const NavItem = (props : GenericProps) => <Generic name='nav-item' {...props} />;

Navbar.Item = NavItem;

interface NavLinkProps extends GenericProps {
    onClick?: (e : MouseEvent) => void,
    href?: string
}

export const NavLink = (props : NavLinkProps) => {

    const className = useClassName(
        'nav-link',
        props.className
    );

    return (
        <a className={className} href={props.href} role='button' onClick={props.onClick}>
            {props.children}
        </a>
    )
}

Navbar.Link = NavLink;
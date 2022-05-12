import { MouseEvent } from "react";
import { GenericProps } from "./Generic";
export declare const Navbar: {
    (props: GenericProps): JSX.Element;
    Nav: (props: GenericProps) => JSX.Element;
    Item: (props: GenericProps) => JSX.Element;
    Link: (props: NavLinkProps) => JSX.Element;
};
export declare const NavbarNav: (props: GenericProps) => JSX.Element;
export declare const NavItem: (props: GenericProps) => JSX.Element;
interface NavLinkProps extends GenericProps {
    onClick?: (e: MouseEvent) => void;
    href?: string;
}
export declare const NavLink: (props: NavLinkProps) => JSX.Element;
export {};

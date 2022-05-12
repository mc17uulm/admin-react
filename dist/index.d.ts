/// <reference types="react" />
import React, { MouseEvent as MouseEvent$1, FormEvent, MutableRefObject, ChangeEventHandler } from 'react';

interface GenericProps {
    className?: string;
    children?: React.ReactNode;
}
interface Props$3 extends GenericProps {
    name: string;
}
declare const Generic: (props: Props$3) => JSX.Element;

interface TabPane {
    title: string;
    id: string;
    render: () => React.ReactNode;
}
interface TabProps {
    panes: TabPane[];
}
declare const Tab: (props: TabProps) => JSX.Element;

declare type Color = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'danger' | 'warning' | 'light' | 'dark';
declare type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

declare const Row: (props: GenericProps) => JSX.Element;
interface ColProps extends GenericProps {
    size: Size;
}
declare const Col: (props: ColProps) => JSX.Element;

interface Props$2 {
    children?: React.ReactNode;
    size?: 'default' | 'lg' | 'sm' | 'xs';
    color?: Color;
    type?: 'button' | 'submit' | 'reset';
    block?: boolean;
    disabled?: boolean;
    flat?: boolean;
    outline?: boolean;
    icon?: string;
    onClick?: (e: MouseEvent$1) => void;
    onSubmit?: (e: FormEvent) => void;
}
declare const Button: (props: Props$2) => JSX.Element;

declare const Icon: (props: {
    className?: string;
}) => JSX.Element;

interface CardProps {
    color?: Color;
    outline?: boolean;
    tabs?: boolean;
    children?: React.ReactNode;
}
declare const Card: {
    (props: CardProps): JSX.Element;
    Header: (props: CardHeaderProps) => JSX.Element;
    Body: (props: GenericProps) => JSX.Element;
};
interface CardHeaderProps {
    border?: boolean;
    className?: string;
    children?: React.ReactNode;
}
declare const CardHeader: (props: CardHeaderProps) => JSX.Element;
declare const CardBody: (props: GenericProps) => JSX.Element;

declare const Content: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;

declare const Footer: {
    (props: GenericProps): JSX.Element;
    Version: (props: {
        version: string;
    }) => JSX.Element;
};
declare const FooterVersion: (props: {
    version: string;
}) => JSX.Element;

interface Props$1 {
    title: string;
    children?: React.ReactNode;
}
declare const Header: (props: Props$1) => JSX.Element;
interface BreadcrumbProps {
    active?: boolean;
    href?: string;
    children?: string;
}
declare const Breadcrumb: (props: BreadcrumbProps) => JSX.Element;

declare const Navbar: {
    (props: GenericProps): JSX.Element;
    Nav: (props: GenericProps) => JSX.Element;
    Item: (props: GenericProps) => JSX.Element;
    Link: (props: NavLinkProps) => JSX.Element;
};
declare const NavbarNav: (props: GenericProps) => JSX.Element;
declare const NavItem: (props: GenericProps) => JSX.Element;
interface NavLinkProps extends GenericProps {
    onClick?: (e: MouseEvent$1) => void;
    href?: string;
}
declare const NavLink: (props: NavLinkProps) => JSX.Element;

interface ModalProps {
    children?: React.ReactNode;
    forwardedRef: MutableRefObject<HTMLDivElement>;
}
declare const Modal: {
    (props: ModalProps): JSX.Element;
    Header: (props: GenericProps) => JSX.Element;
    Title: (props: GenericProps & {
        onClose: () => void;
    }) => JSX.Element;
    Body: (props: GenericProps) => JSX.Element;
    Footer: (props: GenericProps & {
        align?: boolean;
    }) => JSX.Element;
};
declare const ModalHeader: (props: GenericProps) => JSX.Element;
declare const ModalTitle: (props: GenericProps & {
    onClose: () => void;
}) => JSX.Element;
declare const ModalBody: (props: GenericProps) => JSX.Element;
declare const ModalFooter: (props: GenericProps & {
    align?: boolean;
}) => JSX.Element;

declare type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
interface InputProps {
    id?: string;
    name?: string;
    className?: string;
    type?: InputType;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    max?: number;
    min?: number;
    maxLength?: number;
    multiple?: boolean;
    pattern?: string;
    required?: boolean;
    step?: number;
    autofocus?: boolean;
    size?: 'default' | 'lg' | 'sm';
    bottomBorder?: boolean;
    bigBottomBorder?: boolean;
    flat?: boolean;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
    success?: string;
    warning?: string;
    error?: string;
    value?: string | number | readonly string[];
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: {
    (props: InputProps): JSX.Element;
    Group: {
        (props: InputGroupProps): JSX.Element;
        Text: (props: GenericProps) => JSX.Element;
    };
    Prepend: (props: GenericProps) => JSX.Element;
    Append: (props: GenericProps) => JSX.Element;
};
interface InputGroupProps extends GenericProps {
    size?: 'default' | 'lg' | 'sm';
}
declare const InputGroup: {
    (props: InputGroupProps): JSX.Element;
    Text: (props: GenericProps) => JSX.Element;
};
declare const Addon: (props: GenericProps & {
    name: string;
}) => JSX.Element;
declare const InputPrepend: (props: GenericProps) => JSX.Element;
declare const InputAppend: (props: GenericProps) => JSX.Element;
declare const InputGroupText: (props: GenericProps) => JSX.Element;
declare const Checkbox: (props: InputProps & {
    id: string;
    label: string;
}) => JSX.Element;

interface SidebarLink {
    title: string;
    href?: string;
    icon?: string;
    children?: SidebarLink[];
}
declare const Sidebar: {
    (props: GenericProps): JSX.Element;
    Main: (props: GenericProps) => JSX.Element;
    Menu: (props: SidebarMenuProps) => JSX.Element;
    Item: (props: SidebarItemProps) => JSX.Element;
    Brand: (props: SidebarBrandProps) => JSX.Element;
    SearchPanel: (props: SidebarSearchPanelProps) => JSX.Element;
    UserPanel: (props: SidebarUserPanelProps) => JSX.Element;
    Header: (props: GenericProps) => JSX.Element;
};
declare const MainSidebar: (props: GenericProps) => JSX.Element;
interface SidebarMenuProps {
    links: SidebarLink[];
    path: string;
    className?: string;
}
declare const SidebarMenu: (props: SidebarMenuProps) => JSX.Element;
interface SidebarItemProps {
    active?: boolean;
    href?: string;
    icon: string;
    title: string;
    children?: React.ReactNode;
}
declare const SidebarItem: (props: SidebarItemProps) => JSX.Element;
interface SidebarBrandProps {
    link: string;
    image: string;
    title: string;
    className?: string;
}
declare const SidebarBrand: (props: SidebarBrandProps) => JSX.Element;
interface SidebarSearchPanelProps {
    placeholder?: string;
    label?: string;
}
declare const SidebarSearchPanel: (props: SidebarSearchPanelProps) => JSX.Element;
interface SidebarUserPanelProps {
    image: string;
    name: string;
    link: string;
}
declare const SidebarUserPanel: (props: SidebarUserPanelProps) => JSX.Element;
declare const SidebarHeader: (props: GenericProps) => JSX.Element;

declare const LoginBox: {
    (props: GenericProps): JSX.Element;
    Msg: (props: GenericProps) => JSX.Element;
};
declare const LoginLogo: (props: GenericProps) => JSX.Element;
declare const LoginBoxMsg: (props: GenericProps) => JSX.Element;

interface Badge {
    color: string;
    count: number;
}
interface Props {
    icon: string | React.ReactNode;
    badge?: Badge | undefined;
    large?: boolean;
    right?: boolean;
    children: React.ReactNode;
}
declare const MenuDropdown: (props: Props) => JSX.Element;
interface MenuItemProps {
    href?: string;
    icon?: string;
    children?: string | React.ReactNode;
}
declare const MenuItem: (props: MenuItemProps) => JSX.Element;

declare const SearchBlock: () => JSX.Element;

declare const useClassName: (...classes: (string | undefined)[]) => string;

declare const useDefault: <T extends unknown>(element: T | undefined, defaultValue: T) => T;

declare type SuccessFunction<T> = (value: T) => void;
declare type ErrorFunction = (error: string) => void;
declare type OpenType<T> = (onSuccess: SuccessFunction<T>, onError: ErrorFunction, close: () => void, ref: MutableRefObject<HTMLDivElement>, elements: T[]) => React.ReactNode;
interface useModalResponse<T> {
    open: (component: OpenType<T>, elements?: T[]) => void;
    isOpen: boolean;
    close: () => void;
    render: () => React.ReactNode;
}
interface useModalProps<T> {
    onError: ErrorFunction;
    onSuccess: SuccessFunction<T>;
}
declare const useModal: <T extends unknown>(config: useModalProps<T>) => useModalResponse<T>;

declare const useOnOutsideClick: <T extends HTMLElement | undefined>(ref: MutableRefObject<T>, handler: (e: MouseEvent | TouchEvent) => void) => void;

declare const useBodyClass: (...classes: string[]) => void;
declare const useBodyStyle: (...styles: string[]) => void;

interface useSidebarResponse {
    open: boolean;
    handleToggle: () => void;
}
declare const useSidebar: (value?: boolean) => useSidebarResponse;

export { Addon, Badge, Breadcrumb, Button, Card, CardBody, CardHeader, Checkbox, Col, Color, Content, Footer, FooterVersion, Generic, GenericProps, Header, Icon, Input, InputAppend, InputGroup, InputGroupText, InputPrepend, InputProps, InputType, LoginBox, LoginBoxMsg, LoginLogo, MainSidebar, MenuDropdown, MenuItem, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, NavItem, NavLink, Navbar, NavbarNav, Row, SearchBlock, Sidebar, SidebarBrand, SidebarHeader, SidebarItem, SidebarLink, SidebarMenu, SidebarSearchPanel, SidebarUserPanel, Size, Tab, TabPane, useBodyClass, useBodyStyle, useClassName, useDefault, useModal, useOnOutsideClick, useSidebar };

import React from 'react';
import { GenericProps } from '../umd';
export interface SidebarLink {
    title: string;
    href?: string;
    icon?: string;
    children?: SidebarLink[];
}
export declare const Sidebar: {
    (props: GenericProps): JSX.Element;
    Main: (props: GenericProps) => JSX.Element;
    Menu: (props: SidebarMenuProps) => JSX.Element;
    Item: (props: SidebarItemProps) => JSX.Element;
    Brand: (props: SidebarBrandProps) => JSX.Element;
    SearchPanel: (props: SidebarSearchPanelProps) => JSX.Element;
    UserPanel: (props: SidebarUserPanelProps) => JSX.Element;
    Header: (props: GenericProps) => JSX.Element;
};
export declare const MainSidebar: (props: GenericProps) => JSX.Element;
interface SidebarMenuProps {
    links: SidebarLink[];
    path: string;
    className?: string;
}
export declare const SidebarMenu: (props: SidebarMenuProps) => JSX.Element;
interface SidebarItemProps {
    active?: boolean;
    href?: string;
    icon: string;
    title: string;
    children?: React.ReactNode;
}
export declare const SidebarItem: (props: SidebarItemProps) => JSX.Element;
interface SidebarBrandProps {
    link: string;
    image: string;
    title: string;
    className?: string;
}
export declare const SidebarBrand: (props: SidebarBrandProps) => JSX.Element;
interface SidebarSearchPanelProps {
    placeholder?: string;
    label?: string;
}
export declare const SidebarSearchPanel: (props: SidebarSearchPanelProps) => JSX.Element;
interface SidebarUserPanelProps {
    image: string;
    name: string;
    link: string;
}
export declare const SidebarUserPanel: (props: SidebarUserPanelProps) => JSX.Element;
export declare const SidebarHeader: (props: GenericProps) => JSX.Element;
export {};

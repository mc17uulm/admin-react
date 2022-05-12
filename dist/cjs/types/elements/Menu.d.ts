import React from "react";
export interface Badge {
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
export declare const MenuDropdown: (props: Props) => JSX.Element;
interface MenuItemProps {
    href?: string;
    icon?: string;
    children?: string | React.ReactNode;
}
export declare const MenuItem: (props: MenuItemProps) => JSX.Element;
export {};

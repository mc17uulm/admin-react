import React from "react";
interface Props {
    title: string;
    children?: React.ReactNode;
}
export declare const Header: (props: Props) => JSX.Element;
interface BreadcrumbProps {
    active?: boolean;
    href?: string;
    children?: string;
}
export declare const Breadcrumb: (props: BreadcrumbProps) => JSX.Element;
export {};

import React from "react";
export interface GenericProps {
    className?: string;
    children?: React.ReactNode;
}
interface Props extends GenericProps {
    name: string;
}
export declare const Generic: (props: Props) => JSX.Element;
export {};

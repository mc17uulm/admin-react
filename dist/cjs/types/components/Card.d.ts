import { Color } from "../types";
import React from "react";
import { GenericProps } from "./Generic";
interface CardProps {
    color?: Color;
    outline?: boolean;
    tabs?: boolean;
    children?: React.ReactNode;
}
export declare const Card: {
    (props: CardProps): JSX.Element;
    Header: (props: CardHeaderProps) => JSX.Element;
    Body: (props: GenericProps) => JSX.Element;
};
interface CardHeaderProps {
    border?: boolean;
    className?: string;
    children?: React.ReactNode;
}
export declare const CardHeader: (props: CardHeaderProps) => JSX.Element;
export declare const CardBody: (props: GenericProps) => JSX.Element;
export {};

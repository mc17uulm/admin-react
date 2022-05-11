import React, { MutableRefObject } from "react";
import { GenericProps } from "./Generic";
interface ModalProps {
    children?: React.ReactNode;
    forwardedRef: MutableRefObject<HTMLDivElement>;
}
export declare const Modal: {
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
export declare const ModalHeader: (props: GenericProps) => JSX.Element;
export declare const ModalTitle: (props: GenericProps & {
    onClose: () => void;
}) => JSX.Element;
export declare const ModalBody: (props: GenericProps) => JSX.Element;
export declare const ModalFooter: (props: GenericProps & {
    align?: boolean;
}) => JSX.Element;
export {};

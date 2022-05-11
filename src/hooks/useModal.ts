import React, {MutableRefObject, useCallback, useRef, useState} from "react";
import {useOnOutsideClick} from "./useOnOutsideClick";

type SuccessFunction<T> = (value : T) => void;
type ErrorFunction = (error : string) => void;
type OpenType<T> = (
    onSuccess: SuccessFunction<T>,
    onError: ErrorFunction,
    close: () => void,
    ref: MutableRefObject<HTMLDivElement>,
    elements: T[]
) => React.ReactNode

interface useModalResponse<T> {
    open: (component: OpenType<T>, elements?: T[]) => void,
    isOpen: boolean,
    close: () => void,
    render: () => React.ReactNode
}

interface useModalProps<T> {
    onError: ErrorFunction,
    onSuccess: SuccessFunction<T>
}

export const useModal = <T extends unknown>(config : useModalProps<T>) : useModalResponse<T> => {

    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    const [open, setOpen] = useState<boolean>(false);
    const [component, setComponent] = useState<React.ReactNode | undefined>(undefined);
    useOnOutsideClick(ref, () => doClose());

    const doOpen = useCallback((component : OpenType<T>, elements: T[] = []) : void => {
        if(!open) {
            document.body.classList.add('modal-open');
            setComponent(component(config.onSuccess, config.onError, doClose, ref, elements));
            setOpen(true);
        }
    }, [open]);


    const doClose = useCallback(() : void => {
        document.body.classList.remove('modal-open');
        setComponent(undefined);
        setOpen(false);
    }, []);

    return {
        open: doOpen,
        isOpen: open,
        close: doClose,
        render: () => component
    }

}
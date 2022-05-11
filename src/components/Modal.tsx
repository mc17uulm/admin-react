import React, {Fragment, MutableRefObject} from "react";
import { useClassName } from "./../hooks/useClassName";
import { Generic, GenericProps } from "./Generic";

interface ModalProps {
    children?: React.ReactNode,
    forwardedRef: MutableRefObject<HTMLDivElement>
}

export const Modal = (props : ModalProps) => {
    return (
        <Fragment>
            <div className='modal fade show' style={{display: 'block'}} role='dialog'>
                <div className='modal-dialog' ref={props.forwardedRef}>
                    <div className='modal-content'>
                        {props.children}
                    </div>
                </div>
            </div>
            <div className='modal-backdrop fade show'></div>
        </Fragment>
    );
}

export const ModalHeader = (props : GenericProps) => <Generic name='modal-header' {...props} />
Modal.Header = ModalHeader;

export const ModalTitle = (props : GenericProps & {onClose: () => void}) => {
    return (
        <ModalHeader className={props.className}>
            <h4 className='modal-title'>{props.children}</h4>
            <button className='close' type='button' aria-label='Close' onClick={props.onClose}>
                <span aria-hidden='true'>×</span>
            </button>
        </ModalHeader>
    );
}
Modal.Title = ModalTitle;

export const ModalBody = (props : GenericProps) => <Generic name='modal-body' {...props} />;
Modal.Body = ModalBody;

export const ModalFooter = (props : GenericProps & {align?: boolean}) => {

    const className = useClassName(
        'modal-footer',
        props.align ? ' justify-content-between' : undefined
    )

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

Modal.Footer = ModalFooter;
import React from "react";
import {Generic, GenericProps} from "./../components/Generic";

export const LoginBox = (props : GenericProps) => <Generic name='login-box' {...props} />
export const LoginLogo = (props : GenericProps) => <Generic name='login-logo' {...props} />
export const LoginBoxMsg = (props : GenericProps) => {
    return (
        <p className='login-box-msg'>
            {props.children}
        </p>
    );
}
LoginBox.Msg = LoginBoxMsg;
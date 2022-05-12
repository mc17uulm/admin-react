import {useEffect} from "react";

export const useBodyClass = (... classes : string[]) : void => {
    useEffect(() => {
        document.body.classList.add(...classes);
    }, []);
}

export const useBodyStyle = (... styles : string[]) : void => {
    useEffect(() => {
        document.body.setAttribute('style', styles.join(';'));
    }, []);
}
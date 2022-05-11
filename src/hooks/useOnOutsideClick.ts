import {MutableRefObject, useEffect} from "react";

export const useOnOutsideClick = <T extends HTMLElement | undefined>(ref : MutableRefObject<T>, handler: (e : MouseEvent | TouchEvent) => void) => {
    useEffect(() => {
        const listener = (e : MouseEvent | TouchEvent) => {
            if(!ref.current || ref.current.contains(e.target as Node)) {
                return;
            }

            handler(e);
        }

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        }

    }, [ref, handler]);
}
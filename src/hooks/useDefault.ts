import {useMemo} from "react";

export const useDefault = <T extends unknown>(element : T | undefined, defaultValue : T) : T => {
    return useMemo(() => {
        return typeof element === 'undefined' ? defaultValue : element;
    }, [element]);
}
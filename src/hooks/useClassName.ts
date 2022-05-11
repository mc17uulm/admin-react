import {useMemo} from "react";

export const useClassName = (... classes : (string | undefined)[]) : string => {
    return useMemo(() => {
        return classes.filter((str : string | undefined) => typeof str !== 'undefined').join(' ');
    }, [classes]);
}
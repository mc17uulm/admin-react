import {useEffect, useState} from "react";

interface useSidebarResponse {
    open: boolean,
    handleToggle: () => void
}

export const useSidebar = (value : boolean = true) : useSidebarResponse => {

    const [open, setOpen] = useState<boolean>(true);

    useEffect(() => {
        setOpen(value);
    }, [value]);

    const handleToggle = () => {
        open ?
            document.body.classList.add('sidebar-collapse') :
            document.body.classList.remove('sidebar-collapse');
        setOpen(!open);
    }

    return {
        open,
        handleToggle
    };
}
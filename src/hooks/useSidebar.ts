import {useState} from "react";

interface useSidebarResponse {
    open: boolean,
    handleToggle: () => void
}

export const useSidebar = (value : boolean = true) : useSidebarResponse => {

    const [open, setOpen] = useState<boolean>(value);

    const handleToggle = () => {
        open ?
            document.body.classList.remove('sidebar-collapse') : 
            document.body.classList.add('sidebar-collapse');
        setOpen(!open);
    }

    return {
        open,
        handleToggle
    };
}
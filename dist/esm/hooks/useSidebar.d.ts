interface useSidebarResponse {
    open: boolean;
    handleToggle: () => void;
}
export declare const useSidebar: (value?: boolean) => useSidebarResponse;
export {};

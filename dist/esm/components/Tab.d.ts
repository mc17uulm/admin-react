import React from "react";
export interface TabPane {
    title: string;
    id: string;
    render: () => React.ReactNode;
}
interface TabProps {
    panes: TabPane[];
}
export declare const Tab: (props: TabProps) => JSX.Element;
export {};

import React, {Fragment, MouseEvent, useState} from "react";

export interface TabPane {
    title: string,
    id: string,
    render: () => React.ReactNode
}

interface TabProps {
    panes: TabPane[]
}

export const Tab = (props : TabProps) => {

    const [active, setActive] = useState<TabPane>(props.panes[0]);

    const handleClick = (e : MouseEvent, pane: TabPane) : void => {
        e.preventDefault();
        setActive(pane);
    }

    return (
        <Fragment>
            <ul className='nav nav-tabs' role='tablist'>
                {props.panes.map((pane : TabPane, i : number) => (
                    <li key={`tabnav_${pane.id}_${i}`} className='nav-item'>
                        <a
                            className={'nav-link' + (pane.id === active.id ? ' active' : '')}
                            href={`#${pane.id}`}
                            onClick={(e : MouseEvent) => handleClick(e, pane)}
                            role='tab'
                            aria-selected={pane.id === active.id}
                        >{pane.title}</a>
                    </li>
                ))}
            </ul>
            <div className='tab-content'>
                {props.panes.map((pane : TabPane, i: number) => (
                    <div
                        id={pane.id}
                        key={`tab_${pane.id}_${i}`}
                        className={'tab-pane fade' + (pane.id === active.id ? ' show active' : '')}
                        role='tabpanel'
                    >
                        {pane.render()}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}
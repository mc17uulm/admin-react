import React, { useMemo, useState, MouseEvent } from 'react';
import { Icon } from '../components/Icon';
import { useDefault } from '../hooks/useDefault';
import { useClassName } from '../hooks/useClassName';
import {Generic, GenericProps } from '../components/Generic';

export interface SidebarLink {
    title: string,
    href?: string,
    icon?: string,
    children?: SidebarLink[]
}

const renderItem = (link : SidebarLink, i : number, depth: number, path: string): React.ReactNode => {

    const icon = useDefault(link.icon, 'fa fa-circle');

    return (
        <SidebarItem
            key={`sidebar-item-${depth}-${i}`}
            icon={icon}
            title={link.title}
            href={link.href}
            active={path === link.href}
        >
            {link.children ? link.children.map((_link: SidebarLink, _i: number) => renderItem(_link, _i, depth + 1, path)) : undefined}
        </SidebarItem>
    )

}

export const Sidebar = (props : GenericProps) => {

    const className = useClassName(
        'main-sidebar sidebar-dark-primary elevation-4',
        props.className
    );

    return (
        <aside className={className}>
            {props.children}
        </aside>
    );
}

export const MainSidebar = (props : GenericProps) => <Generic name='sidebar' {...props} />
Sidebar.Main = MainSidebar;

interface SidebarMenuProps {
    links: SidebarLink[],
    path: string,
    className?: string
}

export const SidebarMenu = (props : SidebarMenuProps) => {

    const className = useClassName(
        'mt-2',
        props.className
    );

    return (
        <nav className={className}>
            <ul className='nav nav-pills nav-sidebar flex-column' role='menu'>
                {props.links.map((link : SidebarLink, i : number) => renderItem(link, i, 0, props.path))}
            </ul>
        </nav>
    )
}

Sidebar.Menu = SidebarMenu;

interface SidebarItemProps {
    active?: boolean,
    href?: string,
    icon: string,
    title: string,
    children?: React.ReactNode
}

export const SidebarItem = (props : SidebarItemProps) => {

    const active = useDefault(props.active, false);

    const [open, setOpen] = useState<boolean>(active);

    const className = useClassName(
        'nav-icon',
        props.icon
    );

    const hasChildren : boolean = useMemo(() => {
        return typeof props.children !== 'undefined';
    }, [props.children]);

    const onClick = (e : MouseEvent) => {
        if(hasChildren) {
            e.preventDefault();
            setOpen(!open);
        }
    }

    return (
        <li className={'nav-item' + (open ? ' open' : '')}>
            <a 
                className={'nav-link' + (props.active ? ' active' : '')} 
                href={props.href || '#'} 
                onClick={onClick}
            >
                <Icon className={className}  /> <p>
                    {props.title}
                    {hasChildren ? <Icon className={(open ? 'fa fa-angle-down ' : 'fa fa-angle-left ') + 'right'}/> : ''}
                </p>
            </a>
            {hasChildren ? (
                <ul className='nav nav-treeview' style={{display: open ? 'block' : 'none'}}>
                    {props.children}
                </ul>
            ) : ''}
        </li>
    );
}

Sidebar.Item = SidebarItem;

interface SidebarBrandProps {
    link: string,
    image: string,
    title: string,
    className?: string
}

export const SidebarBrand = (props : SidebarBrandProps) => {

    const className = useClassName(
        'brand-img img-circle-elevation-3',
        props.className
    );

    return (
        <a className='brand-link' href={props.link}>
            <img
                className={className}
                src={props.image}
                alt={props.title}
            />
            <span className='brand-text font-weight-light'>{props.title}</span>
        </a>
    );
}

Sidebar.Brand = SidebarBrand;

interface SidebarSearchPanelProps {
    placeholder?: string,
    label?: string
}

export const SidebarSearchPanel = (props : SidebarSearchPanelProps) => {

    const placeholder = useDefault(props.placeholder, 'Search...');
    const label = useDefault(props.label, 'Search');

    return (
        <div className='form-inline'>
            <div className='input-group'>
                <input
                    className='form-control form-control-sidebar'
                    type='search'
                    placeholder={placeholder}
                    aria-label={label}
                />
                <div className='input-group-append'>
                    <button className='btn btn-sidebar'>
                        <Icon className='fa fa-search fa-fw' />
                    </button>
                </div>
            </div>
        </div>
    );
}

Sidebar.SearchPanel = SidebarSearchPanel;

interface SidebarUserPanelProps {
    image: string,
    name: string,
    link: string
}

export const SidebarUserPanel = (props : SidebarUserPanelProps) => {
    return (
        <div className='user-panel mt-3 pb-3 mb-3 d-flex'>
            <div className='image'>
                <img
                    className='img-circle elevation-2'
                    src={props.image}
                    alt={props.name}
                />
            </div>
            <div className='info'>
                <a className='d-block' href={props.link}>{props.name}</a>
            </div>
        </div>
    );
}

Sidebar.UserPanel = SidebarUserPanel;

export const SidebarHeader = (props : GenericProps) => {
    
    const className = useClassName(
        'nav-header',
        props.className
    );
    
    return (
        <li className={className}>
            {props.children}
        </li>
    );
}

Sidebar.Header = SidebarHeader;

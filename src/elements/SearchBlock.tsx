import React from "react";
import {Icon} from "./../components/Icon";
import {useState} from "react";

export const SearchBlock = () => {

    const [search, setSearch] = useState<boolean>(false);

    const toggleSearch = () => {
        setSearch(!search);
    }

    return (
        <li className='nav-item'>
            <a className='nav-link' role='button' onClick={toggleSearch}>
                <Icon className='fa fa-search' />
            </a>
            <div
                className={'navbar-search-block' + (search ? ' navbar-search-open' : '')}
                style={{display: search ? 'flex' : 'none'}}
            >
                <form className='form-inline'>
                    <div className='input-group input-group-sm'>
                        <input
                            className='form-control form-control-navbar'
                            type='search'
                            placeholder='Suchen'
                            aria-label='Suchen'
                        />
                        <div className='input-group-append'>
                            <button className='btn btn-navbar' type='submit'>
                                <Icon className='fa fa-search' />
                            </button>
                            <button className='btn btn-navbar' type='button' onClick={toggleSearch}>
                                <Icon className='fa fa-times' />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </li>
    );
}
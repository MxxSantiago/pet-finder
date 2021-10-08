import React from 'react';

import Nav from '../../molecules/nav/Nav.component';
import SearchBar from '../../molecules/SearchBar';

import { header, headerMain } from './header.module.scss';

const Header = ({ title }) => {
    return (
        <div className={header}>
            <Nav />
            <header className={headerMain}>
                <h1>{title}</h1>
                <SearchBar />
            </header>
        </div>
    );
};

export default Header;

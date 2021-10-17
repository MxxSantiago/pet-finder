import React from 'react';

import Nav from '../../molecules/nav/Nav.component';
import SearchBar from '../../molecules/SearchBar';

import { header, headerMain } from './header.module.scss';

const Header = ({ setType }) => {
    return (
        <div className={header}>
            <Nav />
            <header className={headerMain}>
                <h1>Pet-Finder</h1>
                <SearchBar setType={setType} />
            </header>
        </div>
    );
};

export default Header;

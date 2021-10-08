import React from 'react';

import { nav, navItemsContainer } from './nav.module.scss';

const navItems = ['Save Lives', 'Get A New Friend', 'Contact a specialist'];

const Nav = () => {
    return (
        <nav className={nav}>
            <div className={navItemsContainer}>
                {navItems.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </nav>
    );
};

export default Nav;

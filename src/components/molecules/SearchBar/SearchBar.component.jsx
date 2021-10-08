import React from 'react';

import { searchBar } from './search-bar.module.scss';

const SearchBar = () => {
    return (
        <div className={searchBar}>
            <input type="text" placeholder="Enter pet parameters" />
        </div>
    );
};

export default SearchBar;

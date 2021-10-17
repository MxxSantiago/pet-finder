import React, { useRef } from 'react';
import Button from '../../atoms/button/Button.component';

import { searchBar } from './search-bar.module.scss';

const SearchBar = ({ setType }) => {
    const inputRef = useRef();

    const filterPerType = (event) => {
        event.preventDefault();

        const type = inputRef.current.value;
        if (type.trim().length) {
            setType(type);
        } else {
            alert('Enter a valid value...');
        }

        inputRef.current.value = '';
    };

    return (
        <form className={searchBar} onSubmit={filterPerType}>
            <input
                type="text"
                placeholder="Enter animal type"
                ref={inputRef}
                required={true}
            />
            <Button type="submit" children="search" />
        </form>
    );
};

export default SearchBar;

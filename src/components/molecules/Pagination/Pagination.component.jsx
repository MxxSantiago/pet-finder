import React, { useEffect } from 'react';

import Button from '../../atoms/button/Button.component';

import { pagination } from './pagination.module.scss';

const Pagination = ({ posts, currentPage, setCurrentPage }) => {
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);

    const paginationLimit = new Array(5).fill().map((_, index) => index + 1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage({ target }) {
        const pageNumber = Number(target.textContent);
        setCurrentPage(pageNumber);
    }

    if (!posts) return null;

    return (
        <div className={pagination}>
            <Button
                disabled={currentPage === 1 ? true : false}
                onClick={goToPreviousPage}
            >
                prev
            </Button>
            {paginationLimit.map((item, index) => (
                <Button
                    disabled={currentPage === item ? true : false}
                    children={item}
                    key={index}
                    onClick={changePage}
                />
            ))}
            <Button onClick={goToNextPage}>next</Button>
        </div>
    );
};

export default Pagination;

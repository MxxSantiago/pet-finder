import React, { useState } from 'react';

import Button from '../../atoms/button/Button.component';

import { pagination } from './pagination.module.scss';

const Pagination = ({ setPostsPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // useEffect(() => {
    //     window.scrollTo({ behavior: 'smooth', top: '0px' });
    // }, [currentPage]);

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

    return (
        <div className={pagination}>
            <Button
                // Change this for data page
                disabled={currentPage === 1 ? true : false}
                onClick={goToPreviousPage}
            >
                prev
            </Button>
            {paginationLimit.map((item, index) => (
                <Button
                    children={item}
                    key={item + index}
                    onClick={changePage}
                />
            ))}
            <Button onClick={goToNextPage}>next</Button>
        </div>
    );
};

export default Pagination;

import React from 'react';

import useFetch from '../../../hooks/useFetch';

import Pagination from '../../molecules/Pagination/Pagination.component';
import Results from '../../molecules/Results/Results.component';
import PostsContainer from '../postsContainer/PostsContainer.component';

import { main } from './main.module.scss';

const Main = () => {
    const [data, currentPage, setCurrentPage] = useFetch();

    return (
        <div className={main}>
            <Results results={data.pagination} />
            <PostsContainer posts={data.animals} />
            <Pagination
                posts={data.animals}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Main;

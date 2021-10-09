import React from 'react';

import Pagination from '../molecules/Pagination/Pagination.component';
import Results from '../molecules/Results/Results.component';
import Header from '../organisms/header/Header.component';
import PostsContainer from '../organisms/postsContainer/PostsContainer.component';

import { homeTemplate } from './home-template.module.scss';

const HomeTemplate = ({ data, currentPage, setCurrentPage }) => {
    return (
        <div className={homeTemplate}>
            <Header title={'Pet-Finder'} />
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

export default HomeTemplate;

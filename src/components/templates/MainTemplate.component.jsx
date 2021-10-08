import React from 'react';

import Pagination from '../molecules/Pagination/Pagination.component';
import Results from '../molecules/Results/Results.component';
import Header from '../organisms/header/Header.component';
import PostsContainer from '../organisms/postsContainer/PostsContainer.component';

import { mainTemplate } from './main-template.module.scss';

const MainTemplate = ({ data }) => {
    return (
        <div className={mainTemplate}>
            <Header title={'Pet-Finder'} />
            <Results />
            <PostsContainer data={data} />
            <Pagination />
        </div>
    );
};

export default MainTemplate;

import React from 'react';
import useFetch from '../../hooks/useFetch';

import Header from '../organisms/header/Header.component';
import Main from '../organisms/main/Main.component';

import { homeTemplate } from './home-template.module.scss';

const HomeTemplate = () => {
    const [data, currentPage, setCurrentPage, setType] = useFetch();

    return (
        <div className={homeTemplate}>
            <Header setType={setType} />
            <Main
                data={data}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default HomeTemplate;

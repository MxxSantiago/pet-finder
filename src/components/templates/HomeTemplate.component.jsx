import React from 'react';

import Header from '../organisms/header/Header.component';
import Main from '../organisms/main/Main.component';

import { homeTemplate } from './home-template.module.scss';

const HomeTemplate = () => {
    return (
        <div className={homeTemplate}>
            <Header />
            <Main />
        </div>
    );
};

export default HomeTemplate;

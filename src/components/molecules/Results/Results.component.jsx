import React from 'react';

import { resultsContainer, results } from './results.module.scss';

const Results = () => {
    return (
        <div className={resultsContainer}>
            <h2 className={results}>
                83
                <em> results for shelters & rescues near you </em>
            </h2>
        </div>
    );
};

export default Results;

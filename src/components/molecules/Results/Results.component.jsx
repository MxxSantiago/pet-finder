import React from 'react';

import { resultsContainer, result } from './results.module.scss';

const Results = ({ results = 0 }) => {
    if (!results.total_count) {
        return null;
    }

    return (
        <div className={resultsContainer}>
            <h2 className={result}>
                {results.total_count}
                <em> results for shelters & rescues</em>
            </h2>
        </div>
    );
};

export default Results;

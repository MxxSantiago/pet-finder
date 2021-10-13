import { Client } from '@petfinder/petfinder-js';

import { useEffect, useState } from 'react';

const client = new Client({
    apiKey: 'Uw2nyHWo7HuNa91CA030ycgBith6Bsiy85H0ldasaefSLpAstK',
    secret: '44kOV61L3aNGRmZXIb4F87ZxCb3A7MzJbsGnc0aC',
});

function useFetch() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        client.animal
            .search({ page: currentPage, limit: 10 })
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, [currentPage]);

    return [data, currentPage, setCurrentPage];
}

export default useFetch;

import { useEffect, useState } from 'react';
import client from '../APIclient';

function useFetch() {
    const [type, setType] = useState('');
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        client.animal
            .search({ page: currentPage, limit: 10, type: type })
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, [currentPage, type]);

    return [data, currentPage, setCurrentPage, setType];
}

export default useFetch;

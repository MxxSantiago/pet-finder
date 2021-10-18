import { useEffect, useState } from 'react';
import client from '../APIclient';

function useSingleFetch(id) {
    const [data, setData] = useState({
        post: [],
        loading: false,
    });

    useEffect(() => {
        setData((state) => ({
            ...state,
            loading: true,
        }));

        client.animal
            .show(id)
            .then((response) => {
                setData({
                    post: response,
                    loading: false,
                });
            })
            .catch((error) => console.log(error));
    }, [id]);

    return data;
}

export default useSingleFetch;

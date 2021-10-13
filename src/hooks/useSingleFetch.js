import { Client } from '@petfinder/petfinder-js';

import { useEffect, useState } from 'react';

const client = new Client({
    apiKey: 'Uw2nyHWo7HuNa91CA030ycgBith6Bsiy85H0ldasaefSLpAstK',
    secret: '44kOV61L3aNGRmZXIb4F87ZxCb3A7MzJbsGnc0aC',
});

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

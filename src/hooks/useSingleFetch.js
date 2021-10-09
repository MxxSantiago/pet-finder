import { Client } from '@petfinder/petfinder-js';

import { useEffect, useState } from 'react';

const client = new Client({
    apiKey: 'Uw2nyHWo7HuNa91CA030ycgBith6Bsiy85H0ldasaefSLpAstK',
    secret: '44kOV61L3aNGRmZXIb4F87ZxCb3A7MzJbsGnc0aC',
});

function useSingleFetch() {
    const [id, setId] = useState(null);
    const [charging, setCharging] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setCharging(true);

        client.animal
            .show(id)
            .then((response) => {
                setData(response);
                setCharging(false);
            })
            .catch((error) => console.log(error));
    }, [id]);

    const changeId = (request) => {
        if (request === id) return;
        setId(request);
    };

    return [data, changeId, charging];
}

export default useSingleFetch;

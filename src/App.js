// import { Client } from '@petfinder/petfinder-js';

import { useState } from 'react';
import pets from './pets';

import MainTemplate from './components/templates/MainTemplate.component';

// const client = new Client({
//     apiKey: 'Uw2nyHWo7HuNa91CA030ycgBith6Bsiy85H0ldasaefSLpAstK',
//     secret: '44kOV61L3aNGRmZXIb4F87ZxCb3A7MzJbsGnc0aC',
// });

function App() {
    const [posts, setPosts] = useState(pets.animals);

    // const [currentPage, setCurrentPage] = useState(1);
    //     useEffect(() => {
    //         client.animal
    //             .search(page: currentPage)
    //             .then(function (response) {
    //                 console.log(response);
    //                 setPosts(response.data.animals);
    //             })
    //             .catch(function (error) {
    //                 consola.log(error);
    //             });
    //     }, []);

    return (
        <div>
            <MainTemplate data={posts} />
        </div>
    );
}

export default App;

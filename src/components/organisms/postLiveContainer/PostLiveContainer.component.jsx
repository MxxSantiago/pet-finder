import React from 'react';

import { useWindowSize } from '../../../hooks/useWindowSize';

import PostLiveDesktop from '../../molecules/PostLiveDesktop';
import PostLiveModal from '../../molecules/postLiveModal';

const PostLiveContainer = ({ data, posts, charging, open, handleClose }) => {
    const [size] = useWindowSize();

    if (size <= 885) {
        return (
            <>
                {data.data && (
                    <PostLiveModal
                        post={data.data.animal}
                        isOpen={open}
                        handleClose={handleClose}
                    />
                )}
            </>
        );
    }

    return (
        <>
            {data.data ? (
                <PostLiveDesktop post={data.data.animal} charging={charging} />
            ) : (
                <PostLiveDesktop post={posts[0]} />
            )}
        </>
    );
};

export default PostLiveContainer;

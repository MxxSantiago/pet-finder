import React from 'react';

import useSingleFetch from '../../../hooks/useSingleFetch';
import { useWindowSize } from '../../../hooks/useWindowSize';

import PostLiveDesktop from '../../molecules/PostLiveDesktop';
import PostLiveModal from '../../molecules/postLiveModal';

const PostLiveContainer = ({ id, open, handleClose, posts }) => {
    const { post, loading } = useSingleFetch(id);
    const [size] = useWindowSize();

    if (size <= 885) {
        return (
            <>
                {post.data && (
                    <PostLiveModal
                        post={post.data.animal}
                        isOpen={open}
                        loading={loading}
                        handleClose={handleClose}
                    />
                )}
            </>
        );
    }

    return (
        <>
            {post.data ? (
                <PostLiveDesktop post={post.data.animal} loading={loading} />
            ) : (
                <PostLiveDesktop post={posts[0]} />
            )}
        </>
    );
};

export default PostLiveContainer;

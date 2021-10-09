import React from 'react';
import useSingleFetch from '../../../hooks/useSingleFetch';
import Post from '../../molecules/Post/Post.component';
import PostLive from '../../molecules/PostLive';

import { postsContainer, chargingPosts } from './posts-container.module.scss';

const PostsContainer = ({ posts }) => {
    const [data, changeId, charging] = useSingleFetch();

    if (!posts) {
        return (
            <div className={chargingPosts}>
                <h2>Charging posts...</h2>
                <img src="/charging.gif" />
            </div>
        );
    }

    return (
        <div className={postsContainer}>
            <div>
                {posts.map((post, index) => (
                    <Post
                        onClick={(e) => changeId(e.target.id)}
                        key={index}
                        data={post}
                    />
                ))}
            </div>
            {data.data ? (
                <PostLive post={data.data.animal} charging={charging} />
            ) : (
                <PostLive post={posts[0]} />
            )}
        </div>
    );
};

export default PostsContainer;

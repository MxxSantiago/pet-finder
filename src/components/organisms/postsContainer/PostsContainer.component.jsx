import React from 'react';
import Post from '../../molecules/Post/Post.component';
import PostLive from '../../molecules/PostLive';

import { postsContainer, chargingPosts } from './posts-container.module.scss';

const PostsContainer = ({ posts }) => {
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
                    <Post key={index} data={post} />
                ))}
            </div>
            <PostLive post={posts[0]} />
        </div>
    );
};

export default PostsContainer;

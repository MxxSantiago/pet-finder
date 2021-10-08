import React from 'react';
import Post from '../../molecules/Post/Post.component';
import PostLive from '../../molecules/PostLive';

import { postsContainer } from './posts-container.module.scss';

const PostsContainer = ({ data }) => {
    return (
        <div className={postsContainer}>
            <div>
                {data.map((post, index) => (
                    <Post key={index} data={post} />
                ))}
            </div>
            <PostLive data={data[0]} />
        </div>
    );
};

export default PostsContainer;

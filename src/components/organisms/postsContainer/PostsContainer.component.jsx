import React, { useState } from 'react';

import useModalRequest from '../../../hooks/useModalRequest';

import Post from '../../molecules/Post/Post.component';
import PostLiveContainer from '../postLiveContainer/PostLiveContainer.component';

import { postsContainer, chargingPosts } from './posts-container.module.scss';

const PostsContainer = ({ posts }) => {
    const [open, handleOpen, handleClose] = useModalRequest();
    const [id, setId] = useState(null);

    if (!posts) {
        return (
            <div className={chargingPosts}>
                <h2>Charging posts...</h2>
                <img alt={'charging'} src="/charging.gif" />
            </div>
        );
    }

    return (
        <div className={postsContainer}>
            <div>
                {posts.map((post, index) => (
                    <Post
                        onClick={(e) => {
                            setId(e.target.id);
                            handleOpen();
                        }}
                        key={index}
                        data={post}
                    />
                ))}
            </div>
            <PostLiveContainer
                posts={posts}
                id={id}
                open={open}
                handleClose={handleClose}
            />
        </div>
    );
};

export default PostsContainer;

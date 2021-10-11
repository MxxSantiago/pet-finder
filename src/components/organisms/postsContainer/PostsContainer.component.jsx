import React from 'react';

import useSingleFetch from '../../../hooks/useSingleFetch';
import useModalRequest from '../../../hooks/useModalRequest';

import Post from '../../molecules/Post/Post.component';
import PostLiveContainer from '../postLiveContainer/PostLiveContainer.component';

import { postsContainer, chargingPosts } from './posts-container.module.scss';

const PostsContainer = ({ posts }) => {
    const [open, handleOpen, handleClose] = useModalRequest();
    const [data, changeId, charging] = useSingleFetch();

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
                            handleOpen();
                            changeId(e.target.id);
                        }}
                        key={index}
                        data={post}
                    />
                ))}
            </div>
            <PostLiveContainer
                data={data}
                posts={posts}
                charging={charging}
                open={open}
                handleClose={handleClose}
            />
        </div>
    );
};

export default PostsContainer;

import React from 'react';

import styles from './post.module.scss';

const Post = ({ data, ...props }) => {
    const { age, name, gender, description, type, status } = data;
    const { city, country } = data.contact.address;
    const postImage = data.photos[0] ? data.photos[0].medium : '/BannerBG.png';

    return (
        <div className={styles.post} {...props}>
            <div
                style={{ backgroundImage: `url(${postImage})` }}
                className={styles.postImageContainer}
            ></div>
            <div className={styles.postInfo}>
                <h1 className={styles.postInfoHeader}>
                    {name} - {type}
                </h1>
                <p className={styles.postInfoAddress}>
                    {city} - {country}
                </p>
                <p
                    className={`${styles.postInfoStatus} animate__animated animate__bounceIn`}
                >
                    {status}
                </p>
                <p className={styles.postInfoDescription}>
                    {description
                        ? description
                        : 'The owner did not provide a description of the pet'}
                </p>
                <p className={styles.postInfoFooter}>
                    {gender} - {age}
                </p>
                <em className={styles.postEvent} id={data.id}></em>
            </div>
        </div>
    );
};

export default Post;

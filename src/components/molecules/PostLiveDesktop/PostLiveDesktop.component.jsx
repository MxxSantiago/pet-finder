import React from 'react';

import styles from './post-live-desktop.module.scss';

const PostLiveDesktop = ({ post, charging }) => {
    const { age, name, gender, description, type, status, url } = post;
    const { city, country } = post.contact.address;
    const postImage = post.photos[0] ? post.photos[0].medium : '/BannerBG.png';

    if (charging) {
        return (
            <div className="postLiveContainer">
                <div className={styles.postLive}>
                    <div className="chargingPost">
                        <h2>Charging...</h2>
                        <img alt={'charging'} src="/charging.gif" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.postLiveContainer}>
            <div className={styles.postLive}>
                <div className={styles.postLiveImageContainer}>
                    <img
                        alt={name}
                        draggable="false"
                        className={styles.postLiveImage}
                        src={postImage}
                    />
                </div>
                <div className={styles.postLiveInfo}>
                    <h1 className={styles.postLiveInfoName}>
                        {name} ({type})
                    </h1>
                    <h1 className={styles.postLiveInfoType}></h1>
                    <p className={styles.postLiveInfoAddress}>
                        Location: {city} - {country}
                    </p>
                    <p className={styles.postLiveInfoDescription}>
                        {description
                            ? description
                            : 'The owner did not provide a description of the pet'}
                    </p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className={styles.postLiveLink}
                        href={url}
                    >
                        Complete information here
                    </a>
                    <div className={styles.postLiveInfoFooter}>
                        <p className={styles.postLiveInfoMore}>
                            {gender} - {age}
                        </p>
                        <p className={styles.postLiveInfoStatus}>{status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostLiveDesktop;

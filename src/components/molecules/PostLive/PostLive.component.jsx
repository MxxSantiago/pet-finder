import React from 'react';

import Button from '../../atoms/button/Button.component';

import styles from './post-live.module.scss';

const PostLive = ({ data }) => {
    const { age, name, gender, description, type, status, photos } = data;
    const { city, country } = data.contact.address;
    const postImage = data.photos[0] ? data.photos[0].medium : '/BannerBG.png';

    return (
        <div className={styles.postLiveContainer}>
            <div className={styles.postLive}>
                <div className={styles.postLiveCloseButton}>
                    <Button children={'x'} />
                </div>
                <div className={styles.postLiveImageContainer}>
                    <img
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

export default PostLive;

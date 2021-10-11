import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../../atoms/button/Button.component';

import styles from './post-live-modal.module.scss';

const PostLiveModal = ({ post, isOpen, handleClose, charging }) => {
    if (!isOpen) return null;

    const { age, name, gender, description, type, status, url } = post;
    const { city, country } = post.contact.address;
    const postImage = post.photos[0] ? post.photos[0].medium : '/BannerBG.png';

    if (!isOpen) return null;

    if (charging) {
        <div className="postLiveContainer">
            <div className={styles.postLiveModal}>
                <div className="chargingPost">
                    <h2>Charging...</h2>
                    <img alt={'charging'} src="/charging.gif" />
                </div>
            </div>
        </div>;
    }

    return ReactDOM.createPortal(
        <div className={styles.postLiveModalContainer}>
            <div className={styles.postLiveModal}>
                <div className={styles.postLiveModalImageContainer}>
                    <div className={styles.postLiveModalCloseBtn}>
                        <Button onClick={() => handleClose()} children={'x'} />
                    </div>
                    <img
                        alt={name}
                        draggable="false"
                        className={styles.postLiveModalImage}
                        src={postImage}
                    />
                </div>
                <div className={styles.postLiveModalInfo}>
                    <h1 className={styles.postLiveModalInfoName}>
                        {name} ({type})
                    </h1>
                    <h1 className={styles.postLiveModalInfoType}></h1>
                    <p className={styles.postLiveModalInfoAddress}>
                        Location: {city} - {country}
                    </p>
                    <p className={styles.postLiveModalInfoDescription}>
                        {description}
                    </p>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className={styles.postLiveLink}
                        href={url}
                    >
                        Complete information here
                    </a>
                    <div className={styles.postLiveModalInfoFooter}>
                        <p className={styles.postLiveModalInfoMore}>
                            {gender} - {age}
                        </p>
                        <p className={styles.postLiveModalInfoStatus}>
                            {status}
                        </p>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default PostLiveModal;

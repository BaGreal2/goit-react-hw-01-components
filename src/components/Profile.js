import React from 'react';
import styles from './Profile.module.css';

function Profile({name, tag, location, avatar, stats} ){
    return(
        <div className={styles.profile}>
            <div className="description">
                <img
                src={avatar}
                alt="user avatar"
                className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.stat}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quanity}>{stats.followers}</span>
                </li>
                <li className={styles.stat}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quanity}>{stats.views}</span>
                </li>
                <li className={styles.stat}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quanity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;
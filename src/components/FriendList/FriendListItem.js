import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={styles.item} key={id}>
      <span className={isOnline ? styles.green : styles.red} />
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;

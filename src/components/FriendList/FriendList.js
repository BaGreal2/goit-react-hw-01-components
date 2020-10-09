import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span className={friend.isOnline ? styles.green : styles.red} />
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt=""
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf,
};
FriendListItem.defaultProps = {
  friends: [
    {
      avatar: 'https://i.ibb.co/VxSBRhn/5aae7d3da9fb816239993900.png',
      name: 'Not Found',
      isOnline: false,
      id: 1000,
    },
  ],
};
export default FriendListItem;

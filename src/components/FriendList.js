import React from 'react';
import styles from './FriendList.module.css'

function FriendListItem({friends}){
    return(
        <ul className={styles.friendList}>
            {friends.map(friend=>(
                <li className={styles.item} key={friend.id}>
                <span className={friend.isOnline?styles.green:styles.red}></span>
                <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
                <p className={styles.name}>{friend.name}</p>
              </li>
            ))}
        </ul>
    )
}

export default FriendListItem;
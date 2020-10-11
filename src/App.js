import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Transactions from './components/Transactions/Transactions';
import transactions from './assets/transactions.json';
import friends from './assets/friends.json';
import user from './assets/user.json';
import statisticalData from './assets/statistical-data.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={statisticalData} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
}

export default App;

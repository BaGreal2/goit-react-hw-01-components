import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import Transactions from './components/Transactions';
import transactions from './assets/transactions.json';
import friends from './assets/friends.json';
import user from './assets/user.json';
import statisticalData from './assets/statistical-data.json';

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics title="UPLOAD STATS" stats={statisticalData} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
}

export default App;

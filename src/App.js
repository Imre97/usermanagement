import React, { useState } from 'react'
import './App.css';


import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (userN, userA) => {
    setUsers(prev => {
      return [...prev, {name: userN, age: userA}]
    })
  }

  return (
    <div>
      <AddUser addUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;

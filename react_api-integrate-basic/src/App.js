import React from 'react'
import './App.css';
import Users from './Users'
import {UesrsProvider} from './UsersContext';
function App() {
  return (
    <UesrsProvider>
      <Users />
    </UesrsProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header'
import Profile from './components/Profile'
import CFooter from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br/>
      <Profile></Profile>
      <br/>
      <CFooter></CFooter>
  </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import MolesArea from './components/MolesArea';
import Dashboard from './components/Dashboard';

const App = ({game}) => {
  return (
    <div className="App">
      <Dashboard game={game} />
      <MolesArea moles={game.moles} />    
    </div>
  )
}

export default App;

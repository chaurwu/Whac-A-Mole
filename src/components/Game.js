import React from 'react'
import MolesArea from './MolesArea';
import Dashboard from './Dashboard';
// import { observer } from 'mobx-react-lite';

const Game = ({game}) => {
  return (
    <div>
      <Dashboard game={game} />
      <MolesArea moles={game.moles} />    
    </div>
  )
}

export default Game

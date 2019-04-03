import React from 'react'
import { observer } from 'mobx-react-lite';
import Timer from './Timer';
import Score from './Score';

const Dashboard = observer(({game}) => {
  const gameButtonHandler = (e) => {
      if (game.playing) {
          game.stopGame();
      } else {
          game.startNewGame();
      }
  }

  return (
    <div className='dashboard'>
        <h2>Whac-A-Mole</h2>
        <button className='button' onClick={gameButtonHandler}>{ game.playing? 'End The Game' : 'Play New Game'} </button>
        <Timer time={game.timeLeft} />
        <Score score={game.score} />
    </div>
  )
})

export default Dashboard;
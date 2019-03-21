import React from 'react'
import TimeDigit from './TimeDigit';
import { observer } from 'mobx-react-lite';

const Timer = observer(({game}) => {
    const timeLeft = game.timeLeft;
    const ones = timeLeft % 10;
    const tens = (timeLeft - ones) / 10;
    return (
      <div className="timer">
        <TimeDigit digit={tens}/>
        <TimeDigit digit={ones}/>
      </div>
    )
})

export default Timer

import React from 'react'
import Digit from './Digit';

const Timer = ({time}) => {
    const ones = time % 10;
    const tens = (time - ones) / 10;
    return (
      <div className="timer">
        <Digit digit={tens}/>
        <Digit digit={ones}/>
      </div>
    )
}

export default Timer

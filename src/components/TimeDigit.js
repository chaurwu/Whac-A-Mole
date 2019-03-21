import React, { Component } from 'react'
import { useObserver } from 'mobx-react-lite';

const segmentMap = [
    [1, 1, 0, 1, 0, 1, 1, 1], //0
    [0, 1, 0, 0, 0, 1, 0, 0], //1
    [1, 1, 1, 0, 1, 0, 1, 1], //2
    [1, 1, 1, 0, 1, 1, 1, 0], //3 
    [0, 1, 1, 1, 1, 1, 0, 0], //4
    [1, 0, 1, 1, 1, 1, 1, 0], //5
    [1, 0, 1, 1, 1, 1, 1, 1], //6
    [1, 1, 0, 0, 0, 1, 0, 0], //7
    [1, 1, 1, 1, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 1, 1, 0, 0]  //9
];

const deriveStyle = (digit) => {
    const segments = segmentMap[digit];
    return {
        upperSquareStyle: {
            width: '30px',
            height: '50%',
            margin: '0px 3px 0px 3px',
            boxSizing: 'border-box',
            borderTop: `10px solid ${segments[0]?'#F00':'#bbb'}`,
            borderRight: `10px solid ${segments[1]?'#F00':'#bbb'}`, 
            borderBottom: `5px solid ${segments[2]?'#F00':'#bbb'}`,
            borderLeft: `10px solid ${segments[3]?'#F00':'#bbb'}`,
        },
        lowerSquareStyle: {
            width: '30px',
            height: '50%',
            margin: '0px 3px 0px 3px',
            boxSizing: 'border-box',
            borderTop: `5px solid ${segments[4]?'#F00':'#bbb'}`,
            borderRight: `10px solid ${segments[5]?'#F00':'#bbb'}`, 
            borderBottom: `10px solid ${segments[6]?'#F00':'#bbb'}`,
            borderLeft: `10px solid ${segments[7]?'#F00':'#bbb'}`,
        }
    }
  }  

export default function TimeDigit(props) {
  const { upperSquareStyle, lowerSquareStyle } = deriveStyle(props.digit);
    
  return useObserver(() => (
    <div>
       <div className="upperSquare" style={upperSquareStyle}></div>
       <div className="lowerSquare" style={lowerSquareStyle}></div> 
    </div>
  ))
}

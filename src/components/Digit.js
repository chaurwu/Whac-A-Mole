import React from 'react'

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
    const segments = segmentMap[digit]
      .map(v => v?'#F00':'#bbb');

    return {
        upperSquareStyle: {
            borderColor: `${segments[0]} ${segments[1]} ${segments[2]} ${segments[3]}`,
        },
        lowerSquareStyle: {
            borderColor: `${segments[4]} ${segments[5]} ${segments[6]} ${segments[7]}`,
        }
    }
  }  

export default function Digit({digit}) {
  const { upperSquareStyle, lowerSquareStyle } = deriveStyle(digit);
    
  return (
    <div>
       <div className="digitUpperHalf" style={upperSquareStyle} ></div>
       <div className="digitLowerHalf" style={lowerSquareStyle}></div> 
    </div>
  )
}

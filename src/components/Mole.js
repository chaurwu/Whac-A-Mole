import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

export default function Mole({active}) {
  //const [animating, setAnimating] = useState(false);

  const props = useSpring({
    to: [{ backgroundPositionY: 0}, { backgroundPositionY: 150}], 
    from: { backgroundPositionY: 150 }, 
    config: {duration: 1000},
    onRest: () => {}
  });
  
  return (
    <div className='mound'>
      <animated.div className='mole' style={active? props : {backgroundPositionY: 150}}>
      </animated.div>
    </div>
  )
}

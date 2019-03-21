import React from 'react'
import Mole from './Mole';
import { observer } from 'mobx-react-lite';

const MolesArea = observer(({moles}) => {
  let items = []
  for (let i = 0; i < moles.length; i++) {
    items.push(<Mole key={i} active={moles[i]}/>)
    items.push(<div key={i + moles.length}></div>)
  }

  return (
    <div className='molesArea'>
      {items}
    </div>
  )
})

export default MolesArea

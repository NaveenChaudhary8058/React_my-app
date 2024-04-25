import React from 'react'
import Cardprops3 from './Cardprops3'

const Cardprops2 = ({ravi}) => {
  return (
    <div>
      <h1>This is second file</h1>
      {ravi()}
      <Cardprops3 ravi1={ravi}/>
    </div>
  )
}

export default Cardprops2

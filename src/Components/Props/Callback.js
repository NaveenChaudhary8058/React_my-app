import React from 'react'
import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from './Chicken.json'

const Callback = ({lottieJson}) => {
  return (
    <div>

       <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150 }}
    />
    </div>
  )
}

export default Callback

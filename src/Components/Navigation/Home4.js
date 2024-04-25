import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home4 = () => {
    const navg = useNavigate()
    const Get = ()=>{
        navg('/')
    }
  return (
    <div>
      <h1>This Is Fifth Page........</h1>
      <button onClick={()=>{Get()}}>Clik Me !</button>
    </div>
  )
}

export default Home4

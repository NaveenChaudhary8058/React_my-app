import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home3 = () => {
    const navg = useNavigate()
    const Get = ()=>{
        navg('/Home4')
    }
  return (
    <div>
      <h1>This Is Fourth Page......</h1>
      <button onClick={()=>{Get()}}>Clik Me !</button>
    </div>
  )
}

export default Home3

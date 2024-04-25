import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home2 = () => {
    const navg = useNavigate()
    const Get = ()=>{
        navg('/Home3')
    }
  return (
    <div>
      <h1>This Is Third Page.......</h1>
      <button onClick={()=>{Get()}}>Clik Me !</button>
    </div>
  )
}

export default Home2

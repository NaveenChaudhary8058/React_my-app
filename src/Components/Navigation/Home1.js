import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home1 = () => {
    const navg = useNavigate()
    const Get = ()=>{
        navg('/Home2')
    }
  return (
    <div>
      <h1>This Is Second  Page........</h1>
      <button onClick={()=>{Get()}}>Clik Me !</button>
    </div>
  )
}

export default Home1

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navg = useNavigate()
    const Get = ()=>{
        navg('/Home1')
    }
  return (
    <div>
      
      <h1>This Is Home Page.......</h1>

      <button onClick={()=>{Get()}}>Clik Me !</button>


    </div>
  )
}

export default Home

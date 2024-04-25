import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <ul>
            
             <NavLink to='/'><li>Class_1</li></NavLink>
            <NavLink to='/Class_2'><li>Class_2</li></NavLink> 
            <NavLink to='/Hello'><li>Hello</li></NavLink>
            
            
        </ul>
    </div>
  )
}

export default Header

import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Nav = () => {
    const Loct=useLocation()
    // const url = Loct.pathname;
    console.log(Loct)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item ms-5">
          <NavLink to='/' style={{textDecoration:"none"}}><h1 className={`${Loct.pathname==='/'?'text-danger' :" "}`}>Home</h1></NavLink>
        </li>
        <li className="nav-item ms-5">
        <NavLink to='/About' style={{textDecoration:"none"}}><h1 className={`${Loct.pathname==='/About'?'text-info' :" "}`}>About</h1></NavLink>
        </li>
        <li className="nav-item ms-5">
        <NavLink to='/Contact' style={{textDecoration:"none"}}><h1 className={`${Loct.pathname==='/Contact'?'text-warning' :" "}`}>Contact</h1></NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav

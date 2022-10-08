import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'

export default function Header(props) {
  return (

<header className='navbar container-fluid text-light' style={{
  width:"100%",
  top:0,
  left:0,
  zIndex:1000,
  height: 60,
  backgroundColor: "rgba(40,40,40,0.6)",
  position:'fixed',
}}>
  <NavLink className="navbar-brand mx-4" to="/">
    <img src="./img/logo-full.png" alt="" style={{width:"50%"}}/>
  </NavLink>
    <ul className="nav justify-content-center pb-2" style={{marginRight:"88px"}}>
      <li className="nav-item active">
        <NavLink to="/home" className="nav-link text-white "  activeClassName="border-b-1 border-white" >Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link text-white"  activeClassName="border-b-1 border-white"  to="/contact">Theater</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link text-white"  activeClassName="border-b-1 border-white"  to="/filmhot">Film Hot</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link text-white"  activeClassName="border-b-1 border-white"  to="/admin">Admin</NavLink>
      </li>
    </ul>
    <div className='d-flex pb-2'	>
      <button  className="btn btn-outline-danger px-3 " type="submit">
        <NavLink style={{color:"white",textDecoration:"none"}} to="/login">Sign in</NavLink>
      </button>
      <button  className="btn btn-outline-success px-3 mx-3" type="submit">
        <NavLink style={{color:"white",textDecoration:"none"}} to="/register">Sign up</NavLink>
      </button>
      </div>
</header>
  )
}

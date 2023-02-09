import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header(){
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" href="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" href="/publier">Publier</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" href="/saerch">search</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link className="nav-link" href="/search">Search</Link></button> 
    </form>
  </div>
</nav>
    </>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import { useState} from 'react';

import './style.css'

const Header = () => {
 


  const userloginstatus=localStorage.getItem('userloginstatus');
  const id_user=localStorage.getItem('id')
  return (
    <>
   
    
     <header>

<a href="#" class="logo"><span>E</span>duc</a>

<nav class="navbar">
<Link  to="/">home</Link>
    <Link to="/allannonces">Announces</Link>
    <a href="#services">services</a>
    <a href="#agents">Our team</a>
    <a href="#contact">contact</a>

 
    {userloginstatus==='true' &&<>
    <a href="/publier">Add Announces</a> 
    <div class="dropdown">
        <button class="dropbtn">Dashboard</button>
        <div class="dropdown-content">
          <Link to="/Mes_annonces">My Announces</Link>
          <Link to={'/favori/'+id_user+'/'} >Favori</Link>
          <a href="/user">Profile</a>
        </div>
      </div> 
      <Link to="/logout">Logout</Link>
      </>
       }
       { userloginstatus===null &&<>
        <div class="icons">
        <div id="menu-bars" class="fas fa-bars"></div>
    <Link  to="/login" class="fas fa-user"></Link>
    </div>
    
    </>
     }
</nav>

</header>
    
    </>
  )
}

export default Header
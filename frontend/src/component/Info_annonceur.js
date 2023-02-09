import React from 'react'
import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const url_base='http://127.0.0.1:8000/'
const Info_annonceur = () => {
  const userloginstatus=localStorage.getItem('userloginstatus');
const {annonceur_id}=useParams()
console.log(annonceur_id);
const id_user=localStorage.getItem('id')
const [element,setelement]=useState('')
useEffect(()=>{
  try{
       axios.get(url_base+'annonceur/'+annonceur_id+'/')
       .then(resp=> {
 setelement(resp.data)
}
       )
     }catch(error){
 console.log(error)

}},[])

  


  return (
    <>
  <header>

<a href="#" class="logo"><span>E</span>duc</a>

<nav class="navbar">
<Link  to="/">home</Link>
    <Link to="/allannonces">Announces</Link>
   
    {userloginstatus==='true' &&<>
    <link to="/publier">Add Announces</link> 
    <div class="dropdown">
        <button class="dropbtn">Dashboard</button>
        <div class="dropdown-content">
          <Link to="/Mes_annonces">My Announces</Link>
          <Link to={'/favori/'+id_user+'/'} > Favori</Link>
          <a href="/user">Profile</a>
        </div>
      </div> 
      <Link to="/logout">Logout</Link>
      </>
       }
       { userloginstatus===null &&<>
    <Link  to="/register">Register</Link>
    <Link  to="/login">Login</Link>
    </>
     }
</nav>

</header>
<div class="container3">
    <div >
      <img src="images/pic-4.png" class="profile"/>
    </div>
    <div class="profile-">{element.first_} {element.last_} </div>
    <p class="about"><span>Phone Number :</span>{element.numero}</p>
    <p class="about"><span>Adress Email:</span> {element.email}</p>
    <br/><br/>
    <div class="buttons">
        <a href="#" class="btn">Contact </a>
        <br/>
        <br/>
    </div>
  </div>
 
    </>
  )
}

export default Info_annonceur
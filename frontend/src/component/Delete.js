import React from 'react'
import { useState,useEffect} from 'react';
import axios  from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './verification.css'
const url_base='http://127.0.0.1:8000/'

const Delete = () => {
const {annonce_id}=useParams()
const [status,setstatus]=useState('')
const userloginstatus=localStorage.getItem('userloginstatus');
const id_user=localStorage.getItem('id')
const handelForm=async(e) => {
     e.preventDefault();
try{
     axios.delete(url_base+'annonce/'+annonce_id+'/')
     .then(resp => {
       setstatus('valide')
       window.location.href='/'
     })
   }catch(error){
     console.log(error)
     setstatus('error')
   }}
   return(
     <>
      <header>

<a href="#" class="logo"><span>E</span>duc</a>

<nav class="navbar">
<Link  to="/">home</Link>
    <Link to="/allannonces">Announces</Link>
    {userloginstatus==='true' &&<>
    <Link to="/publier">Add Announces</Link> 
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
     <div class="verify-container">
			<div class="verify-msg">
				<p>Are you sure you want to continue ? </p>
			</div>
      <div className='verify-link'>
				<button  onClick={handelForm}>yes, i am.</button>
			</div>
		</div>
    
     </>
   )};

export default Delete
 
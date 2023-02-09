import React from 'react'
import { useState,useEffect} from 'react';
import axios  from 'axios'
import { Link } from 'react-router-dom';
const url_base='http://127.0.0.1:8000/'
const id_user=localStorage.getItem('id')
const userloginstatus=localStorage.getItem('userloginstatus');
const Allannonces = () => {
  const [annonces,setannonces]=useState([])
  useEffect(()=>{
    try{
       axios.get(url_base+'annonce/')
       .then(resp=> {
 setannonces(resp.data)
}
       )
     }catch(error){
 console.log(error)
};
},[])
console.log(annonces);
  return (
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
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<section class="featured" id="featured">

<h1 class="heading"> <span>Our</span> Announces </h1>


<div class="box-container">
    {annonces.map((element,index) => 
        <div key={element.id} class="box">
            <div class="image-container">
                <img key={element.id} src={element.photo} alt="SOMME"/>
            </div>
            <div class="content">
                <div class="price">
                <div>
    
    </div>

                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-envelope"></a>
                    <a href="#" class="fas fa-phone"></a>
                </div>
                <div class="location">
                    <h3>{element.theme}</h3>
                    <p>{element.description}</p>
                    <p>{element.tarif}</p>
                </div>
                <div class="buttons">
                <Link class="btn" to={'/detail/'+element.id+'/'}>View details</Link>
              
                </div>
            </div>
        </div>

)}
    </div>
 
   


</section>

</>
)
}

export default Allannonces

import React from 'react'
import { useState,useEffect} from 'react';
import axios  from 'axios'
import { Link } from 'react-router-dom';
const url_base='http://127.0.0.1:8000/'
const MesAnnonces = () => {
  const id_user=localStorage.getItem('id')
  const userloginstatus=localStorage.getItem('userloginstatus');
  console.log(id_user)
  const [mesannonces,setmesannonces]=useState([])
  useEffect(()=>{
    try{
       axios.get(url_base+'Mes_Annonce/'+id_user+'/')
     
       .then(resp=> {
 setmesannonces(resp.data)
}
       )
     }catch(error){
 console.log(error)
};
},[])


 return(
  <>
    <br/><br/> <br/> <br/><br/><br/><br/><br/><br/><br/>
    <br/><br/> <br/> 
    <header>

<a to="#" class="logo"><span>E</span>duc</a>

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
    <section class="featured" id="featured">

<h1 class="heading"> <span>My</span> Announces </h1>


<div class="box-container">
    {mesannonces.map((element,index) => 
        <div class="box">
            <div class="image-container">
                <img src="images/calculatrice.jpg" alt=""/>
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
                    <Link to={'/update/'+element.id+'/'} class="btn-edit">Update</Link>
                </div>
                <div class="buttons">
                    <Link to={'/delete/'+element.id+'/'} class="btn-delete">Delete</Link>
                </div>
                
              
            </div>
        </div>

)}
    </div>
 
   


</section>
</>
 )
}

export default MesAnnonces

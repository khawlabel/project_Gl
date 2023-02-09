import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import './annonce.css'

const url_base='http://127.0.0.1:8000/'

const Detail = () => {
const Swal = require('sweetalert2')
const id_user=localStorage.getItem('id');
const userloginstatus=localStorage.getItem('userloginstatus');
const {annonce_id}=useParams()
const [element,setelement]=useState('')
const [exist,setexist]=useState('')

useEffect(()=>{
  console.log(annonce_id);
  console.log(id_user);
try{
  axios.get(url_base+'favori/'+annonce_id+'/'+id_user+'/')
  .then(resp=>{if(resp.data.bool===true){
    console.log('mama')   ; 
          setexist('true') ;
          console.log(exist)   ;     
}
  else{
console.log('papa')
  }}

)
 }catch(error){
  console.log(error)
  
}
  try{
       axios.get(url_base+'annonce/'+annonce_id+'/')
       .then(resp=> {
 setelement(resp.data);
 console.log(resp.data)
}
       )
     }catch(error){
 console.log(error)

}


 },[])



const add=()=>{

  const annonceformatdata=new FormData();

 annonceformatdata.append("annonceur",id_user)
 annonceformatdata.append("annonce",annonce_id)
 
try{
console.log('hhhh')
 axios.post(url_base+'Favori/',annonceformatdata,{
  headers:{
    'Content-Type':'application/json',
  }
 })
 .then(resp=>{if(resp.status===200||resp.status===201){
  Swal.fire({
    title: 'this course has been added from your wish list',
    icon: 'success',
    toast:true,
    time:50,
    position:'top-right',
    timerProgressBar:true,
    showConfirmButton:false
  })
}})
}catch(error){
 console.log(error)
}}


 const supp=(e)=>{
       e.preventDefault();
  try{
       axios.get(url_base+'remove/'+annonce_id+'/'+id_user+'/')
       .then(resp=>{if(resp.status===200||resp.status===201){
        Swal.fire({
          title: 'this course has been removed from your wish list',
          icon: 'success',
          toast:true,
          time:50,
          position:'top-right',
          timerProgressBar:true,
          showConfirmButton:false
        })
      }})
     }catch(error){
       console.log(error)
     }}

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
   <section class="featured" id="featured">
    <br/><br/><br/><br/><br/><br/>
    <h1 class="heading"> <span>Details of</span> the Announce </h1>
    <div class="container5">
       
            <br/>
            <center><table cellspacing="10">
                <tr>
                <td>
                    <div class="container ">
                        <div class="text" >
                            <h1><span>Theme :</span> {element.theme}</h1>
                            <p><span>Description :</span> {element.description}.</p>
                           
                            <p><span>Prix :</span> {element.tarif}DA . </p>
                          
                            <p><span>Wilaya :</span>{element.wilaya} </p>
                            <p><span>Commune :</span> {element.commune}</p>
                            <p><span>Address :</span>{element.adresse} .....</p>
                        </div>
                        { exist==='' &&<>
    <button type="submit" className="btn btn-primary"  onClick={add}>add to favori</button>
    </>}
    { exist==='true' &&<>
    <button type="submit" className="btn btn-primary"  onClick={supp} >supp</button>
    </>}
                        
                    </div>
           
                  </td> 
                  <td>
                <div>
                <img src="images/calculatrice.jpg" alt="photo"/>   
                </div>
             
                   
                    </td>
                </tr></table>
               </center>
    </div>
</section>
    </>
  )
}

export default Detail
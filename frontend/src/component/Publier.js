import React from 'react'
import { useState,useEffect} from 'react';
import axios  from 'axios'
import './formannonce.css'
import { Link } from 'react-router-dom';
import './formannonce.css'
const id_user=localStorage.getItem('id')
const userloginstatus=localStorage.getItem('userloginstatus');
const url_base='http://127.0.0.1:8000/'

const Publier = () => {


  const [categorys,setcategorys]=useState([]);
  const [modalites,setmodalites]=useState([]);
  const [category,setcategory]=useState()
  const [modalite,setmodalite]=useState()
  const [commune,setcommune]=useState('')
  const [wilaya,setwilaya]=useState('')
  const [adresse,setadresse]=useState('')
  const [tarif,settarif]=useState('')
  const [theme,settheme]=useState('')
  const [description,setdescription]=useState('')
  const [status,setstatus]=useState('')
  const [photo,setphoto]=useState('')
  
useEffect(()=>{
   try{
      axios.get(url_base+'category/')
      .then(resp=> {
setcategorys(resp.data)
      })
    }catch(error){
console.log(error)
    }
    try{
      axios.get(url_base+'modalite/')
      .then(resp=> {
        setmodalites(resp.data)
})
    }catch(error){
console.log(error)
    };
},[])

  //let user_id=localStorage.getItem('user_id')

const handelForm=async(e) => {
const id=localStorage.getItem('id')
  e.preventDefault();
  const annonceformatdata2=new FormData();
  annonceformatdata2.append("annonceur",id)
  annonceformatdata2.append("category",category)
  annonceformatdata2.append("theme",theme)
  annonceformatdata2.append("description",description)
  annonceformatdata2.append("tarif",tarif)
  annonceformatdata2.append("modalite",modalite)
  annonceformatdata2.append("wilaya",wilaya)
  annonceformatdata2.append("adresse",adresse)
  annonceformatdata2.append("commune",commune)
  annonceformatdata2.append("photo",photo)
 
  try{
    axios.post(url_base+'annonce/',annonceformatdata2,{
      headers:{
        'Content-Type':'application/json',
      }
     })
    .then(resp => {
      setstatus('valide')
      window.location.href='/'
    })
  }catch(error){
    console.log(error)
    setstatus('error')
  }};


return (
  <>
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
{status==='error' && <p class="text-success">error publication  </p>}
<div class="container6">
        <div class="header">Complete the form</div>

        <form >
            <div class="form first">
                <div class="details personal">
                    <span class="title">Anounce Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Theme </label>
                            <input type="text" onChange={e=>
   settheme(e.target.value)} name="theme" placeholder="Enter theme" required/>
                        </div>

                        <div class="input-field">
                            <label>Price </label>
                            <input type="text" onChange={e=>
   settarif(e.target.value)} name="tarif" placeholder="Enter Price" required/>
                        </div>

                        <div class="input-field">
                            <label>Modality </label>
                            <select onChange={e=>
   setmodalite(e.target.value)} name="modalite"   id="modalite"  >
     {modalites.map((element,index)=> 
           {return <option  key={index}  value={element.id}>{element.type}</option>
      
     })} 

    </select>
                        </div>
                        <div class="input-field">
                        <label htmlFor="category">Category</label>
    <select  onChange={e=>
   setcategory(e.target.value)} name="category" id="category"   >
                         
                           {categorys.map((element,index) => 
                                {return  <option key={index} value={element.id} >{element.name}</option>})} 
                           
    </select>
    </div>
                        <div class="input-field">
                            <label>Wilaya</label>
                            <input type="text" onChange={e=>
   setwilaya(e.target.value)} name="wilaya"  id="wilaya"  placeholder="Enter wilaya"
      />
                           
                        </div>
                        <div class="input-field">
                            <label>Commune </label>
                            <input  type="text" onChange={e=>
   setcommune(e.target.value)}  className="form-control" id="commune"  placeholder="Enter commune" />

                        </div>

                        <div class="input-field">
                            <label>Address</label>
                            <input  type="text" onChange={e=>
   setadresse(e.target.value)} name="adresse"    className="form-control" id="adresse" placeholder="Enter adresse" />
  </div>
                      
                        <div class="textarea-field">
                            <label for="description">description</label>
                            <textarea onChange={e=>
   setdescription(e.target.value)} name="description" className="form-control" id="description"  rows="3"></textarea>
                         
                        </div>
                         <div class="input-field">
                            <label>Image</label>
                            <input type="file" onChange={e=>
   setphoto(e.target.value)} name="photo" class ="file-uplaod-input"  id="photo"  placeholder="inserer la photo" accept="Image/*"
      />
          </div>
                    </div>
                </div>

                <div >
                    <button class="nextBtn" onClick={handelForm}>
                        <span class="btnText">Publish</span>
                        <i class="uil uil-navigator"></i>
                        </button>
                </div> 
            </div>

        </form>
    </div>
   

</>

)
}

export default Publier

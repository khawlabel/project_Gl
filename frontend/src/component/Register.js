import React from 'react'
import { useState} from 'react';
import axios  from 'axios'
import './register.css'
import { Link } from 'react-router-dom';
const url_base='http://127.0.0.1:8000/'
const id_user=localStorage.getItem('id')
const userloginstatus=localStorage.getItem('userloginstatus');

const Publier = () => {

  const [numero,setnumero]=useState('')
  const [password,setpassword]=useState('')
  const [email,setemail]=useState()
  const [last_name,setlast_name]=useState('')
  const [first_name,setfirst_name]=useState('')
  const [status,setstatus]=useState('')
const handelForm=async(e) => {
    const annonceformatdata=new FormData()
    e.preventDefault();
    annonceformatdata.append("first_name",first_name)
    annonceformatdata.append("last_name",last_name)
    annonceformatdata.append("email",email)
    annonceformatdata.append("numero",numero)
    annonceformatdata.append("password",password)
  console.log(annonceformatdata)
    try{
      axios.post(url_base+'annonceur/',annonceformatdata)
      .then(resp => {
        setstatus('success')
          window.location.href='/'
      })
    }catch(error){
      console.log(error)
      setstatus('error')
      }
  }
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
   <section class="container2 forms">

   {status==='success' && <p class="text-success">thanks  for your enrigestration </p>}
      {status==='error' && <p class="text-danger">il ya une erreur </p>}
    <div class="forme signup">
        <div class="forme-content">
            <div class="header">Signup</div>
            <form action="#">
                <div class="field input-field">
                    <input type="FirstName" value={first_name} onChange={e=>
    setfirst_name(e.target.value)} name="first_name" className="form-control"  id="first_name" placeholder="First Name" class="input"/>
                </div>
                <div class="field input-field">
                    <input type="LastName" value={last_name}onChange={e=>
    setlast_name(e.target.value)}  name="last_name" className="form-control"  id="last_name" placeholder="Last Name" class="input"/>
                </div>
                <div class="field input-field">
                    <input type="email" value={email} onChange={e=>
    setemail(e.target.value)}  name="email" className="form-control"  id="email" placeholder="Email" class="input"/>
                </div>
                <div class="field input-field">
                    <input type="PhoneNumber" value={numero} onChange={e=>
    setnumero(e.target.value)}  name="numero" className="form-control"  id="numero"  placeholder="Phone Number" class="input"/>
                </div>
                <div class="field input-field">
                    <input type="password"  value={password} onChange={e=>
    setpassword(e.target.value)}  name="password" className="form-control"  id="password" placeholder="Create password" class="password"/>
                </div>

              

                <div class="field button-field">
                    <button type="submit" onClick={handelForm}>Signup</button>
                </div>
            </form>

            <div class="forme-link">
                <span>Already have an account? <Link to="/login" >Login</Link></span>
            </div>
        </div>

        <div class="line"></div>

        <div class="media-options">
            <a href="#" class="field google">
                <img src="images/google.png" alt="" class="google-img"/>
                <span>Login with Google</span>
            </a>
        </div>

    </div>
</section>
   </>

  )
}

export default Publier


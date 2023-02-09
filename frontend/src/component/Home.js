import React from 'react'
import { useState,useEffect} from 'react';
import axios  from 'axios'
import { Link } from 'react-router-dom';

const url_base='http://127.0.0.1:8000/'
const Home = () => {
  const Swal = require('sweetalert2')
  const id_user=localStorage.getItem('id')
  console.log(id_user)
  const [annonces,setannonces]=useState([])
  
  useEffect(()=>{
    try{
       axios.get(url_base+'annonce/?result=4')
       .then(resp=> {
 setannonces(resp.data)
}
       )
     }catch(error){
 console.log(error)
};
},[])

const fun=() => {
  console.log('hi');
}
console.log(annonces);



  return (
   <>

<section class="home" id="home">

    <form action="">

        <h3>find an announce.</h3>
        <div class="inputBox">
            <input type="search" name="" placeholder="module" id=""/>
            <input type="search" name="" placeholder="description" id=""/>
           
            <select name="" id="">
                <option value="" disabled hidden selected>Wilaya</option>
                <option value="Bejaia">Bejaia</option>
                <option value="Setif">Setif</option>
                <option value="Oran">Oran</option>
                <option value="Tizi">Tizi</option>
            </select>
            <input type="search" name="" placeholder="Commune" id=""/>
           
        </div>

        <input type="submit" value="search announce" class="btn"/>

    </form>

</section>



<section class="services" id="services">

    <h1 class="heading"> our <span>services</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src="/images/s-1.png" alt=""/>
            <h3>Posting Announces</h3>
            <p>sharing announces between student and teachers for more benefit.</p>
            
        </div>

        <div class="box">
            <img src="images/s-2.png" alt=""/>
            <h3>Helping teachers </h3>
            <p>we help teachers to find student wanting to join their extra courses at a price that suits them.</p>
            
        </div>

        <div class="box">
            <img src="images/s-3.png" alt=""/>
            <h3>helping students</h3>
            <p>we help also student to make an effort in their student life by showing them the diferent announces especially the closest to their habitat</p>
          
        </div>

    </div>

</section>



<section class="featured" id="featured">

    <h1 class="heading"> <span>Our</span> Announces </h1>

    <div class="box-container">
    {annonces.map((element,index) => 
        <div class="box" key={element.id} >
            <div class="image-container">
                <img key={element.id} src={element.photo} alt="photo"/>
            </div>
            <div class="content">
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
    <div class="seeAll"><Link to="/allannonces">- See more -</Link></div>
    
</section>



<section class="agents" id="agents">

    <h1 class="heading"> Our <span>Team </span> </h1>

    <div class="box-container">

        <div class="box">
            <a href="#" class="fas fa-envelope"></a>
            <a href="#" class="fas fa-phone"></a>
            <img src="images/pic-2.png" alt=""/>
            <h3>Bair Katia</h3>
            <span>PDG</span>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

        <div class="box">
            <a href="#" class="fas fa-envelope"></a>
            <a href="#" class="fas fa-phone"></a>
            <img src="images/pic-2.png" alt=""/>
            <h3>Belgacem Khawla </h3>
            <span>Agent</span>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

        <div class="box">
            <a href="#" class="fas fa-envelope"></a>
            <a href="#" class="fas fa-phone"></a>
            <img src="images/pic-4.png" alt=""/>
            <h3>Laadjal Ikram</h3>
            <span>agent</span>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

        <div class="box">
            <a href="#" class="fas fa-envelope"></a>
            <a href="#" class="fas fa-phone"></a>
            <img src="images/pic-4.png" alt=""/>
            <h3>Chawech Fatiha</h3>
            <span>agent</span>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

    </div>

</section>


<section class="contact" id="contact">

<h1 class="heading"> <span>contact</span> us </h1>

<div class="icons-container">

    <div class="icons">
        <img src="images/icon-1.png" alt=""/>
        <h3>Phone number</h3>
        <p>+123-456-7890</p>
        <p>+111-222-3333</p>
    </div>

    <div class="icons">
        <img src="images/icon-2.png" alt=""/>
        <h3>Email address</h3>
        <p>info.Educ@gmail.com</p>
        <p>info@education.com</p>
    </div>

     <div class="icons">
        <img src="images/icon-3.png" alt=""/>
        <h3>Office address</h3>
        <p>MW77+F23, N75, Amizour, Bejaia</p>
    </div>

</div>

<div class="row">

    <form action="">
        <div class="inputBox">
            <input type="text" placeholder="name"/>
            <input type="number" placeholder="number"/>
        </div>
        <div class="inputBox">
            <input type="email" placeholder="email"/>
            <input type="text" placeholder="subject"/>
        </div>
        <textarea name="" placeholder="message" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" class="btn"/>
    </form>

    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1626697480414!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

</div>

</section>



</>
  )
}

export default Home

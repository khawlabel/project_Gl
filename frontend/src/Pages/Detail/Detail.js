import React from 'react'
import {useLocation} from 'react-router-dom';

const Detail = ({route,navigate}) => {
const location = useLocation();
  return (
   <>
  
 <div key={location.state.annonce.id}>
 
 <img url={location.state.annonce.photo} className="img-fluid" alt="a"/>
 <h1>{location.state.annonce.photo}</h1>
 <h1>{location.state.annonce.theme}</h1>
 <h1>{location.state.annonce.category}</h1>
 <h1>{location.state.annonce.tarif}</h1>
 <h1>{location.state.annonce.adresse}</h1>
 <h1>{location.state.annonce.commune}</h1>
 <h1>{location.state.annonce.wilaya}</h1>
 <h1>{location.state.annonce.modalite}</h1>
 </div>
   </>
  )
}

export default Detail

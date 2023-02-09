import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Home.css'
function Home(props) {
  const navigate = useNavigate();
  return (
    <>
    <h1>home</h1>
    <div>
      {props.annonces && props.annonces.map(annonce=>(
          <div key={annonce.id}>
            <img src={annonce.image} className="img-fluid" alt="a"/>
            <h2>{annonce.theme}</h2>
            <h2>{annonce.description}</h2>
            <h2>{annonce.tarif}</h2>
            <button onClick={()=>navigate("/Detail",{state:{annonce:annonce}})}>Detail </button>
            <Link to="/Panier" className="btn btn-primary">panier</Link>
          </div>
      ))}
    </div>
    </>
  )
}
export default Home
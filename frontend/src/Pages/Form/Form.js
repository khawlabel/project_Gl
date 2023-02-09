import React from 'react'
import { useState ,useEffect} from 'react';
import './Form.css'
const Form = () => {
  const [theme,settheme]=useState('');
  const [description,setdescription]=useState('');
  const [category,setcategory]=useState('');
  const [modalite,setmodalite]=useState('');
  const [tarif,settarif]=useState('');
  const [image,setimage]=useState(null);
  const [adresse,setadreese]=useState('');
  const [wilaya,setwilaya]=useState('');
  const [commune,setcommune]=useState('');
  const [categorys,setcategorys]=useState([]);
  const [modalites,setmodalites]=useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/categorys/',{
     'method':'GET',
     headers:{
          'Content-Type':'application/json',
          'Authorization':'Token 24eb2cb6ac6758bec1bb08e3bfb079ed0528e30a '
     }
    })
    .then(resp=> resp.json())
    .then(resp => setcategorys(resp)).then((response) => {
        if (response.ok) {
          alert("Success");
        } else {
          alert("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    
  },[])
   useEffect(() => {   fetch(`http://127.0.0.1:8000/modalites/`,{
          'method':'GET',
          headers:{
               'Content-Type':'application/json',
               'Authorization':'Token 24eb2cb6ac6758bec1bb08e3bfb079ed0528e30a'
          } })
        .then(resp=> resp.json())
        .then(resp => setmodalites(resp))
        
      },[])
  
  const addannonce=(body)=>{
    console.log(body)
    fetch(`http://127.0.0.1:8000/annonce/`,{
      'method':'POST',
      headers:{
           'Content-Type':'application/json',
           'Authorization':'Token 24eb2cb6ac6758bec1bb08e3bfb079ed0528e30a'
      },
      body:JSON.stringify(body)})
      .then(resp => resp.json())
      .then(resp => console.log(body))
      .then((response) => {
        if (response.ok) {
          alert("Success");
        } else {
          alert("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });}
  return (
     <>
     <form>
     <div className="form-group">
       <label htmlFor="theme">theme</label>
       <input type="text" className="form-control" id="theme"  placeholder="Enter theme"
        value={theme} onChange={e=>
         settheme(e.target.value)}/>
     </div>
      <div></div>
       <div></div>
     <div className="form-group">
       <label htmlFor="description">Description</label>
       <textarea className="form-control" id="description" rows="3"  value={description} onChange={e=>
                         setdescription(e.target.value)}></textarea>
     </div>
     <div></div>
       <div></div>
     <div className="form-group">
       <label htmlFor="category">Category</label>
       <select multiple ={false} className="form-control" id="category" value={category} onChange={e=>
                         setcategory(e.target.value)}>
                            if (categorys) {
                              categorys.map(element => (
                               
                                    <option key={element.id}>{element.name}</option>
                       
                              ))
                            } 
                              
       </select>
       <div></div>
       <div></div>
     <div className="form-group">
       <label htmlFor="tarif">tarif</label>
       <input type="text" className="form-control" id="tarif"  placeholder="Enter tarif"
        value={tarif} onChange={e=>
         settarif(e.target.value)}/>
     </div>

   
     <div className="form-group">
       <label htmlFor="modalite" >Modalite</label>
       <select multiple ={false} className="form-control" id="modalite" value={modalite} onChange={e=>{
          setmodalite(e.target.value.id)}}>
        if (modalites) {modalites.map(element => ( 
              <option  key={element.id}>{element.type}</option>
         
              ))
            } 

       </select>
       </div>
       <div></div>
       <div></div>
       <div className="form-group">
       <label htmlFor="photo">image</label>
       <input type="file" className="form-control-file" id="image"  value={''} onChange={e=>
                         setimage(e.target.files[0].name)}/>
     </div>
     </div>
     <div className="form-group">
       <label htmlFor="commune">commune</label>
       <input type="text" className="form-control" id="commune"  placeholder="Enter commune"  value={commune} onChange={e=>
                         setcommune(e.target.value)}/>
     </div>
     <div className="form-group">
       <label htmlFor="adresse">adresse</label>
       <input type="text" className="form-control" id="adresse"  placeholder="Enter adresse" value={adresse} onChange={e=>
                         setadreese(e.target.value)}/>
     </div>
     <div></div>
       <div></div>
     <div className="form-group">
       <label htmlFor="wilaya">wilaya</label>
       <input  className="form-control" id="wilaya"
       value={wilaya} onChange={e=>
         setwilaya(e.target.value)}/>
     </div>
     <div></div>
       <div></div>
     <button type="submit" className="btn btn-primary" onClick={
       
       function(){addannonce({category,theme,description,tarif,modalite,image,wilaya,commune,adresse})}}>Submit</button>
   </form>
   </>
  )
}

export default Form

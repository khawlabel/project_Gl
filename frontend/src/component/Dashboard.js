import React from 'react'
import { Link } from 'react-router-dom'
const dashboard = () => {
  const id_user=localStorage.getItem('id')
  return (
    <>
<ul class="list-group">
  <li class="list-group-item"><Link to='/dashboard'>Dashboard</Link></li>
  <li class="list-group-item"><Link to='/edit_profile'>editprofile</Link></li>
  <li class="list-group-item"><Link to='/Mes_annonces'>Mes Annonces</Link></li>
  <li class="list-group-item"><Link to={'/favori/'+id_user+'/'} > Favori</Link></li>
  <li class="list-group-item"><Link to='/changer_mot_passse'>modifier mot de passe</Link></li>
  <li class="list-group-item"><Link to='/publier'>ajouter une annonce</Link></li>
</ul>
    </>
  )
}

export default dashboard
import {BrowserRouter as Router,Route,Routes}  from 'react-router-dom';
import { Header,Footer,Home,Publier,Detail,Login,Logout,About,Panier,MesAnnonces,Favori,Register,User, Dashboard,Allannonces,Update,Delete,Info_annonceur} from './component/index';
import './App.css'
function App() {
  
  return (
 <>
 <Router>
 <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/about' element={<About />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/register' element={<Register />}/> 
        <Route path='/logout' element={<Logout />}/> 
        <Route path='/Favori/:annonce_id' element={<Favori />}/> 
        <Route path='/publier' element={<Publier />}/> 
        <Route path='/Mes_annonces' element={<MesAnnonces />}/> 
        <Route path='/dashboard' element={<Dashboard />}/> 
        <Route path='/allannonces' element={<Allannonces />}/>
        <Route path='/update/:annonce_id' element={<Update />}/>
        <Route path='/detail/:annonce_id' element={<Detail />}/> 
        <Route path='/delete/:annonce_id' element={<Delete />}/>
        <Route path='/info_annonceur/:annonceur_id' element={<Info_annonceur />}/>
    </Routes>  
    <Footer/>   
 </Router>
        
 </>
  )
}

export default App;

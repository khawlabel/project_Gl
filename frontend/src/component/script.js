import { ReactDOM } from 'react';



function  exemple(){
    
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
    return (<>
        menu.onclick = () =>{
        navbar.classList.toggle('active');
        menu.classList.toggle('fa-times')
    }
    
    window.onscroll = () =>{
        navbar.classList.remove('active')
        menu.classList.remove('fa-times')}
        </>
        )
    }

 
ReactDOM.render(<exemple />,document.getElementById('root'));

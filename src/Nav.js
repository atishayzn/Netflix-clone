import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router';
import './Nav.css'


function Nav() {
    const[show,handleShow]=useState(false)
    const history=useHistory()

    useEffect(() => {
        window.addEventListener('scroll',() =>{
           if(window.scrollY >100){
               handleShow(true);
           }
           else
           handleShow(false);
        });
        return () =>{
            window.removeEventListener('scroll')
        };
        
    }, []);
    return (
        <div className={'nav '+(show && "dark_bg")}>
            <img 
            className='nav_logo'
            src={process.env.PUBLIC_URL+'./logo.png'}
            alt="Netflix Logo"/>
            
            <img 
              className='nav_avatar'
              src={process.env.PUBLIC_URL+'./profile__logo.png'}
              alt='Avatar'
            />
        </div>
    )
}
export default Nav

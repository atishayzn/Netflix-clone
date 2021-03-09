import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router';
import './Nav.css'


function Nav() {
    const[show,handleShow]=useState(false)
    const history=useHistory()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
    
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
      }, []);
        
   
    return (
        <div className={'nav '+(show && "dark_bg")}>
            <img onClick={()=>history.push("/")}
            className='nav_logo'
            src={process.env.PUBLIC_URL+'./logo.png'}
            alt="Netflix Logo"/>
            
            <img onClick={()=>history.push("/profile")}
              className='nav_avatar'
              src={process.env.PUBLIC_URL+'./profile__logo.png'}
              alt='Avatar'
            />
        </div>
    )
}
export default Nav

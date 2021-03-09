import React from 'react'
import Nav from '../Nav'
import {useSelector} from 'react-redux'
import './ProfileScreen.css'
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Profilescreen() {
    const user=  useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt=""
                    />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                <div className="profileScreen__plans">
                    <h3>Plans</h3>
                    
                <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut">
                    Sign Out
                </button>
                </div>
                </div>
            </div>
        </div>

            
        </div>
    )
}

export default Profilescreen
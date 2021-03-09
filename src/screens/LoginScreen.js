import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {
    const [signIn,setSignIn]=useState(false)
    return (
        <div className="loginScreen">
            <div className="loginScreen_bg">
                <img className="loginScreen_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt=""></img>
            
            <button onClick={()=>setSignIn(true)}
            className="loginScreen_button">
                Sign In
            </button>
            <div className="loginScreen_gradient"/>
            </div>
            <div className="loginScreen_body">
                {signIn?(<SignUpScreen/>):(
                    <>
                    <h1>Unlimited films,TV program and more. </h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>
                        Ready to watch? Enter your email to get started.
                    </h3>
                    <div className="loginScreen_input">
                        <form>
                            <input type='email' placeholder="Email Address"/>
                            <button className='loginScreen_getStarted'
                                    onClick={()=>setSignIn(true)}>
                                GET STARTED
                            </button>    
    
                        </form>
    
                    </div>
                    </>
                )}
                

            </div>
        </div>
    )
}

export default LoginScreen

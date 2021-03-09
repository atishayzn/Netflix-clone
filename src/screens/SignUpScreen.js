import React,{useRef} from 'react'
import { auth } from '../firebase';
import './SignUpScreen.css'

function SignUpScreen() {
    const emailRef= useRef(null);
    const passwordRef=useRef(null);
    const register=(e)=>{
        e.preventDefault(e);
        auth.createUserWithEmailAndPassword(emailRef.current.value,
            passwordRef.current.value)
            .then((authUser)=>{console.log(authUser)})
            .catch((error)=>alert(error.message));
    }
    const signIn=(e)=>{
        e.preventDefault(e);
        auth.signInUserWithEmailAndPassword(emailRef.current.value,
            passwordRef.current.value)
            .then((authUser)=>{console.log(authUser)})
            .catch((error)=>alert(error.message));

    }
    return (
        <div className='signUpScreen'>
            
            <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email"/>
            <input ref={passwordRef} placeholder="Password" type="password"/>
            <button  onclick={signIn} type="submit">Sign In</button>
            
            <h4><span className="signUpScreen_gray">New to netflix?  </span>
            <span onclick={register} className="signUpScreen_link">Sign Up now.</span>
            
            </h4>
            </form>
        </div>
    )
}

export default SignUpScreen

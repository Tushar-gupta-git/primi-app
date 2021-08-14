import React from 'react'
import { auth, provider, provider2 } from '../firebase'
import "./Login.css"
function Login() {
    const google=()=>{
        auth.signInWithPopup(provider)
    }
    // const phonenumber=()=>{
    //     // auth.signInWithPopup(provider2)
    //     // auth.signInWithPhoneNumber(provider2)
    // }
    return (
        <div className="login">
            <h1>
            i am login
            </h1>
            <button onClick={google} className="button101">login with google</button>
 
            {/* <button  onClick={phonenumber}  className="button101">login with phone number</button> */}


            
        </div>
    )
}

export default Login

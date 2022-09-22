import React from 'react'
import styles from '../Styling/SignUP.module.css'
import { useDispatch } from "react-redux";
import { signIn } from "../features/Userslice";
import db from './Firebase';
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function SignUP({ flag, setflag }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  function handleSignUp(e) {
    e.preventDefault();
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        return user;

        // ...
      })
      .then((user) => {
        updateProfile(user, {
        })
          .then(() => {
            dispatch(
              signIn({
                email: user.email,
              })
            );
          })
           }).catch((error) => {
            const errorMessage=error.message
            console.log(error.message);
            alert(errorMessage);
          });

  

    setemail("");
    setpassword("");
  }
    return (
        <div className={styles.loginContainer}>
        <div className={styles.loginContent}>
          
  <div className={styles.loginHeader}>
    <h1>Sign Up</h1>
    <span>Order from best restaurant in india</span>
      </div>
      <div className={styles.loginForm}>
          <form onSubmit={handleSignUp} >
              
          <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}  placeholder="email"/>
              <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="password"/>
              <button type="submit">Sign UP</button>
          </form>

          </div>
      </div>
      <div className={styles.Signuprouter}>
          <span className={styles.signUpText} onClick={()=>setflag(!flag)}>Back to Login</span>
      </div>  
</div>

  )
}

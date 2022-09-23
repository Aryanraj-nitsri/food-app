import React, { useState } from "react";
import styles from '../Styling/Login.module.css'
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signIn } from "../features/Userslice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hello")
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .then((user) => {
        dispatch(
          signIn({
            email: user.email,

          })
        );
      navigate("/welcome")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
        console.log(errorCode);
      });
    
    setemail("");
    setpassword("")
  }
  
    return(
      <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
              
      <div className={styles.loginHeader}>
        <h1>Sign In</h1>
        <span>Order from best restaurant in india</span>
          </div>
          <div className={styles.loginForm}>
              <form onSubmit={handleSubmit} >
                  
              <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}  placeholder="email"/>
                  <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="password"/>
                  <button type="submit">Log In</button>
              </form>

              </div>
          </div>
          <div className={styles.Signuprouter}>
              <span>New customer ?</span><span className={styles.signUpText} onClick={()=>navigate("/")}>Sign Up</span>
          </div>  
    </div>
  );
  }
  
  
    


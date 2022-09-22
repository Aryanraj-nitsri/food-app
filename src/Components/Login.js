import React from "react";
import styles from '../Styling/Login.module.css'

export default function Login() {
    return(
      <div className={styles.loginContainer}>
            <div className={styles.loginContent}>
              
      <div className={styles.loginHeader}>
        <h1>Sign In</h1>
        <span>Order from best restaurant in india</span>
          </div>
          <div className={styles.loginForm}>
              <form >
                  
              <input type="email"  placeholder="email"/>
                  <input type="password" placeholder="password"/>
                  <button type="submit">Log In</button>
              </form>

              </div>
          </div>
          <div className={styles.Signuprouter}>
              <span>New customer ?</span><span className={styles.signUpText}>Sign Up</span>
          </div>  
    </div>
  );
}

import React from "react";
import styles from "../Styling/SignUP.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUP({ flag, setflag }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  function handleSignUp(e) {
    e.preventDefault();
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/login");

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
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
          <form onSubmit={handleSignUp}>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="password"
            />
            <button type="submit">Sign UP</button>
          </form>
        </div>
      </div>
      <div className={styles.Signuprouter}>
        <span className={styles.signUpText} onClick={() => navigate("/login")}>
          Go to Login
        </span>
      </div>
    </div>
  );
}

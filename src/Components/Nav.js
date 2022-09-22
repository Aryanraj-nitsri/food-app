import React from "react";
import styles from "../Styling/Nav.module.css";
export default function Nav({ totalItem,setopen }) {
  
  
  return (
    <div className={styles.navContainer}>
      <div className={styles.leftPart}>
        <img src="../../assets/restaurant_48px.svg" alt="error" />
        <h1>Food's Restaurant</h1>
      </div>
      { totalItem ?
        <div className={styles.rightPart}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png"
            alt="error"
            onClick={()=>setopen(true)}
          />
          <div className={styles.itemNotification}>
            <span>{totalItem}</span>
          </div>
                  </div>:""
      }
      
      
    </div>
  );
}

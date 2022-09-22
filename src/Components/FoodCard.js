import React from "react";
import styles from "../Styling/FoodCard.module.css";
import { useState } from "react";

export default function FoodCard({ item }) {
  const [Count,setcount]=useState(item.count)
  function handleMinus() {
    if (Count > 0) {
     setcount(Count-1)
   }
 }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardThumbNail}>
        <img src={`../../assets/${item.image} `} alt="" />
          </div>
          <div className={styles.cardContentContainer}>
              
      <div className={styles.cardContent}>
          <span className={styles.title}>{item.name}</span>
          <span>Price:{item.price}</span>
          {Count?
          (<><span>Total:{ Count}</span>
          <span>Cost:({Count*item.price})</span></>):""
          }
      </div>
      <div className={styles.cardbuttons}>
        <button className={styles.plus} onClick={()=>{setcount(Count+1)}}>+</button>
        <button className={styles.minus} onClick={handleMinus}>-</button>
              </div>
          </div>
              
    </div>
  );
}

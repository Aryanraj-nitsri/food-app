import React from "react";
import styles from "../Styling/FoodCard.module.css";
import { useState } from "react";

export default function FoodCard({ item,handlePlus,handleMinus}) {

  console.log("insideFoodCArd")
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardThumbNail}>
        <img src={`../../assets/${item.image} `} alt="" />
          </div>
          <div className={styles.cardContentContainer}>
              
      <div className={styles.cardContent}>
          <span className={styles.title}>{item.name}</span>
          <span>Price:{item.price}</span>
          {item.count?
          (<><span>Total:{ item.count}</span>
          <span>Cost:({item.count*item.price})</span></>):""
          }
      </div>
      <div className={styles.cardbuttons}>
        <button className={styles.plus} onClick={()=>{handlePlus(item)}}>+</button>
        <button className={styles.minus} onClick={()=>handleMinus(item)}>-</button>
              </div>
          </div>
              
    </div>
  );
}

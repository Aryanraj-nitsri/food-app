import React from 'react'
import styles from '../Styling/Foodmenu.module.css'
import { useNavigate } from "react-router-dom";



export default function Foodmenu() {

  const navigate = useNavigate();

    
    return (
            <div className={styles.foodMenuContainer}>
           <div className={styles.foodMenuContent}>

            <h1>
                Welcome to Food's Kitchen
            </h1>
                <button onClick={()=>navigate("/menu")}>Go to Menu</button>
            </div>
                
      </div>
  )
}

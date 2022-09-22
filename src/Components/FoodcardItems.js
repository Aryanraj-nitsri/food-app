import React, { useState } from 'react'
import FoodCard from './FoodCard'
import Modal from './Modals'

export default function FoodcardItems({products,handlePlus,handleMinus}) {
    // let data=[1,2,3,4];
    
    return (
        <div style={styles.container}>
            {products.map((item) => (<FoodCard item={item} handlePlus={handlePlus } handleMinus={handleMinus} key={item.name} />))}  
        </div>
        
  )
}
const styles = {
    container: {
        width:"50%",
        display: 'flex',
        gap: '1rem',
        flexWrap: "wrap",
        margin: ' 4rem auto',
    }
}
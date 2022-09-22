import React, { useState } from 'react'
import FoodCard from './FoodCard'
import data from '../feeds.json'
import Modal from './Modals'

export default function FoodcardItems() {
    // let data=[1,2,3,4];
    
    return (
        <div style={styles.container}>
            {data.map((item) => (<FoodCard item={item}/>))}  
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
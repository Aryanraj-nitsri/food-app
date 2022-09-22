import React from 'react'

export default function Checkout() {
    return (
        <div className="checkOutContainer" style={style.container}>
            <h1 style={{textAlign:"center",letterSpacing:"0.1rem",fontWeight:"200"}}>CheckOut</h1>
            <p style={{fontSize:"1.5rem"}}>Thank you for your order</p>
      </div>
  )
}
const style = {
    container:{
        width: "80%",
        margin: "auto",
        marginTop:"10rem",
        borderBottom: "thin solid lightgray",
        padding: "1rem",
        backgroundColor: "#f4f2ee",
        borderRadius: "0.5rem",
        

    }
}
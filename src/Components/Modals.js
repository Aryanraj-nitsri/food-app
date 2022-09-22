import React from 'react'
import ReactDOM from 'react-dom';
import styles from '../Styling/Modals.module.css'

export default function Modals({ open, children}) {
    if(!open) return null
    return ReactDOM.createPortal (
        <div className={styles.modalWrapper}>
            {children}
        </div>,
        document.getElementById("portal")
  )
    
}

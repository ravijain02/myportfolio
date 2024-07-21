import React from 'react'
import '../styles/alertbox.css'

const Alertbox = ({ message, onClose }) => {
  return (
    <div className="alertbox_overlay">
      <div className="alertbox_box">
        <div className="alertbox_header">
          <h2>Thank you for connect with me</h2>
          <button className="alertbox_close" onClick={onClose}>&times;</button>
        </div>
        <div className="alertbox_body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Alertbox

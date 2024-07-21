import React from 'react'
import '../styles/card.css'

const Card = ({ children }) => {
  return (
    <div className="cardBox">
      <div className="card">
        {children}
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import "../styles/Button.css"
function Button({displayedtext}) {
  return (
    <button className="cta-btn">{displayedtext}</button>
  )
}

export default Button
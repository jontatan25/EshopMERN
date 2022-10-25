import React from 'react'
import "./style.css"

const btnTransparent = ({text,color}) => {
  return (
    
    <button className={(color === "white")?"transparent__btn -whiteBtn" : "transparent__btn"}>{text}</button>
  )
}

export default btnTransparent
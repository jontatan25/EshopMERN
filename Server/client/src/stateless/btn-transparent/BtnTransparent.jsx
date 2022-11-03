import React from 'react'
import "./style.css"

const btnTransparent = ({text,color,clickFunction}) => {
  return (
    <>
    {clickFunction ? 
    <button className={(color === "white")?"transparent__btn -whiteBtn" : "transparent__btn"} onClick={clickFunction}>{text}</button>
    :
    <button className={(color === "white")?"transparent__btn -whiteBtn" : "transparent__btn"} >{text}</button>
    }
  
  </>
  )
}

export default btnTransparent
import React from 'react'
import "./style.css"

const BtnGrey = ({text,activeToogle,actualToogle}) => {
  const handleClick = () => {
    activeToogle(!actualToogle)
  };
  return (
    <button className="btn__grey" onClick={handleClick}>{text}</button>
  )
}

export default BtnGrey
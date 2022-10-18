import React from 'react'
import "./style.css"

const BtnGrey = ({text,increaseHeigth}) => {
  const handleClick = () => {
    increaseHeigth()
  };
  return (
    <button className="btn__grey" onClick={handleClick}>{text}</button>
  )
}

export default BtnGrey
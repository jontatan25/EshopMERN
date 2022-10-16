import React from 'react'
import "./style.css"

const CarouselItem = ({urlPhoto, itemTitle, description, price}) => {
  return (
    <div className="collection__item">
    <div
      className="collection__item-photo-container"
      style={{ backgroundImage: `url(${urlPhoto})` }}
    ></div>
    <h4 className="collection__item-title">{itemTitle}</h4>
    <p className="collection__item-name">{description}</p>
    <p className="collection__item-price">{price}</p>
  </div>
  )
}

export default CarouselItem
import React from "react"
import "./price.scss"

const Price = ({ data }) => {
  const { price, avg } = data
  return (
    <div className="price">
      <h2 className="price__title title">Collection price</h2>
      <div className="price__wrapper">
        <div className="price__main">{price}</div>
        <div className="price__avg">
          <span>{avg}</span> AVG price
        </div>
      </div>
    </div>
  )
}

export default Price

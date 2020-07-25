import React from "react"
import styles from "./price.module.scss"

import classNames from "classnames"

const title = classNames("title")

const Price = ({ data }) => {
  const { price, avg } = data
  return (
    <div className={styles.price}>
      <h2 className={title}>Collection price</h2>
      <div className={styles.price__wrapper}>
        <div className={styles.price__main}>{price}</div>
        <div className={styles.price__avg}>
          <span>{avg}</span> AVG price
        </div>
      </div>
    </div>
  )
}

export default Price

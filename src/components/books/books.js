import React from "react"
import styles from "./books.module.scss"

import classNames from "classnames"

const title = classNames("title")

const Books = ({ info }) => {
  return (
    <div className={styles.books}>
      <h2 className={title}>Books</h2>
      <div className={styles.books__list}>
        {info.map(({ title, count }, idx) => {
          return (
            <div className={styles.books__item} key={idx}>
              <div className={styles.books__count}>{count}</div>
              <div className={styles.books__name}>{title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Books

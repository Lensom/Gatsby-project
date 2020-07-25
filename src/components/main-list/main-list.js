import React from "react"
import styles from "./main-list.module.scss"

import Profile from "../profile"
import Books from "../books"
import State from "../state"
import Price from "../price"

import classNames from "classnames"

const MainList = props => {
  let { userInfo, booksInfo, stateData, priceData } = props.data
  const activeClass = classNames(styles.main__item, styles.active)

  return (
    <div className={styles.main__list}>
      <div className={activeClass}>
        <Profile info={userInfo} />
      </div>
      <div className={styles.main__item}>
        <Books info={booksInfo} />
      </div>
      <div className={styles.main__item}>
        <State data={stateData} />
      </div>
      <div className={styles.main__item}>
        <Price data={priceData} />
      </div>
    </div>
  )
}

export default MainList

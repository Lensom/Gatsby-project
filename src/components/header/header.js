import React from "react"

import Logotype from "../logotype"
import Menu from "../menu"

import styles from "./header.module.scss"

const Header = ({ items }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <Logotype />
        <Menu items={items} />
      </div>
    </div>
  )
}

export default Header

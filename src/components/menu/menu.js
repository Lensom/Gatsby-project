import React from "react"

import styles from "./menu.module.scss"

const Menu = ({ items }) => {
  return (
    <ul className={styles.menu__list}>
      {items.map(({ name, icon, url }, idx) => {
        return (
          <div className={styles.menu__item} key={idx}>
            <a href={url} className={styles.menu__link}>
              <div className={styles.menu__icon}>
                <img src={icon} alt={name} />
              </div>
              <span>{name}</span>
            </a>
          </div>
        )
      })}
    </ul>
  )
}

export default Menu

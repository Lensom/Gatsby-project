import React from "react"

import "./menu.scss"

const Menu = ({ items }) => {
  return (
    <ul className="menu__list">
      {items.map(({ name, icon, url }, idx) => {
        return (
          <div className="menu__item" key={idx}>
            <a href={url} className="menu__link">
              <div className="menu__icon">
                <img src={icon} alt="" />
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

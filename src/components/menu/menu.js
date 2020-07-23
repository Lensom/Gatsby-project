import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

import "./menu.scss"

const Menu = () => {
  const items = [
    {
      name: "Profile",
      icon: "",
      url: "/profile",
    },
    {
      name: "Settings",
      icon: "",
      url: "/settings",
    },
  ]

  return (
    <ul className="menu__list">
      {items.map(({ name, icon, url }) => {
        return (
          <div className="menu__item">
            <a href={url}>
              <div className="menu__icon">{icon}</div>
              {name}
            </a>
          </div>
        )
      })}
    </ul>
  )
}

export default Menu

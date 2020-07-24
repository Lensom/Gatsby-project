import React, { useState } from "react"
import "./profile.scss"

const Profile = ({ info }) => {
  const { name, imageUrl, id, date, owners, logoOwners } = info

  const [isHovered, setIsHovered] = useState(null)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  // Теоретически до 10.
  const ownerCustomize = () => {
    return owners == 0 || owners > 1 ? `+${owners} owners` : `+${owners} owner`
  }

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__name title">Hello, {name}</div>
        <div className="profile__information--wrapper">
          <span
            className="profile__information"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            i
          </span>
          <div className={isHovered ? `tooltiptext active` : `tooltiptext`}>
            Tooltip
          </div>
        </div>
      </div>
      <div className="profile__info">
        <div className="profile__image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="profile__info--wrapper">
          <div className="profile__id profile__text">
            ID: <span>{id}</span>
          </div>
          <div className="profile__date profile__text">
            Registration date: <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="profile__owners">
        <div className="profile__owners--images">
          {logoOwners.map((el, idx) => {
            return (
              <div className="profile__owners--image" key={idx}>
                <img src={el} />
              </div>
            )
          })}
        </div>
        <div className="profile__owners--count">{ownerCustomize()}</div>
      </div>
    </div>
  )
}

export default Profile

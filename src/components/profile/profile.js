import React, { useState } from "react"
import styles from "./profile.module.scss"

import classNames from "classnames"

const Profile = ({ info }) => {
  const { name, imageUrl, id, date, owners, logoOwners } = info

  const [isHovered, setIsHovered] = useState(null)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  // Теоретически до 10.
  const ownerCustomize = () => {
    return owners === 0 || owners > 1 ? `+${owners} owners` : `+${owners} owner`
  }

  const activeStyles = classNames("tooltiptext", {
    active: isHovered,
  })
  const title = classNames("title")

  return (
    <div className={styles.profile}>
      <div className={styles.profile__wrapper}>
        <h2 className={title}>Hello, {name}</h2>
        <div className={styles.profile__informationWrapper}>
          <span
            className={styles.profile__information}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="button"
            tabIndex="0"
          >
            i
          </span>
          <div className={activeStyles}>Tooltip</div>
        </div>
      </div>
      <div className={styles.profile__info}>
        <div className={styles.profile__image}>
          <img src={imageUrl} alt="Profile" />
        </div>
        <div className={styles.profile__infoWrapper}>
          <div className={`${styles.profile__id} ${styles.profile__text}`}>
            ID: <span>{id}</span>
          </div>
          <div className={`${styles.profile__date} ${styles.profile__text}`}>
            Registration date: <span>{date}</span>
          </div>
        </div>
      </div>
      <div className={styles.profile__owners}>
        <div className={styles.profile__ownersImages}>
          {logoOwners.map((el, idx) => {
            return (
              <div className={styles.profile__ownersImage} key={idx}>
                <img src={el} alt="Owner" />
              </div>
            )
          })}
        </div>
        <div className={styles.profile__ownersCount}>{ownerCustomize()}</div>
      </div>
    </div>
  )
}

export default Profile

import React from "react"
import "./profile.scss"

const Profile = ({ info }) => {
  const { name, imageUrl, id, date, owners } = info

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <div className="profile__name">Hello, {name}</div>
        <span className="profile__info">i</span>
      </div>
      <div className="profile__info">
        <div className="profile__image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="profile__info--wrapper">
          <div className="profile__id">
            Id: <span>{id}</span>
          </div>
          <div className="profile__date">
            Registration date: <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="profile__owners">
        <div className="profile__owners--images"></div>
        <div className="profile__owners--count">{owners} owners</div>
      </div>
    </div>
  )
}

export default Profile

import React from "react"

const Books = ({ info }) => {
  console.log(info)
  return (
    <div className="books">
      <div className="books__list">
        {info.map(({ title, count }) => {
          return (
            <div className="books__item">
              <div className="books__count">{count}</div>
              <div className="books__name">{title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Books

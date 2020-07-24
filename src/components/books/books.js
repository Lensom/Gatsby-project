import React from "react"
import "./books.scss"

const Books = ({ info }) => {
  return (
    <div className="books">
      <div className="books__title title">Books</div>
      <div className="books__list">
        {info.map(({ title, count }, idx) => {
          return (
            <div className="books__item" key={idx}>
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

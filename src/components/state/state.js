import React, { useState } from "react"
import "./state.scss"

const State = ({ data }) => {
  let [width, setWidth] = useState(0)

  setWidth = procent => {
    return (width = procent * 1.6)
  }
  return (
    <div className="state">
      <h2 className="state__title title">State</h2>
      <div className="state__wrapper">
        {data.map(({ procent, eval: evaluation }, idx) => {
          return (
            <div className="state__status" key={idx}>
              <div
                className={`state__line state__line--${evaluation}`}
                style={{ width: setWidth(procent) + "px" }}
              ></div>
              <div className="state__info">
                <div className="state__procent">{procent}%</div>
                <div className="state__eval">{evaluation}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default State

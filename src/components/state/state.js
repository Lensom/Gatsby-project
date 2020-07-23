import React from "react"
import "./state.scss"

const State = ({ data }) => {
  return (
    <div className="state">
      <h2 className="state__title title">State</h2>
      <div className="state__wrapper">
        {data.map(({ procent, eval: evaluation }) => {
          return (
            <div className="state__status">
              <div className="state__status--line"></div>
              <div className="state__info">
                <div className="state__procent">{procent}</div>
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

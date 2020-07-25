import React, { useState } from "react"
import styles from "./state.module.scss"

import classNames from "classnames"

const title = classNames("title")

const State = ({ data }) => {
  let [width, setWidth] = useState(0)

  setWidth = procent => {
    return (width = procent * 1.6) + "px"
  }
  return (
    <div className={styles.state}>
      <h2 className={title}>State</h2>
      <div className={styles.state__wrapper}>
        {data.map(({ procent, eval: evaluation }, idx) => {
          const color = classNames(styles.state__line, evaluation)
          return (
            <div className={styles.state__status} key={idx}>
              <div className={color} style={{ width: setWidth(procent) }}></div>
              <div className={styles.state__info}>
                <div className={styles.state__procent}>{procent}%</div>
                <div className={styles.state__eval}>{evaluation}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default State

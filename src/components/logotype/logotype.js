import React from "react"
import "./logotype.scss"

import logotype from "./images/logotype.svg"

const Logotype = () => {
  return <a href="/">{<img src={logotype} alt="Logotype" />}</a>
}

export default Logotype

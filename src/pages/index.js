import React from "react"

import Header from "../components/header"
import MainList from "../components/main-list"

import "../style.css"
import "../default.scss"

const IndexPage = () => {
  return (
    <div className="index-page">
      <div className="wrapper">
        <Header />
      </div>
      <div className="wrapper">
        <MainList />
      </div>
    </div>
  )
}

export default IndexPage

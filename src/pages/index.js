import React from "react"

import Header from "../components/header"
import MainList from "../components/main-list"

import "../styles/index.scss"

import Storage from "../storage/storage"

const IndexPage = () => {
  let { menuItems, ...mainListData } = Storage
  return (
    <div className="index-page">
      <div className="wrapper">{<Header items={menuItems} />}</div>
      <div className="wrapper">
        <MainList data={mainListData} />
      </div>
    </div>
  )
}

export default IndexPage

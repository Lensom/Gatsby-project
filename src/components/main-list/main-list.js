import React from "react"
import "./main-list.scss"

import Profile from "../profile"
import Books from "../books"
import State from "../state"
import Price from "../price"

const MainList = () => {
  // Вынести всю инфу в отдельный сторедж
  const userInfo = {
    name: "Adam Smith",
    imageUrl: "./images/image.png",
    id: "1548 0582 0505 2978",
    date: "03.07.2020",
    owners: "+3",
  }

  const booksInfo = [
    {
      title: "Academic books",
      count: 25,
    },
    {
      title: "Ordinary books",
      count: 12,
    },
  ]

  const stateData = [
    {
      eval: "Good",
      procent: "50%",
    },
    {
      eval: "Middle",
      procent: "35%",
    },
    {
      eval: "Bad",
      procent: "15%",
    },
  ]

  const priceData = {
    price: "20 250 €",
    avg: "121.5 €",
  }

  return (
    <div className="main__list">
      <div className="main__item">
        <Profile info={userInfo} />
        <Books info={booksInfo} />
        <State data={stateData} />
        <Price data={priceData} />
      </div>
    </div>
  )
}

export default MainList

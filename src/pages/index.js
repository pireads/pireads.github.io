import React from "react"
import Header from '../components/header/Header'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <img
          src="https://projecteuler.net/profile/pireads.png"
          alt="Project Euler"
        />
      </div>
    )
  }
}

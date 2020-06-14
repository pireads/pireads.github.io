import React from "react"
import Header from "../components/Header"
import transcript from '../components/transcript/majorGraph.svg'

export default class Transcript extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <img
          src={transcript}
          alt="Transcript"
        />
      </div>
    )
  }
}

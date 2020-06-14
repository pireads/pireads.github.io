import React from "react"
import Header from "../components/header/Header"
import ResumeComponent from "../components/resume/ResumeComponent"

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ResumeComponent />
      </div>
    )
  }
}

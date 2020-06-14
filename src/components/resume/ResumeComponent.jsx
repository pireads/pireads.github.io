import React from "react"
import resume from "./resume.pdf"

export default class Resume extends React.Component {
  render() {
    return <iframe title="Resume" src={resume} width="100%" height="1000px"></iframe>
  }
}

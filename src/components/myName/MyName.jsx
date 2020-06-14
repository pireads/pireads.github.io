import React from "react"
import myNameStyles from './myName.module.css'

export default class MyName extends React.Component {
  render() {
    return <h1 className={myNameStyles.name}> Avi Moskoff </h1>
  }
}

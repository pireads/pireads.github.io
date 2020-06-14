import React from "react";

import header from './header.module.css'

import MyName from "../myName/MyName";
import FancyLink from "../fancyLink/FancyLink";
// import icon from "./icon.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className={header.header}>
        <MyName />
        <FancyLink address="/" text="home" />
        <FancyLink address="/resume" text="resume" />
        <FancyLink address="/transcript" text="transcript" />
        <br />
        <br />
      </div>
    );
  }
}

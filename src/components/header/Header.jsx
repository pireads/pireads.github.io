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
        <FancyLink className={header.headerLink} address="/" text="HOME" />
        <FancyLink className={header.headerLink} address="/resume" text="RESUME" />
        <FancyLink className={header.headerLink} address="/transcript" text="TRANSCRIPT" />
        <br />
        <br />
      </div>
    );
  }
}

import React from "react";

import MyName from "../myName/MyName";
import FancyLink from "../fancyLink/FancyLink";
import icon from "./icon.png";

export default class Header extends React.Component {
  render() {
    return (
      <div>
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

import React from "react";

import resumeStyles from "./resumeStyles.module.css";
import Bullet from "./Bullet";
import FancyLink from "../fancyLink/FancyLink"

export default class Resume extends React.Component {
  render() {
    const bullets = this.props.bullets.map((bullet) => (
      <Bullet key={Math.random()} icon={this.props.icon} text={bullet} />
    ));

    return (
      <div>
        <div
          className={`${resumeStyles.columns} ${resumeStyles.twoColumns}`}
        >
          <p className={resumeStyles.entry}>
            <FancyLink address={this.props.address} text={this.props.name}/>
          </p>
          <p className={resumeStyles.entry}>{this.props.time}</p>
          <p className={resumeStyles.entry}>{this.props.position}</p>
          <p className={resumeStyles.entry}>{this.props.location}</p>
        </div>
        <div className={resumeStyles.bullets}>{bullets}</div>
      </div>
    );
  }
}

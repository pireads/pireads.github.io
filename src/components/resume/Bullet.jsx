import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import resumeStyles from "./resumeStyles.module.css";

export default class Resume extends React.Component {
  render() {
    return (
      <p className={`${resumeStyles.entry} ${resumeStyles.bulletEntry}`}>
        <div>
          <FontAwesomeIcon
            icon={this.props.icon}
            className={`${resumeStyles.smallIcon} fa-fw`}
          />
        </div>
        <div className={resumeStyles.bulletText}>{this.props.text}</div>
      </p>
    );
  }
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import resumeStyles from "./resumeStyles.module.css";

export default class Resume extends React.Component {
  render() {
    return (
      <p className={resumeStyles.entry}>
        <FontAwesomeIcon
          icon={this.props.icon}
          className={`${resumeStyles.smallIcon} fa-fw`}
        />
        {this.props.text}
      </p>
    );
  }
}

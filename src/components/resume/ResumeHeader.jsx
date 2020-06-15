import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import resumeStyles from "./resumeStyles.module.css";

export default class ResumeHeader extends React.Component {
  render() {
    return (
      <div className={resumeStyles.header}>
        <h2>
          <FontAwesomeIcon
            icon={this.props.icon}
            className={`${resumeStyles.icon} fa-fw`}
          />
          {this.props.title}
        </h2>
      </div>
    );
  }
}

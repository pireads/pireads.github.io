import React from "react";

import resumeStyles from "./resumeStyles.module.css";

export default class Resume extends React.Component {
  render() {
    return (
      <div className={`${resumeStyles.columns} ${resumeStyles.twoColumns}`}>
        <p className={resumeStyles.entry}>Arizona State University</p>
        <p className={resumeStyles.entry}>Graduating: May 2022</p>
        <p className={resumeStyles.entry}>
          Bachelor of Science in Computer Science and Mathematics
        </p>
        <p className={resumeStyles.entry}>GPA: 4.0</p>
      </div>
    );
  }
}

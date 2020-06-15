import React from "react";

import resumeStyles from "./resumeStyles.module.css";

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <div className={`${resumeStyles.columns} ${resumeStyles.skillColumns}`}>
          <p className={resumeStyles.skill}>Python</p>
          <p className={resumeStyles.skill}>Java</p>
          <p className={resumeStyles.skill}>Javascript</p>
          <p className={resumeStyles.skill}>CSS</p>
          <p className={resumeStyles.skill}>React</p>
          <p className={resumeStyles.skill}>Jupyter</p>
          <p className={resumeStyles.skill}>LaTeX</p>
          <p className={resumeStyles.skill}>C++</p>
        </div>
      </div>
    );
  }
}

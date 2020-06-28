import React from "react";
import {
  faGraduationCap,
  faChessKnight,
  faCode,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import ResumeHeader from "./ResumeHeader";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import resumeStyles from './resumeStyles.module.css'

export default class Resume extends React.Component {
  render() {
    return (
      <div className={resumeStyles.container}>
        <ResumeHeader title="EDUCATION" icon={faGraduationCap} />
        <Education />
        <ResumeHeader title="SKILLS" icon={faChessKnight} />
        <Skills />
        <ResumeHeader title="EXPERIENCE" icon={faCode} />
        <Experience />
        <ResumeHeader title="PROJECTS" icon={faRocket} />
        <Projects />
      </div>
    );
  }
}

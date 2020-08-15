import React from "react";
import { faGitkraken, faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faSatellite,
  faBroadcastTower,
} from "@fortawesome/free-solid-svg-icons";

import Job from "./Job";
import resumeStyles from "./resumeStyles.module.css";

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <Job
          name="Axosoft"
          address="https://www.gitkraken.com/"
          time="Summer 2020"
          position="Intern"
          location="Scottsdale, Arizona"
          icon={faGitkraken}
          bullets={[
            "Implemented arbritrary selection of default branches when initializing repositories in the GitKraken Git GUI.",
            "Implemented various features in the GitKraken Git GUI.",
            "Fixed various bugs within the Gitkraken Git GUI.",
          ]}
        />
        <hr className={resumeStyles.line} />
        <Job
          name="ASU Parallel Systems and Computing Labratory"
          address="https://ren-fengbo.lab.asu.edu/"
          time="Spring 2020"
          position="Research Assistant"
          location="Tempe, Arizona"
          icon={faPython}
          bullets={[
            "Ported compressive sensing algorithms to PyTorch for meta-analysis.",
          ]}
        />
        <hr className={resumeStyles.line} />
        <Job
          name="Jacobs Technology"
          address="https://www.atec.army.mil/epg/"
          time="Summer 2019"
          position="Intern"
          location="Fort Huachuca, Arizona"
          icon={faBroadcastTower}
          bullets={[
            "Obtained a secret security clearance.",
            "Researched and developed a modern alternative to paper data collection.",
          ]}
        />
        <hr className={resumeStyles.line} />
        <Job
          name="Left Hand Robotics"
          address="https://lefthandrobotics.com/"
          time="2017-2018"
          position="Intern"
          location="Longmont, Colorado"
          icon={faSatellite}
          bullets={[
            "Implemented an OTA software deployment system.",
            "Programmed hardware used for differential GPS.",
          ]}
        />
      </div>
    );
  }
}

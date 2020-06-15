import React from "react";
import {
  faProjectDiagram,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

import Job from "./Job";

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <Job
          name="avimoskoff.me"
          time="Summer 2020"
          icon={faProjectDiagram}
          bullets={["Built a personal website."]}
        />
        <Job
          name="projecteuler.net"
          time="2016-present"
          icon={faCalculator}
          bullets={[
            "Solved challenging problems involving math and computer science.",
            "Currently ranked in the top 1% for total problems solved.",
          ]}
        />
      </div>
    );
  }
}

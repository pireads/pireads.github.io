import masterPlan from "./masterPlan.json";
import transcriptStyle from "./transcriptStyle.module.css";

import { graphviz } from "d3-graphviz";
import * as d3 from "d3";
import React from "react";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default class TranscriptComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSemester: 0,
      isTransitioning: false,
    };
  }

  getClassesLessThanSemester(semester) {
    const classes = masterPlan.classes.reduce(
      (dot, course) =>
        course.semester <= semester
          ? `${dot || ""}
          ${course.code} [fillcolor="#${
              course.semester === semester ? "179287" : "ffffff"
            }" label="${course.code}\\n${
              course.name
            }"]${course.dependencies.reduce(
              (deps, dep) => `${deps}
            ${dep} -> ${course.code}`,
              ""
            )}`
          : dot,
      ""
    );

    return `digraph {
    rankdir=LR;
    graph [bgcolor="#000000" fontname="Jura;Sans-Serif"]
    node [fillcolor="#ffffff" fontname="Jura;Sans-Serif" margin="0.2,0.1" shape=box style=filled]
    edge [color="#ffffff" fontname="Jura;Sans-Serif"]
    ${classes}
    }`;
  }

  attributer(datum, index, nodes) {
    const selection = d3.select(this);
    if (datum.tag === "svg") {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const x = 200;
      const y = 10;
      const scale = 0.4;
      selection
        .attr("width", width + "pt")
        .attr("height", height + "pt")
        .attr(
          "viewBox",
          -x + " " + -y + " " + width / scale + " " + height / scale
        );
      datum.attributes.width = width + "pt";
      datum.attributes.height = height + "pt";
      datum.attributes.viewBox =
        -x + " " + -y + " " + width / scale + " " + height / scale;
    }
  }

  switchSemesters(semester) {
    if (this.state.isTransitioning || semester === this.state.currentSemester) {
      return;
    }
    this.setState({
      currentSemester: semester,
      isTransitioning: true,
    });
    const node = this.node;
    const viz = graphviz(node).tweenShapes(false).attributer(this.attributer);
    const dot = this.getClassesLessThanSemester(semester);
    viz
      .transition(d3.transition().duration(1000).ease(d3.easeLinear))
      .renderDot(dot)
      .on("end", () =>
        this.setState({ ...this.state, isTransitioning: false })
      );
  }

  componentDidMount() {
    const node = this.node;
    const viz = graphviz(node).tweenShapes(false).attributer(this.attributer);
    const dot = this.getClassesLessThanSemester(0);
    viz.renderDot(dot);
  }

  sliderTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#179287",
      },
    },
  });

  render() {
    return (
      <div>
        <div className={transcriptStyle.slider}>
          <ThemeProvider theme={this.sliderTheme}>
            <Slider
              disabled={this.state.isTransitioning}
              marks
              max={8}
              min={0}
              onChangeCommitted={(event, value) => this.switchSemesters(value)}
            />
          </ThemeProvider>
        </div>
        <div
          ref={(node) => (this.node = node)}
          className={transcriptStyle.graph}
        />
      </div>
    );
  }
}

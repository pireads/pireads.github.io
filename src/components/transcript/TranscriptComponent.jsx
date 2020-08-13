import masterPlan from "./masterPlan.json";
import transcriptStyle from "./transcriptStyle.module.css";
import { graphviz } from "d3-graphviz";
import * as d3 from "d3";
import React from "react";

export default class TranscriptComponent extends React.Component {
  constructor(props) {
    super(props);
    this.currentSemester = 0;
    this.isTransitioning = false;
  }

  getClassesLessThanSemester(semester) {
    const classes = masterPlan.classes.reduce(
      (dot, course) =>
        course.semester <= semester
          ? `${dot || ""}
          ${course.code} [label="${course.code}
          ${course.name}"]${course.dependencies.reduce(
              (deps, dep) => `${deps}
          ${dep} -> ${course.code}`,
              ""
            )}`
          : dot,
      ""
    );

    return `digraph {
    graph [bgcolor="#000000" fontname="Josefin Sans;Sans-Serif"]
    node [fontname="Josefin Sans;Sans-Serif" shape=box style=filled]
    edge [color="#ffffff" fontname="Josefin Sans;Sans-Serif"]
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

  incrementSemesters() {
    if (this.isTransitioning) {
      return;
    }
    this.isTransitioning = true;
    this.currentSemester++;
    this.currentSemester %= 9;
    const node = this.node;
    const viz = graphviz(node).tweenShapes(false).attributer(this.attributer);
    const dot = this.getClassesLessThanSemester(this.currentSemester);
    viz
      .transition(d3.transition().duration(1000).ease(d3.easeLinear))
      .renderDot(dot)
      .on("end", () => (this.isTransitioning = false));
  }

  componentDidMount() {
    const node = this.node;
    const viz = graphviz(node).tweenShapes(false).attributer(this.attributer);
    const dot = this.getClassesLessThanSemester(0);
    viz.renderDot(dot);
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementSemesters.bind(this)}>
          Next semester
        </button>
        <svg
          ref={(node) => (this.node = node)}
          className={transcriptStyle.graph}
        />
      </div>
    );
  }
}

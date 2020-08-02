import majorMap8 from "./majorMaps/8.dot";
import transcriptStyle from "./transcriptStyle.module.css";
import { graphviz } from "d3-graphviz";
import React from "react";

export default class TranscriptComponent extends React.Component {
  componentDidMount() {
    const node = this.node;
    const viz = graphviz(node);
    viz.scale(0.6);
    viz.renderDot(majorMap8);
  }
  render() {
    return (
      <svg
        ref={(node) => (this.node = node)}
        className={transcriptStyle.graph}
      />
    );
  }
}

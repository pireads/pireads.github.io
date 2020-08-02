import React from "react";
import Header from "../components/header/Header";
import TranscriptComponent from "../components/transcript/TranscriptComponent";

export default class Transcript extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <TranscriptComponent />
      </div>
    );
  }
}

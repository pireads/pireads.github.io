import React from "react";
import Header from "../components/header/Header";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <p>Welcome to my personal website.</p>
          <p>I hope you enjoy your stay.</p>
        </div>
      </div>
    );
  }
}

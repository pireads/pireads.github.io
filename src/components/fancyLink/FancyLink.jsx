import React from "react";

import fancyLinkStyles from "./fancyLink.module.css";

export default class FancyLink extends React.Component {
  state = {
    hasHovered: false,
    key: Math.random(),
  };

  mouseLeft = () => {
    this.setState(() => ({
      hasHovered: true,
      key: Math.random(),
    }));
  };

  render() {
    const { hasHovered, key } = this.state;

    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    return (
      <a
        key={key}
        onMouseLeave={this.mouseLeft}
        className={
          `${this.props.className} ${fancyLinkStyles.link} ${
          hasHovered ? fancyLinkStyles.linkBack : ""
          }`
        }
        href={this.props.address}
      >
        {this.props.text}
      </a>
    );
  }
}

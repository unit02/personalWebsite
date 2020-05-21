import React, { Component } from "react";
import bg from "./images/bg.jpeg";

class Heading extends Component {
  render() {
    let className = "heading";

    return (
      <div className={className}>
        {/* <img alt="header" src={bg} /> */}
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}
export default Heading;

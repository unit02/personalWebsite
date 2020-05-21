import React, { Component } from "react";

class TabContent extends Component {
  render() {
    return <div id="contentBG">{this.props.children}</div>;
  }
}
export default TabContent;

import React, { Component } from "react";
class Liked extends Component {
  render() {
    let classes = "fa fa-heart ";
    if (!this.props.liked) classes += "-o";

    return (
      <i
        onClick={this.props.onClick}
        className={classes}
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Liked;

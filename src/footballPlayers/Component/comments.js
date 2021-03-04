import React, { Component } from "react";

export default class comments extends Component {
  render() {
    return (
      <div>
        <p style={{ marginTop: "10px" }}>{this.props.social} this Player!</p>
      </div>
    );
  }
}

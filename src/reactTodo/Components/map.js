import React, { Component } from "react";

export class map extends Component {
  render() {
    const task = this.props.myTasks.map((task, index) => {
      return (
        <li key={index} style={{ marginBottom: "10px", fontSize: "1.7rem" }}>
          {task.name}
        </li>
      );
    });
    return <ul>{task}</ul>;
  }
}

export default map;

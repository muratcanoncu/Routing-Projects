import React, { Component } from "react";
import Players from "./body";

export default class list extends Component {
  render() {
    const { myplayers } = this.props;
    return (
      <div className="container-fluid">
        <div className="row justify-content-between">
          {myplayers.map((newPlayer) => {
            return (
              <Players
                key={newPlayer.id}
                name={newPlayer.name}
                team={newPlayer.team}
                goals={newPlayer.goals}
                maincomment={newPlayer.maincomment}
              ></Players>
            );
          })}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import List from "./list";
import { Jumbotron } from "react-bootstrap";

export default class jumbotron extends Component {
  // put decision maker inside the state
  state = {
    teams: true,
    myplayers: [
      {
        id: 1,
        name: "Messi",
        team: "Barcelona",
        goals: 41,
        maincomment: "Like",
      },
      {
        id: 2,
        name: "Ronaldo",
        team: "Juventus",
        goals: 34,
        maincomment: "Dislike",
      },
      {
        id: 3,
        name: "Henry",
        team: "Arsenal",
        goals: 53,
        maincomment: "Like",
      },
      // {
      //   id: 4,
      //   name: "Xavi",
      //   team: "Mumbai",
      //   maincomment: "Like",
      // },
    ],
  };
  //! create event function "above render" function
  myClickEvent = (e) => {
    //? use "this.setState" keyword inside function for set your state again
    this.setState({
      teams: !this.state.teams,
      myplayers1: [
        {
          id: 1,
          name: "Messi",
          team: "Manchester City",
          goals: 41,
          maincomment: "Transfered",
        },
        {
          id: 2,
          name: "Ronaldo",
          team: "Chelsea",
          goals: 34,
          maincomment: "Transfered",
        },
        {
          id: 3,
          name: "Henry",
          team: "Bayern Münich",
          goals: 53,
          maincomment: "Transfered",
        },
        // {
        //   id: 4,
        //   name: "Xavi",
        //   team: "Vissel Kobe",
        //   maincomment: "Transfered",
        // },
      ],
    });
  };

  render() {
    // destruct your decision maker under render function
    const { teams } = this.state;
    //give style as object under render function
    let buttonStyle = {
      padding: "10px 20px",
      border: "none",
      backgroundColor: "red",
      color: "white",
      borderRadius: "10px",
      margin: "-5px auto 15px auto",
    };
    return (
      <div>
        <Jumbotron>
          {/* define your event function as attribute to related element */}
          <button style={buttonStyle} onClick={this.myClickEvent}>
            Switch Team
          </button>
          <List
            // create turnery operator for 2 condition
            myplayers={teams ? this.state.myplayers : this.state.myplayers1}
          ></List>
        </Jumbotron>
      </div>
    );
  }
}

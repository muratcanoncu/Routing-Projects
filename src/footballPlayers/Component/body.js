import React, { Component } from "react";
import Comment from "./comments";
import { Card, Button } from "react-bootstrap";
//if we are planning to define PropTypes,we need to import it first
import PropTypes from "prop-types";
class body extends Component {
  //! Changing State properties value
  state = {
    isVisible: true,
    name: "Murat",
    surname: "Öncü",
  };
  // Function can have any name
  myClickEvent = (e) => {
    // e.target.style.background = "white";
    // e.target.style.color = "#007bff";
    this.setState({
      isVisible: !this.state.isVisible,
      name: "Murat",
      surname: "Öncü",
    });
  };

  //! Default Props(only inside the class component)------------------------
  // if there is no value for props inside of app.js,static value appears
  //? static defaultProps = {
  //   name: "No Info",
  //   team: "No Info",
  //   goals: "No Info",
  //   maincomment: "No Info",
  // };

  render() {
    //! Destructuring prop names---------------
    // its not mandatory
    const { name, team, goals } = this.props;
    const { isVisible } = this.state;

    return (
      <div>
        <Card style={{ width: "20rem", margin: "30px 40px" }}>
          {/* Card Body */}
          <Card.Body>
            {/* Player Name as Title */}
            <Card.Title
              className="font-weight-bolder"
              style={
                isVisible
                  ? {
                      backgroundColor: "#007bff",
                      color: "white",
                      padding: "10px 20px",
                    }
                  : {
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "15px",
                    }
              }
            >
              {name}
            </Card.Title>
            {/* Card Body */}
            {isVisible ? (
              <Card.Text>
                Team: {team}
                <br />
                Goals: {goals}
              </Card.Text>
            ) : null}
            {/*Define Click event ->"onClick"<- function inside the button */}
            {isVisible ? (
              <Button variant="primary" onClick={this.myClickEvent}>
                Transfer
              </Button>
            ) : (
              <Button variant="primary" onClick={this.myClickEvent}>
                Release
              </Button>
            )}

            {isVisible ? (
              <Comment social={this.props.maincomment}></Comment>
            ) : null}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

//! PropTypes----------------------------------
// for defining type of props(only warning for developers)
//? body.propTypes = {
//   name: PropTypes.string.isRequired,
//   team: PropTypes.string.isRequired,
//   goals: PropTypes.number.isRequired,
// };
//!"FileName".defaultProps-----------------------------
//after component body(Valid for both type of component)
body.defaultProps = {
  name: "No Info",
  team: "No Info",
  goals: "No Info",
};

export default body;

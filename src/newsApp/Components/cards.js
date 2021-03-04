import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export class cards extends Component {
  render() {
    const { image, title, content, myIndex, resource } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem", height: "40rem" }}>
          <Card.Img variant="top" src={image} className="mb-3 h-25" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <p>
              Resource: <b>{resource}</b>{" "}
            </p>
            <Button
              onClick={() => {
                this.props.selector(myIndex);
              }}
              variant="primary"
            >
              Read More
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default cards;

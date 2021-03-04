import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export class mainCard extends Component {
  render() {
    const { image, title, content, link, resource } = this.props;
    return (
      <div>
        <Card style={{ width: "46rem", height: "40rem" }}>
          <Card.Img variant="top" src={image} className="mb-3" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <p>
              Resource: <b>{resource}</b>
            </p>
            <Button variant="primary">
              <a href={link} className="linkButton">
                {" "}
                Read More
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default mainCard;

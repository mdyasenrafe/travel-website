import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const SingleDestination = (props) => {
  const { name, image, description, price, _id } = props.data;

  return (
    <Col>
      <Card className="h-100 border-0 shadow-lg p-3">
        <Card.Img height="220" variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <span>Name :</span>
            <span className="text-danger fw-bolder"> {name}</span>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="fw-bolder">
            <span>Price :</span> <span className="text-danger"> ${price}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="border-0">
          <Link to={`/${_id}/place-order`}>
            <button className="btn btn-danger">Book Now</button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleDestination;

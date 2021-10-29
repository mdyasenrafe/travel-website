import React from "react";
import { Card, Col } from "react-bootstrap";

const AllOrder = (props) => {
  const { image, name, email, date, from, to, price, status } = props.data;
  const handleDelete = props.handleDelete;
  const handleApporve = props.handleApporve;
  return (
    <Col>
      <Card className="border-0 shadow-lg p-3">
        <Card.Img height="220" variant="top" src={image} />
        <Card.Body>
          <Card.Title as={"h6"}>
            <span>User-Name :</span>
            <span className="text-danger fw-bold">{name}</span>
          </Card.Title>
          <Card.Text>
            <span>Email : </span>
            <span className="text-danger fw-bold">{email}</span>
          </Card.Text>
          <Card.Text>
            <span>Date : </span>
            <span className="text-danger fw-bold">{date}</span>
          </Card.Text>
          <Card.Text>
            <span>From : </span>
            <span className="text-danger fw-bold">{from}</span>
          </Card.Text>
          <Card.Text>
            <span>To : </span>
            <span className="text-danger fw-bold">{to}</span>
          </Card.Text>
          <Card.Text>
            <span>Price : </span>
            <span className="text-danger fw-bold">${price}</span>
          </Card.Text>
          <Card.Text>
            <span>Status : </span>
            <span className="text-danger fw-bold">{status}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 text-center bg-light">
          <button
            onClick={() => handleDelete(props.data)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => handleApporve(props.data)}
            className="btn btn-primary mx-2"
          >
            Apporve
          </button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default AllOrder;

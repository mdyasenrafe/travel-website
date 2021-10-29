import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import UseOrders from "../../../Hooks/UseOrders";
import swal from "sweetalert";

const MyOrders = () => {
  const { myOrders, setMyorders, loading } = UseOrders();
  const override = css`
    display: block;
    margin: 0 auto;
    color: red;
  `;
  const handleDelete = (info) => {
    swal({
      title: "Are you sure want to Delete",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/orders/${info._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const deleteDestinations = myOrders.filter(
                (data) => data._id !== info._id
              );
              setMyorders(deleteDestinations);
              swal("Your Destination is Delete!!", {
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <section className="py-5">
      <Container>
        <Col>
          <div className="text-center pb-5">
            <h2 className="fw-bold">My Orders</h2>
          </div>
          <HashLoader loading={loading} css={override} size={150} />

          <Row xs={1} md={2} lg={3}>
            {myOrders.map((data) => (
              <Col key={data._id}>
                <Card className="border-0 shadow-lg p-3">
                  <Card.Img height="220" variant="top" src={data.image} />
                  <Card.Body>
                    <Card.Title as={"h6"}>
                      <span>User-Name :</span>
                      <span className="text-danger fw-bold">{data.name}</span>
                    </Card.Title>
                    <Card.Text>
                      <span>Email : </span>
                      <span className="text-danger fw-bold">{data.email}</span>
                    </Card.Text>
                    <Card.Text>
                      <span>Date : </span>
                      <span className="text-danger fw-bold">{data.date}</span>
                    </Card.Text>
                    <Card.Text>
                      <span>From : </span>
                      <span className="text-danger fw-bold">{data.from}</span>
                    </Card.Text>
                    <Card.Text>
                      <span>To : </span>
                      <span className="text-danger fw-bold">{data.to}</span>
                    </Card.Text>
                    <Card.Text>
                      <span>Price : </span>
                      <span className="text-danger fw-bold">${data.price}</span>
                    </Card.Text>
                    <Card.Text>
                      <span>Status : </span>
                      <span className="text-danger fw-bold">{data.status}</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="border-0 text-center bg-light">
                    <button
                      onClick={() => handleDelete(data)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default MyOrders;

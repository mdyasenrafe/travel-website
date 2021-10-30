import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import { Col, Container, Row } from "react-bootstrap";
import swal from "sweetalert";
import UseOrders from "../../../Hooks/UseOrders";
import AllOrder from "../AllOrder/AllOrder";
import axios from "axios";
import UseAuth from "../../../Hooks/UseAuth";

const AllOrders = () => {
  const { user } = UseAuth();
  const { orders, setOrders, loading } = UseOrders();
  let [color, setColor] = useState("#FF0000");
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
        fetch(`https://ancient-forest-11611.herokuapp.com/orders/${info._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const deleteDestinations = orders.filter(
                (data) => data._id !== info._id
              );
              setOrders(deleteDestinations);
              swal("Your Destination is Delete!!", {
                icon: "success",
              });
            }
          });
      }
    });
  };

  //   handle Apporve
  const handleApporve = (info) => {
    info["status"] = "approved";
    axios.put(`http://localhost:5000/orders/${info._id}`, info).then((res) => {
      if (res.data.acknowledged) {
        swal({
          text: `${user.displayName} order has been Approved`,
          icon: "success",
        }).then((willDelete) => {
          if (willDelete) {
            window.location.reload();
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
            <h2 className="fw-bold">Manage All Orders</h2>
          </div>
          <HashLoader
            color={color}
            loading={loading}
            css={override}
            size={150}
          />
          <Row xs={1} md={2} lg={3}>
            {orders.map((data) => (
              <AllOrder
                data={data}
                key={data._id}
                handleDelete={handleDelete}
                handleApporve={handleApporve}
              ></AllOrder>
            ))}
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default AllOrders;

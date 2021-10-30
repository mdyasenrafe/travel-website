import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Container, Row } from "react-bootstrap";
import HashLoader from "react-spinners/HashLoader";
import SingleDestination from "../SingleDestination/SingleDestination";
import UseDestinations from "../../../Hooks/UseDestinations";
import { Link } from "react-router-dom";

const Destinations = () => {
  const { destinations, loading } = UseDestinations();
  let [color, setColor] = useState("#FF0000");
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <section className="py-5">
      <Container>
        <div className="text-center pb-5">
          <h2 className="fw-bold">Our Destinations</h2>
        </div>
        <HashLoader color={color} loading={loading} css={override} size={150} />
        <Row xs={1} md={2} lg={3} className="g-4">
          {destinations.map((data) => (
            <SingleDestination key={data._id} data={data}></SingleDestination>
          ))}
        </Row>
        <Link to="/destinations">
          <div className="text-center mt-5">
            <button className="btn btn-danger">See More</button>
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default Destinations;

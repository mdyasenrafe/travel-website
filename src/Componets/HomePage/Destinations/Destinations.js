import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleDestination from "../SingleDestination/SingleDestination";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <section>
      <Container>
        <div className="text-center py-5">
          <h2 className="fw-bold">Our Destinations</h2>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {destinations.map((data) => (
            <SingleDestination data={data}></SingleDestination>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Destinations;

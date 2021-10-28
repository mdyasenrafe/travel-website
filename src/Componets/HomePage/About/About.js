import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center py-4">
          <h2 className="fw-bold">About Us</h2>
        </div>
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <div className="mt-4 mt-md-0 mx-4 mx-md-0">
              <img
                className="w-100"
                src="https://i.ibb.co/N2zXck3/Customer-loyalty-and-technical-support-web-icons-set-Clients-hotline-Website-information-About-us-me.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="mt-4 mt-md-0 mx-4 mx-md-0">
              <p>
                TouristGang is the country’s first and leading online travel
                aggregator. Initially started with the name Travel Booking BD,
                we had a dream to make travel easier for people. And that is
                what we did since our inception. And now with our new,
                innovative, easy to use app, travel services are on your palm.
                The dynamic app lets you book your flight, find your perfect
                holiday from our thousands of holiday packages around the globe.
                TouristGang is revolutionizing the way we book travel services.
                With TouristGang’s website and mobile app, booking your flight,
                hotel or holiday become more fun that you would think.With
                exciting games and real rewards like free trips and air ticket
                makes TouristGang more fun to use! You can also win TripCoin by
                playing games and booking service from TouristGang, that you can
                use to avail discount.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

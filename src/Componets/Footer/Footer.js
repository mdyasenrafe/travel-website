import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black p-5 text-light">
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <div>
              <Link to="/">
                <img
                  className="cursor-pointor mb-4"
                  height="40"
                  src="https://i.ibb.co/C524pyH/logo3.png"
                  alt=""
                />
              </Link>
              <p>
                TouristGang is the country’s first and leading online travel
                aggregator. Initially started with the name Travel Booking BD,
                we had a dream to make travel easier for people. And that is
                what we did since our inception. And now with our new,
                innovative, easy to use app, travel services are on your palm.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="pt-4 pt-md-0">
              <h3>Additional Links</h3>
              <ul className="list-unstyled">
                <li>
                  <Link className="footer-nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="footer-nav-link" to="/destinations">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link className="footer-nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="pt-4 pt-md-0">
              <h3>Contact us</h3>
              <div className="d-flex align-items-center">
                <p className="fs-3">
                  <i className="fas fa-phone-square"></i>
                </p>
                <p className="px-3">00115874556</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="fs-3">
                  <i className="far fa-clock"></i>
                </p>
                <p className="px-3">24 Hours Open</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="fs-3">
                  <i className="far fa-envelope"></i>
                </p>
                <p className="px-3">touristgang@gmail.com</p>
              </div>
            </div>
          </Col>
          <div className="text-center d-block d-md-flex flex-row-reverse justify-content-between align-items-center">
            <div>
              <i className="fab fa-facebook mx-3 cursor-pointor fs-4 pt-3 pt-3"></i>
              <i className="fab fa-youtube mx-3 cursor-pointor fs-4 pt-3 pt-3"></i>
              <i className="fab fa-twitter mx-3 cursor-pointor fs-4 pt-3 pt-3"></i>
              <i className="fab fa-linkedin-in mx-3 cursor-pointor fs-4 pt-3 pt-3"></i>
            </div>
            <div>
              <p className="pt-4">
                © copyright 2021 Tourist Gang - All Rights Reserved
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

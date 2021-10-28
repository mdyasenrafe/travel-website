import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center py-4">
          <h2 className="fw-bold">Contact Us</h2>
        </div>
        <Row className="align-items-center mx-4 mx-md-0 flex-column-reverse flex-md-row">
          <Col sm={12} md={6}>
            <div>
              <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel
                  className="mb-3"
                  controlId="floatingInput"
                  label="Email"
                >
                  <Form.Control type="email" placeholder="email" />
                </FloatingLabel>
                <FloatingLabel
                  className="mb-3"
                  controlId="floatingInput"
                  label="Subject"
                >
                  <Form.Control type="email" placeholder="email" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Message">
                  <Form.Control
                    as="textarea"
                    placeholder="message"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <input
                  className="btn btn-outline-danger my-4 w-100"
                  type="submit"
                />
              </Form>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img
              className="w-100 pb-4"
              src="https://i.ibb.co/rFfYTVr/Contact-us-cuate.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

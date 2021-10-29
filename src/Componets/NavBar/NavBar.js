import React, { Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";

const NavBar = () => {
  const { user, logOut } = UseAuth();
  // console.log(logOut);
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img height="30" src="https://i.ibb.co/rpXYkHF/logo.png" alt="" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center d-flex">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/destinations">
              <Nav.Link>destinations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            {user.displayName ? (
              <>
                <LinkContainer to="/my-orders">
                  <Nav.Link>My Orders</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/all-orders">
                  <Nav.Link>All Orders</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/add-destinations">
                  <Nav.Link>Add Destinations</Nav.Link>
                </LinkContainer>
                <span>{user.displayName}</span>
                <button className="btn btn-danger" onClick={logOut}>
                  Logout
                </button>
              </>
            ) : (
              <LinkContainer to="/login">
                <button className="btn btn-danger">Log in</button>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

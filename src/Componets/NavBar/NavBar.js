import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";
import "./NavBar.css";
import UseOrders from "../../Hooks/UseOrders";

const NavBar = () => {
  const { user, logOut } = UseAuth();
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
                <NavDropdown
                  className="text-center"
                  title="Admin Panel"
                  id="basic-nav-dropdown"
                >
                  <LinkContainer to="/my-orders">
                    <NavDropdown.Item>My Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/all-orders">
                    <NavDropdown.Item>Manage All Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/add-destinations">
                    <NavDropdown.Item>Add Destinations</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <span className="mx-2">{user.displayName} </span>
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

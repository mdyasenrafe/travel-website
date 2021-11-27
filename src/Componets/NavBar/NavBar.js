import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import "./NavBar.css";
const NavBar = () => {
  const { user, logOut } = UseAuth();
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <img height="30" src="https://i.ibb.co/rpXYkHF/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center d-flex">
            <Nav.Link to="/home" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to="/about" as={Link}>
              About
            </Nav.Link>
            <Nav.Link to="/destinations" as={Link}>
              destinations
            </Nav.Link>
            <Nav.Link to="/contact" as={Link}>
              Contact
            </Nav.Link>
            {user.displayName ? (
              <>
                <NavDropdown
                  className="text-center"
                  title="Dashboard"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Nav.Link to="/my-orders" as={Link}>
                      My Orders
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/all-orders">
                      Manage All Orders{" "}
                    </Nav.Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    {" "}
                    <Nav.Link to="/add-destinations" as={Link}>
                      Add Destinations{" "}
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <span className="mx-2">{user.displayName} </span>
                <button className="btn btn-danger" onClick={logOut}>
                  Logout
                </button>
              </>
            ) : (
              <Nav.Link to="/login" as={Link}>
                <button className="btn btn-danger">Log in</button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user } = useFirebase();
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="header"
      >
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <img
              className="header-logo"
              src="https://i.ibb.co/2vL4tSR/logo0-removebg-preview.png"
              alt=""
            />
            Time<span className="m">M</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto ">
              <Nav.Link as={HashLink} to="/home" className="header-link">
                Home
              </Nav.Link>

              <Nav.Link as={HashLink} to="/explore" className="header-link">
                Explore
              </Nav.Link>

              {user?.email ? (
                // <button className="das-btn" onClick={deshboard}>
                //   <Nav.Link
                //     as={HashLink}
                //     to="/dashboard"
                //     className="header-link"
                //   >
                //     Dashboard
                //   </Nav.Link>
                // </button>

                <Nav.Link as={HashLink} to="/dashboard" className="header-link">
                  Dashboard
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={HashLink}
                  className="header-login-btn"
                  to="/login"
                >
                  <i className="fas fa-sign-in-alt"> Login</i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

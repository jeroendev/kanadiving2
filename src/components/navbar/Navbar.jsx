import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoImage from "../../assets/kanadiving-logo.png";
import "./navbar.css";

function NavbarKana() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="custom__navbar navbar-dark dropdown-menu-dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img className="navbar__img" src={logoImage} alt="KanaDiving logo" />
          KanaDiving
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#courses">Opleidingen</Nav.Link>
            <Nav.Link href="#club">Duikclub</Nav.Link>
            <Nav.Link href="#team">Ons team</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#promoties">PROMOTIES</Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarKana;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoImage from "../../assets/kanadiving-logo.png";
import "./navbar.css";

function NavbarKana() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom__navbar navbar-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img className="navbar__img" src={logoImage} alt="KanaDiving logo" />
          KanaDiving
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#team">Ons team</Nav.Link>
            <Nav.Link href="#club">Duikclub</Nav.Link>
            <NavDropdown title="Opleidingen" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#beginner">
                Beginnerscursussen
              </NavDropdown.Item>
              <NavDropdown.Item href="#advanced">
                Vervolgcursussen
              </NavDropdown.Item>
              <NavDropdown.Item href="#speciality">
                Speciality's
              </NavDropdown.Item>
              <NavDropdown.Item href="#tec">TEC</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#gopro">Go Professional</NavDropdown.Item>
            </NavDropdown>
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

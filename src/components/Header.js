import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import '../App.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="fw-bolder navbar-brand" >
          <img
            alt="Sovelluksen logo"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block me-3 rounded-circle"
          />
          PomppuVuoro
          <div className="small-text fw-light">
            - Trampoliinivaraukset helposti! -
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
              Etusivu
            </Nav.Link>
            <Nav.Link as={Link} to="/jumping-history" className="nav-link">
              Pomppuhistoria
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              Meistä
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
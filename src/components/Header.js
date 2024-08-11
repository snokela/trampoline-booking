import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from '../images/logo.png';
import '../App.css';

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="fw-bolder navbar-brand" >
          <img
          alt="Sovelluksen logo"
          src={logo}
          width="50"
          height="50"
          className="d-inline-block  me-3 rounded-circle"
          />
          PomppuVuoro
          <div className="small-text fw-light">
            - Trampoliinivaraukset helposti! -
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
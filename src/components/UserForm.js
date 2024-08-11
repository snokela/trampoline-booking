import React from "react";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';

const UserForm = () => {
  return (
      <Container className="pt-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <Form className="userform pt-4">
              <h5>Pomppijan valinta</h5>
              <p>Kirjoita nimesi tai valitse nimesi alla olevasta listasta.</p>
              <Row className="justify-content-center">
                <Col md={4} >
                <Form.Label>Uusi pomppija</Form.Label>
                  <Form.Control size="sm" placeholder="Nimi tai nimimerkki" />
                </Col>
                <Col  md={4} >
                <Form.Label>Vanha pomppija</Form.Label>
                  <Form.Select size="sm" >
                  <option>Valitse nimesi:</option>
                    <option value="1">Inkku</option>
                    <option value="2">Marsu</option>
                    <option value="3">äippä</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
  );
}

export default UserForm;
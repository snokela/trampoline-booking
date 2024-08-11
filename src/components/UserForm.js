import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../App.css';

const UserForm = () => {
  return (
      <Container>
            <Form className="userform pt-4">
              <h5 className="fw-bolder pb-3" >Pomppijan valinta</h5>
              <Row className="justify-content-center">
                <Col  md={3} >
                <Form.Label>Valitse nimesi alla olevasta listasta:</Form.Label>
                  <Form.Select size="sm" >
                    <option></option>
                    <option value="1">Inkku</option>
                    <option value="2">Marsu</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="justify-content-center mt-3">
                <Col md={3}>
                  <Button className="start-button" >
                    Aloita hyppiminen
                  </Button>
                </Col>
              </Row>
            </Form>
      </Container>
  );
}

export default UserForm;


// {/* <Container>
// {/* <Row className="justify-content-center"> */}
//   {/* <Col md={8}> */}
//     <Form className="userform pt-4">
//       <h5 className="fw-bolder pb-3" >Pomppijan valinta</h5>
//       {/* <p>Valitse nimesi alla olevasta listasta.</p> */}
//       <Row className="justify-content-center">
//         {/* <Col md={4} >
//         <Form.Label>Uusi pomppija</Form.Label>
//           <Form.Control size="sm" placeholder="Nimi tai nimimerkki" />
//         </Col> */}
//         <Col  md={3} >
//         <Form.Label>Valitse nimesi alla olevasta listasta:</Form.Label>
//           <Form.Select size="sm" >
//             <option></option>
//             <option value="1">Inkku</option>
//             <option value="2">Marsu</option>
//           </Form.Select>
//         </Col>
//       </Row>
//     </Form>
//   {/* </Col> */}
// {/* </Row> */}
// </Container>
// );
// } */}
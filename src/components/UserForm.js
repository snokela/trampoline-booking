import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../App.css';

const UserForm = ( { jumpers, isJumping, onStartJumping } ) => {
  // valitun pomppijan tilanhallinta ja tilan päivittäminen pomppijaa valitessa
  const [selectedJumper, setSelectedJumper] = useState('');

  const handleSelectChange = (event) => {
    setSelectedJumper(event.target.value);
    console.log('valittu jumper Id: ' + event.target.value);
  }

  const handleStartClick = () => {
    console.log('Aloita pomppinen nappia painettu. Valitun pomppijan ID: ' + selectedJumper);
    if (selectedJumper) {
      onStartJumping(Number(selectedJumper));
    }
  }

  // renderöidään optionsit dropdown listaan pomppijoista
  const renderOptions = () => {
    return jumpers.map(jumper => (
      <option key={jumper.id} value={jumper.id}>{jumper.name}</option>
    ));
  }

  return (
      <Container>
            <Form className="userform pt-4">
              <h5 className="fw-bolder pb-3" >Pomppijan valinta</h5>
              <Row className="justify-content-center">
                <Col  md={3} >
                <Form.Label>Valitse nimesi alla olevasta listasta:</Form.Label>
                  <Form.Select size="sm" value={selectedJumper} onChange={handleSelectChange} >
                    <option value="">Valitse pomppija</option>
                   { renderOptions() }
                  </Form.Select>
                </Col>
              </Row>
              <Row className="justify-content-center mt-3">
                <Col md={3}>
                  <Button className="button" onClick={handleStartClick} disabled={isJumping || !selectedJumper}>
                    Aloita pomppiminen
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
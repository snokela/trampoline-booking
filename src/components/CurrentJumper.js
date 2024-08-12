import React from "react";
import { Button, Card, CardBody, Container} from 'react-bootstrap';
import '../App.css';
import inkkuImage from '../images/inkku.png';

const CurrentJumper = () => {
  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card className="current-jumper">
        <Card.Img variant="top" src={inkkuImage} />
        <CardBody>
          <Card.Title>Nyt pomppii <span className="fw-bolder fst-italic">Marsu</span></Card.Title>
          <Card.Text>
            Olet nyt pomppinut <span className="fw-bolder fst-italic">8</span> minuuttia ja <span className="fw-bolder fst-italic">26</span> sekuntia.
          </Card.Text>
          <Button className="button">
            Lopeta pomppiminen
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}

export default CurrentJumper;
import React from "react";
import { Button, Card, CardBody, Container} from 'react-bootstrap';
import '../App.css';
import formatTime from "../utilis/formatTime";

const CurrentJumper = ( {currentJumper, onStopJumping, jumpTime, jumpStopped } ) => {
  const { minutes, secs } = formatTime(jumpTime);

  if (!currentJumper) return null;

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card className="current-jumper">
        <Card.Img variant="top" src={currentJumper.imageUrl} />
        <CardBody>
          {jumpStopped ? (
          <>
            <Card.Title><span className="fw-bolder fst-italic">{currentJumper.name} </span>lopetti nyt pomppimisen!</Card.Title>
            <Card.Text>
              Pomppimisaikasi oli <span className="fw-bolder fst-italic">{minutes}</span> minuuttia ja <span className="fw-bolder fst-italic">{secs}</span> sekuntia.
            </Card.Text>
          </>
        ) : (
          <>
            <Card.Title>Nyt pomppii <span className="fw-bolder fst-italic">{currentJumper.name}</span></Card.Title>
            <Card.Text>
              Olet nyt pomppinut <span className="fw-bolder fst-italic">{minutes}</span> minuuttia ja <span className="fw-bolder fst-italic">{secs}</span> sekuntia.
            </Card.Text>
            <Button className="button" onClick={onStopJumping}>
              Lopeta pomppiminen
            </Button>
          </>
         )}
        </CardBody>
      </Card>
    </Container>
  );
}

export default CurrentJumper;
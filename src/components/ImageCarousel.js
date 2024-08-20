import { Carousel } from "react-bootstrap";
import trampoline1 from '../images/trampoline1.png'
import trampoline2 from '../images/trampoline2.png'
import trampoline3 from '../images/trampoline3.png'
import trampoline4 from '../images/trampoline4.png'
import '../App.css';

const ImageCarousel = () => {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={trampoline1}
          alt="First picture"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={trampoline2}
          alt="Second picture"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={trampoline3}
          alt="Third picture"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={trampoline4}
          alt="Fourth picture"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;

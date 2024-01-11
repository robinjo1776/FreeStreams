import React from "react";
import { Carousel, Col, Row, Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import sweeny from "../assets/photos/Hero/sweeny.jpg";
import lesmis from "../assets/photos/Hero/lesmis.jpg";
import maleficent from "../assets/photos/Hero/maleficent.jpg";
import parasite from "../assets/photos/Hero/parasite.jpeg";
import goodwill from "../assets/photos/Hero/goodwillhunting.jpg";

const Hero = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={parasite}
                  alt="Parasite"
                  width={400}
                  height={680}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={goodwill}
                  alt="Good Will Hunting"
                  width={400}
                  height={680}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={lesmis}
                  alt="Les Miserables"
                  width={400}
                  height={680}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={maleficent}
                  alt="Maleficent"
                  width={400}
                  height={680}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sweeny}
                  alt="Sweeny Todd"
                  width={400}
                  height={680}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

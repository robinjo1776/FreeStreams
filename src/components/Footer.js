import React from "react"
import { Row, Col, ListGroup, Container, Nav } from "react-bootstrap"

const Footer = () => {
  return (
    <div>
      <footer className="justify-content-center">
        <Container>
          <Row xs={3} sm={3} md={3} lg={3}>
            <Col>
              <h5>
                <u>Watch</u>
              </h5>
              <ListGroup>
                <ListGroup.Item>
                  <Nav.Link href="#">Spotlight</Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="/movies">Movies</Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="/tv">TV</Nav.Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h5>
                <u>My Account</u>
              </h5>
              <ListGroup>
                <ListGroup.Item>
                  <Nav.Link href="#">My Video</Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#">Account</Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#">Settings</Nav.Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h5>
                <u>Help</u>
              </h5>
              <ListGroup>
                <ListGroup.Item>
                  <Nav.Link href="#">About Us</Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#">Devices</Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#">Support</Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#">Forums</Nav.Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Nav.Link href="#">Contact Us</Nav.Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <div className="footer-logos">
                <a className="btn btn-outline-dark" href="/#">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a className="btn btn-outline-dark" href="/#">
                  <i className="fab fa-twitter"></i>
                </a>

                <a className="btn btn-outline-dark" href="/#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-dark" href="/#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer

import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
const FeaturedTV = ({ tvShows }) => {
  return (
    <div>
      <Container>
        <h3 id="featuredTV-title">Featured TV Shows</h3>
        <Row xs={2} md={3} lg={6}>
          {Object.values(tvShows).map((show) => (
            <Col>
              <Link to={`/tv/${show.id}`}>
                <img
                  src={show.poster}
                  alt={show.title}
                  className="img-thumbnail"
                  width={200}
                  style={{ marginBottom: "15px" }}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default FeaturedTV

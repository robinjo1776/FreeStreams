import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
const FeaturedMovies = ({ movies }) => {
  return (
    <div>
      <Container>
        <h3 id="featuredmovie-title">Featured Films</h3>
        <Row xs={2} md={3} lg={6}>
          {Object.values(movies).map((movie) => (
            <Col>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={movie.poster}
                  alt={movie.title}
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

export default FeaturedMovies

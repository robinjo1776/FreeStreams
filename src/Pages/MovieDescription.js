import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Col, Row, Container, Button } from "react-bootstrap"
import AuthenticatedHeader from "../components/AuthenticatedHeader"

const MovieDescription = ({ setSearchedVideo }) => {
  const [movie, setMovie] = useState([])
  const [userloggedIn, setUserLoggedIn] = useState(null)
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("userloggedIn")

    if (loggedInUser) {
      setUserLoggedIn(loggedInUser)
    }
  }, [])

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://cjv805-backend.herokuapp.com/videos/${id}`)
      .then((returnedData) => {
        return returnedData.json()
      })
      .then((data) => {
        //console.log(data.body[0])
        setMovie(data.body[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
      {userloggedIn ? (
        <AuthenticatedHeader setSearchedVideo={setSearchedVideo} />
      ) : (
        <Header setSearchedVideo={setSearchedVideo} />
      )}
      <div className="details-page">
        <Container style={{ paddingBottom: "65px" }}>
          <Row xs={1} sm={1} md={1} lg={2} xl={2}>
            <Col>
              <img
                className="movie-poster"
                src={movie.poster}
                alt={movie.title}
              />
            </Col>
            <Col>
              <p className="title" style={{ color: "#A0BCF5" }}>
                {movie.title}&emsp;
                <span className="text-info">({movie.year})</span>
              </p>
              <p className="genres">Genres: {movie.genres}</p>
              <p className="genres">Runtime: {movie.runtime}</p>
              <p style={{ fontSize: "25px", color: "#A0BCF5" }}>Overview</p>
              <p className="description">{movie.description}</p>

              <Button variant="primary" style={{ marginTop: "20px" }}>
                Rent: {movie.rentPrice}
              </Button>
              <Button variant="primary" style={{ marginTop: "20px" }}>
                Buy Now: {movie.buyPrice}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default MovieDescription

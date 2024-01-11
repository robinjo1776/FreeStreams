import React from "react"
import { useState, useEffect } from "react"
import AuthenticatedHeader from "../components/AuthenticatedHeader"
import Header from "../components/Header"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const SearchResult = (props) => {
  const [userloggedIn, setUserLoggedIn] = useState()

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("userloggedIn")
    // const returnedMovie = JSON.parse(sessionStorage.movie)
    if (loggedInUser) {
      setUserLoggedIn(loggedInUser)
    }
  }, [])

  return (
    <div className="list-movies">
      {userloggedIn ? (
        <AuthenticatedHeader setSearchedVideo={props.setSearchedVideo} />
      ) : (
        <Header setSearchedVideo={props.setSearchedVideo} />
      )}
      <Container className="text-center">
        <h3>Results</h3>
        <Row xs={3} md={4} lg={5}>
          {props.searchedVideo.map((movie) => (
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
              <p>{movie.title}</p>
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <br />
        <br />
      </Container>
      <Footer />
    </div>
  )
}

export default SearchResult

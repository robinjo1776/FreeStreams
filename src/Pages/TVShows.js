import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import AuthenticatedHeader from "../components/AuthenticatedHeader"
import { useState, useEffect } from "react"
const TVShows = ({ shows, setSearchedVideo }) => {
  const [userloggedIn, setUserLoggedIn] = useState(null)
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("userloggedIn")

    if (loggedInUser) {
      setUserLoggedIn(loggedInUser)
    }
  }, [])
  return (
    <div className="list-movies">
      {userloggedIn ? (
        <AuthenticatedHeader setSearchedVideo={setSearchedVideo} />
      ) : (
        <Header setSearchedVideo={setSearchedVideo} />
      )}
      <Container className="text-center">
        <h3>All Shows</h3>
        <Row xs={3} md={4} lg={5}>
          {shows.map((show) => (
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
              <p>{show.title}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default TVShows

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Col, Row, Container, Button } from "react-bootstrap"
import AuthenticatedHeader from "../components/AuthenticatedHeader"

const ShowDescription = ({ setSearchedVideo }) => {
  const [show, setTVShow] = useState([])
  const [userloggedIn, setUserLoggedIn] = useState(null)
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("userloggedIn")

    if (loggedInUser) {
      setUserLoggedIn(loggedInUser)
    }
  }, [])

  const { id } = useParams()

  //console.log(id + " This is the ID")

  useEffect(() => {
    fetch(`https://cjv805-backend.herokuapp.com/videos/${id}`)
      .then((returnedData) => {
        return returnedData.json()
      })
      .then((data) => {
        //console.log(data.body[0])
        setTVShow(data.body[0])
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
        <Container>
          <Row xs={1} sm={1} md={1} lg={2} xl={2}>
            <Col>
              <img
                className="movie-poster"
                src={show.poster}
                alt={show.title}
              />
            </Col>
            <Col>
              <p className="title" style={{ color: "#A0BCF5" }}>
                {show.title}&emsp;
                <span className="text-info">({show.year})</span>
              </p>

              <p className="genres">Genres: {show.genres}</p>
              <p style={{ fontSize: "25px", color: "#A0BCF5" }}>Overview</p>
              <p className="description">{show.description}</p>
              {/* <p style={{ fontSize: "20px", color: "#A0BCF5" }}>
                Number of Seasons
              </p>
              <p className="seasons">{show.seasons}</p> */}
              <p style={{ fontSize: "20px", color: "#A0BCF5" }}>
                Number of Episodes
              </p>
              <p className="episodes">{show.runtime}</p>

              <Button variant="primary" style={{ marginTop: "20px" }}>
                Rent: {show.rentPrice}
              </Button>
              <Button variant="primary" style={{ marginTop: "20px" }}>
                Buy Now: {show.buyPrice}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default ShowDescription

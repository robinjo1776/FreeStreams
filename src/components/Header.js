import React from "react"
import logo from "../assets/photos/Logo/Free Streams.jpg"
import { Container, Navbar, Nav, Form } from "react-bootstrap"
// import SearchResult from "../Pages/SearchResult"
import { useNavigate } from "react-router-dom"

const Header = (props) => {
  let navigate = useNavigate()

  const searchForm = (e) => {
    e.preventDefault()

    if (e.target[0].value.length > 0) {
      fetch(
        "https://cjv805-backend.herokuapp.com/videos?title=" + e.target[0].value
      )
        .then((returnedData) => {
          return returnedData.json()
        })
        .then((data) => {
          //console.log(data.body[0])
          props.setSearchedVideo(data.body)
        })
    } else {
      console.log("title is empty")
    }

    navigate("/videos")
    e.target.reset()
  }

  return (
    <div className="nav-bar">
      <Navbar expand="lg">
        <Container fluid>
          <img className="logo" src={logo} alt="Logo" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/tv">TV Shows</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Form className="d-flex" onSubmit={searchForm}>
                <input
                  type="text"
                  placeholder="Search"
                  name="title"
                  id="title"
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

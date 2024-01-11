import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container, Form, Button, Col, Row } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = ({ setSearchedVideo }) => {
  const [message, setMessage] = useState([])

  window.sessionStorage.getItem("userloggedIn")

  window.sessionStorage.getItem("username")

  let navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()
    const data = new FormData(e.target),
      dataObj = Object.fromEntries(data.entries())

    fetch("https://cjv805-backend.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    })
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        // console.log(data.message)
        setMessage(data.message)
        if (!data.message.includes("Incorrect Credentials")) {
          window.sessionStorage.setItem("userloggedIn", true)
          window.sessionStorage.setItem(
            "username",
            data.message.split(" ").pop()
          )
          navigate("/")
          // console.log(window.sessionStorage.getItem("userloggedIn"))
          // console.log(window.sessionStorage.getItem("username"))
        }
      })
      .catch((err) => {
        console.log(err.message)
      })

    e.target.reset()
  }

  return (
    <div>
      <Header setSearchedVideo={setSearchedVideo} />
      <div className="login-form">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-12 col-sm-9 col-lg-4">
              <Form action="/" method="POST" onSubmit={submitForm}>
                <h5>
                  <b>
                    <u>Login</u>
                  </b>
                </h5>
                <h4>{message}</h4>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                  />
                  <br />
                  <a href="#!">Forgot your password?</a>
                </Form.Group>
                <Form.Group>
                  <Button type="submit">
                    <b>Login</b>
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Login

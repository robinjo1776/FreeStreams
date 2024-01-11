import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container, Form, Button, Col, Row } from "react-bootstrap"
import { useState } from "react"

const Registration = ({ setSearchedVideo }) => {
  const [message, setMessage] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    const data = new FormData(e.target),
      dataObj = Object.fromEntries(data.entries())
    console.log(JSON.stringify(dataObj))

    fetch("https://cjv805-backend.herokuapp.com/register", {
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
      })
      .catch((err) => {
        console.log(err.message)
      })

    e.target.reset()
  }

  return (
    <div>
      <Header setSearchedVideo={setSearchedVideo} />
      <div className="register-form">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-12 col-sm-9 col-lg-5">
              <Form action="/" method="POST" onSubmit={submitForm}>
                <h5>
                  <b>
                    <u>Registration</u>
                  </b>
                </h5>
                <h4>{message}</h4>
                <Form.Group className="mb-1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="FirstName"
                    name="firstName"
                    id="firstName"
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="LastName"
                    name="lastName"
                    id="lastName"
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="userName"
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                  />
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                  />
                </Form.Group>
                <Form.Group>
                  <Button className="mt-2" type="submit">
                    <b>Register</b>
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

export default Registration

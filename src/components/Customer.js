import React from "react"
import { useState } from "react"

const Customer = ({ username }) => {
  const [userid, setUserID] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()

  fetch("https://cjv805-backend.herokuapp.com/users")
    .then((result) => {
      return result.json()
    })
    .then((data) => {
      data.body.forEach((user) => {
        if (user.username === username) {
          setUserID(user.id)
          setFirstName(user.firstName)
          setLastName(user.lastName)
          setEmail(user.email)
        }
      })
    })

  return (
    <div>
      <p>User ID: {userid}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default Customer

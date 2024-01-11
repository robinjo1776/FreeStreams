import React from "react"
import { useState, useEffect } from "react"
import Customer from "../components/Customer"
import AuthenticatedHeader from "../components/AuthenticatedHeader"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Dashboard = (props) => {
  const [userloggedIn, setUserLoggedIn] = useState()
  const [username, setUsername] = useState()

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("userloggedIn")
    setUsername(sessionStorage.getItem("username"))

    if (loggedInUser) {
      setUserLoggedIn(loggedInUser)
    }
  }, [])

  return (
    <div className="dashboard">
      {userloggedIn ? (
        <AuthenticatedHeader setSearchedVideo={props.setSearchedVideo} />
      ) : (
        <Header setSearchedVideo={props.setSearchedVideo} />
      )}
      {userloggedIn ? (
        <Customer username={username} />
      ) : (
        <p>Have to log in to see details</p>
      )}
      <Footer />
    </div>
  )
}

export default Dashboard

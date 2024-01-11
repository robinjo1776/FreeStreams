import Header from "../components/Header"
import AuthenticatedHeader from "../components/AuthenticatedHeader"
import Hero from "../components/Hero"
import FeaturedMovies from "../components/FeaturedMovies"
import FeaturedTV from "../components/FeaturedTV"
import Content from "../components/Content"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

const Homepage = ({ featuredMovies, featuredTV, setSearchedVideo }) => {
  const [userloggedIn, setUserLoggedIn] = useState(null)

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("userloggedIn")

    if (loggedInUser) {
      setUserLoggedIn(loggedInUser)
    }
  }, [])

  return (
    <div>
      {userloggedIn ? (
        <AuthenticatedHeader setSearchedVideo={setSearchedVideo} />
      ) : (
        <Header setSearchedVideo={setSearchedVideo} />
      )}
      <div className="container">
        <Hero />
      </div>
      <FeaturedMovies movies={featuredMovies} />
      <FeaturedTV tvShows={featuredTV} />
      <Content />
      <Footer />
    </div>
  )
}

export default Homepage

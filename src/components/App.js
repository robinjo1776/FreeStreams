import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import HomePage from "../Pages/Homepage"
import Movies from "../Pages/Movies"
import MovieDescription from "../Pages/MovieDescription"
import ShowDescription from "../Pages/ShowDescription"
import Login from "../Pages/Login"
import Register from "../Pages/Registration"
import TVShows from "../Pages/TVShows"

import "../assets/css/App.css"
import SearchResult from "../Pages/SearchResult"
import Dashboard from "../Pages/Dashboard"

const App = () => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTVshows] = useState([])
  const [featuredMovies, setFeaturedMovies] = useState([])
  const [featuredTV, setFeaturedTV] = useState([])
  //Searching states
  const [searchedVideo, setSearchedVideo] = useState([])

  useEffect(() => {
    //Async operation get/post, put or delete
    const fetchMovies = () => {
      fetch("https://cjv805-backend.herokuapp.com/movies")
        .then((res) => res.json())
        .then((data) => {
          //console.log(data.body)
          setMovies(data.body)
        })
        .catch((err) => console.log(err.message))
    }

    const fetchTV = () => {
      fetch("https://cjv805-backend.herokuapp.com/tv")
        .then((returnedData) => {
          //console.log(returnedData)
          return returnedData.json()
        })
        .then((data) => {
          //console.log(data.body)
          setTVshows(data.body)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    const fetchFeaturedMovies = () => {
      fetch(
        "https://cjv805-backend.herokuapp.com/movies/isFeatured?isFeatured=true"
      )
        .then((returnedData) => {
          return returnedData.json()
        })
        .then((data) => {
          //console.log(data)
          setFeaturedMovies(data.body)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    const fetchFeaturedTV = () => {
      fetch(
        "https://cjv805-backend.herokuapp.com/tv/isFeatured?isFeatured=true"
      )
        .then((returnedData) => {
          return returnedData.json()
        })
        .then((data) => {
          setFeaturedTV(data.body)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    // const fetchSearchedVideo = () => {
    //   console.log(title.length)
    //   if (title.length > 0) {
    //     fetch("https://cjv805-backend.herokuapp.com/videos?title=" + title)
    //       .then((returnedData) => {
    //         return returnedData.json()
    //       })
    //       .then((data) => {
    //         //console.log(data.body[0])
    //         setSearchedVideo(data.body)
    //       })
    //   } else {
    //     console.log("title is empty")
    //   }
    // }

    fetchMovies()
    fetchTV()
    fetchFeaturedMovies()
    fetchFeaturedTV()
    // fetchSearchedVideo()
  }, [])

  // console.log(searchedVideo)
  //console.log(featuredMovies)

  //console.log(title + " JUST TESTING IF I CASN RECEEIVE FROM OTHER pages")

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                featuredMovies={featuredMovies}
                featuredTV={featuredTV}
                setSearchedVideo={setSearchedVideo}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies movies={movies} setSearchedVideo={setSearchedVideo} />
            }
          />
          <Route
            path="/tv"
            element={
              <TVShows shows={tvShows} setSearchedVideo={setSearchedVideo} />
            }
          />
          <Route
            path="/movies/:id"
            element={<MovieDescription setSearchedVideo={setSearchedVideo} />}
          />
          <Route
            path="/tv/:id"
            element={<ShowDescription setSearchedVideo={setSearchedVideo} />}
          />
          <Route
            path="/login"
            element={<Login setSearchedVideo={setSearchedVideo} />}
          />
          <Route
            path="/register"
            element={<Register setSearchedVideo={setSearchedVideo} />}
          />
          <Route
            path="/videos"
            element={
              <SearchResult
                searchedVideo={searchedVideo}
                setSearchedVideo={setSearchedVideo}
              />
            }
          />
          <Route
            path="/dashboard"
            element={<Dashboard setSearchedVideo={setSearchedVideo} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

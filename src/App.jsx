import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import ForgotPassword from "./pages/forgotPassword";
import MovieDetails from "./pages/MovieDetails";
import {
  nowPlayingMovie,
  discoverMovie,
  upComingMovie,
  topRatedMovie,
  tvSeriesApi,
} from "./apiConfig.js";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [upComingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(nowPlayingMovie);
        const popularResponse = await fetch(discoverMovie);
        const upComingResponse = await fetch(upComingMovie);
        const topRatedResponse = await fetch(topRatedMovie);
        const tvSeriesResponse = await fetch(tvSeriesApi);

        const data = await response.json();
        const sortedData = data.results.sort(
          (a, b) => b.vote_average - a.vote_average
        );

        const popularData = await popularResponse.json();
        const upComingData = await upComingResponse.json();
        const topRatedData = await topRatedResponse.json();
        const tvSeriesData = await tvSeriesResponse.json();

        setMovieList(sortedData);
        setPopularMovies(popularData.results);
        setUpcomingMovies(upComingData.results);
        setTopRatedMovies(topRatedData.results);
        setTvSeries(tvSeriesData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovies();
    // console.log(movieList);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/LoginPage" element={<LogInPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route
          path="/Home"
          element={
            <Home
              movieData={movieList}
              popularData={popularMovies}
              upComingData={upComingMovies}
              topRatedData={topRatedMovies}
              tvSeriesData={tvSeries}
            />
          }
        />
        <Route path="/MovieDetails" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;

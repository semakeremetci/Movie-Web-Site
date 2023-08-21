import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import ForgotPassword from "./pages/forgotPassword";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [upComingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const today = new Date().toISOString().split("T")[0];
  const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 6))
    .toISOString()
    .split("T")[0];

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${
            import.meta.env.VITE_REACT_TMDB_API_KEY
          }`
        );
        const popularResponse = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_REACT_TMDB_API_KEY
          }&sort_by=popularity.desc`
        );
        const upComingResponse = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_REACT_TMDB_API_KEY
          }&primary_release_date.gte=${today}&primary_release_date.lte=${nextMonth}&sort_by=popularity.desc`
        );
        const topRatedResponse = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${
            import.meta.env.VITE_REACT_TMDB_API_KEY
          }`
        );
        const tvSeriesResponse = await fetch(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${
            import.meta.env.VITE_REACT_TMDB_API_KEY
          }`
        );
        const data = await response.json();
        const nowPlayingMovies = data.results;
        const sortedData = nowPlayingMovies.sort(
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
    console.log(tvSeries);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/LoginPage" element={<LogInPage />} />
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
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import ForgotPassword from "./pages/forgotPassword";
import MovieDetails from "./pages/MovieDetails";
import Explore from "./pages/Explore";
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

  const movieGenres = {
    MOVIE: [
      {
        genre: "Action",
        id: 28,
        backdrop_path: "/7dzngS8pLkGJpyeskCFcjPO9qLF.jpg",
      },
      {
        genre: "Adventure",
        id: 12,
        backdrop_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
      },
      {
        genre: "Animation",
        id: 16,
        backdrop_path: "/fK5ssgvtI43z19FoWigdlqgpLRE.jpg",
      },
      {
        genre: "Comedy",
        id: 35,
        backdrop_path: "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
      },
      {
        genre: "Crime",
        id: 80,
        backdrop_path: "/bneUTWFAcVCdsb0O5UwZbJd8xqZ.jpg",
      },
      {
        genre: "Documentary",
        id: 99,
        backdrop_path: "/gpyu3jQeMQeUFAVjCSrVCrYYK3f.jpg",
      },
      {
        genre: "Drama",
        id: 18,
        backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      },
      {
        genre: "Family",
        id: 10751,
        backdrop_path: "/vaVaNrscmsG8CUKYxiwZGFNqGJo.jpg",
      },
      {
        genre: "Fantasy",
        id: 14,
        backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
      },
      {
        genre: "History",
        id: 36,
        backdrop_path: "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      },
      {
        genre: "Horror",
        id: 27,
        backdrop_path: "/7isarjYDEKZ5t1CgcvbuqEUby8P.jpg",
      },
      {
        genre: "Music",
        id: 10402,
        backdrop_path: "/qJeU7KM4nT2C1WpOrwPcSDGFUWE.jpg",
      },
      {
        genre: "Mystery",
        id: 9648,
        backdrop_path: "/q2CtXYjp9IlnfBcPktNkBPsuAEO.jpg",
      },
      {
        genre: "Romance",
        id: 10749,
        backdrop_path: "/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
      },
      {
        genre: "Science Fiction",
        id: 878,
        backdrop_path: "/5bzPWQ2dFUl2aZKkp7ILJVVkRed.jpg",
      },
      {
        genre: "TV Movie",
        id: 10770,
        backdrop_path: "/wy3ItrIw4DmLFxvFK5LM6FPwdQw.jpg",
      },
      {
        genre: "Thriller",
        id: 53,
        backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      },
      {
        genre: "War",
        id: 10752,
        backdrop_path: "/bdD39MpSVhKjxarTxLSfX6baoMP.jpg",
      },
      {
        genre: "Western",
        id: 37,
        backdrop_path: "/n2eUT4zQA2yYcKOgAFidgOyiFoH.jpg",
      },
    ],
    TV_SHOW: [
      {
        genre: "Action & Adventure",
        id: 10759,
        backdrop_path: "/o1iJ1aJJnCPPjrJsfXFwgw3yA3H.jpg",
      },
      {
        genre: "Animation",
        id: 16,
        backdrop_path: "/9In9QgVJx7PlFOAgVHCKKSbo605.jpg",
      },
      {
        genre: "Comedy",
        id: 35,
        backdrop_path: "/5BMwFwNzSidVYArn561acqtktxv.jpg",
      },
      {
        genre: "Crime",
        id: 80,
        backdrop_path: "/y5NFQD2yTGoPLy1KdlBcAwuecqW.jpg",
      },
      {
        genre: "Documentary",
        id: 99,
        backdrop_path: "/qmRUwosX4BsCj6QanpBYScLl3Sp.jpg",
      },
      {
        genre: "Drama",
        id: 18,
        backdrop_path: "/xXRsKNJHTOGrs5wfYAxkbM2RiyT.jpg",
      },
      {
        genre: "Family",
        id: 10751,
        backdrop_path: "/fXRgyxFxT3SG45fDqUODDRNE9IJ.jpg",
      },
      {
        genre: "Kids",
        id: 10762,
        backdrop_path: "/lhg7eA6CTOCL10QNVdKiyxkgPsL.jpg",
      },
      {
        genre: "Mystery",
        id: 9648,
        backdrop_path: "/2yZXtM2Kky1Sy0kachbDlwybl3y.jpg",
      },
      {
        genre: "News",
        id: 10763,
        backdrop_path: "/26TgQvq9mZ85KKKKmeRnsOfJVUL.jpg",
      },
      {
        genre: "Reality",
        id: 10764,
        backdrop_path: "/q79U95wgkocoECitZPfRDhZXBNz.jpg",
      },
      {
        genre: "Sci-Fi & Fantasy",
        id: 10765,
        backdrop_path: "/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
      },
      {
        genre: "Soap",
        id: 10766,
        backdrop_path: "/coHgKyLRwhbMktEWr6dwSYUg2BH.jpg",
      },
      {
        genre: "Talk",
        id: 10767,
        backdrop_path: "/6wX6105dCfRqTrwvoQgA8bGxUCo.jpg",
      },
      {
        genre: "War & Politics",
        id: 10768,
        backdrop_path: "/lHe8iwM4Cdm6RSEiara4PN8ZcBd.jpg",
      },
      {
        genre: "Western",
        id: 37,
        backdrop_path: "/xHkOKPUe3ioXyPIe5odyL6o6cp4.jpg",
      },
    ],
  };

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
        <Route
          path="/MovieDetails"
          element={<MovieDetails movieGenres={movieGenres} />}
        />
        <Route
          path="/Explore"
          element={
            <Explore movieGenres={movieGenres} discoverMovies={popularMovies} />
          }
        />
      </Routes>
    </>
  );
}

export default App;

import React, { useEffect, useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Slides from "../Components/Slides";
import Footer from "../Components/Footer";
import { apiKey } from "../apiConfig";
import YouTube from "react-youtube";
import MovieCard from "../Components/MovieCard";
import { GlobalContext } from "../Context/GlobalState";

function MovieDetails() {
  const [storedData, setStoredData] = useState(null);
  const [similarMovie, setSimilarMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [addWatchlist, setAddWatchlist] = useState(false);
  const [addWatched, setAddWatched] = useState(false);
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find(
    (o) => o.id === JSON.parse(localStorage.getItem("storedData")).id
  );
  const watchlistDisabled = storedMovie ? true : false;

  // İki arrayin elemanlarını karşılaştırıp aynıysa true döndüren fonk.
  const arraysEqual = (a, b) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const isMobile = window.innerWidth <= 768;
  const opts = {
    height: isMobile ? "300" : "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const scrollToAndShow = () => {
    const element = document.getElementById("scrollToThisDiv");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setShowTrailer(true);
    }
  };

  useEffect(() => {
    let localStoredData = JSON.parse(localStorage.getItem("storedData"));
    setStoredData(localStoredData);
    window.scrollTo(0, 0);
    setShowTrailer(false);

    const fetchMovies = async () => {
      try {
        const similarResponse = await fetch(
          `https://api.themoviedb.org/3/discover/${
            localStoredData.name ? "tv" : "movie"
          }?api_key=${apiKey}&with_genres=${localStoredData.genre_ids.join(
            ","
          )}&vote_average.gte=7&vote_count.gte=1000`
        );
        const creditResponse = await fetch(
          `https://api.themoviedb.org/3/${
            localStoredData.name ? "tv" : "movie"
          }/${localStoredData.id}/credits?api_key=${apiKey}`
        );
        const appendResponse = await fetch(
          `https://api.themoviedb.org/3/${
            localStoredData.name ? "tv" : "movie"
          }/${localStoredData.id}?api_key=${apiKey}&append_to_response=videos`
        );

        if (similarResponse && creditResponse) {
          const similarData = await similarResponse.json();
          const creditData = await creditResponse.json();
          const appendData = await appendResponse.json();

          const filteredResults = similarData.results.filter((result) => {
            return (
              result.id !== localStoredData.id &&
              arraysEqual(result.genre_ids, localStoredData.genre_ids)
            );
          });

          const renderTrailer = appendData.videos.results.find((vid) =>
            vid.name === "Main Trailer"
              ? vid.name === "Main Trailer"
              : vid.name.includes("Official") && vid.name.includes("Trailer")
          )
            ? appendData.videos.results.find((vid) =>
                vid.name === "Main Trailer"
                  ? vid.name === "Main Trailer"
                  : vid.name.includes("Official") &&
                    vid.name.includes("Trailer")
              )
            : appendData.videos.results[0];

          setSimilarMovie(filteredResults);
          setCast(creditData.cast.slice(0, 10));
          setTrailer(renderTrailer);
          // console.log("Similar movies:", filteredResults);
          // console.log("credit", creditData.cast.slice(0, 10));
          // console.log("appendData", renderTrailer, appendData.videos.results);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (localStoredData) {
      fetchMovies();
    }

    return () => fetchMovies();
  }, [clicked]);

  return (
    <>
      <Navbar></Navbar>
      <SideBar></SideBar>
      <div className="section bg-base-100 h-screen relative">
        <MovieCard
          backdrop_path={
            storedData ? (
              storedData.backdrop_path ? (
                storedData.backdrop_path
              ) : (
                storedData.poster_path
              )
            ) : (
              <p>no picture</p>
            )
          }
          title={
            storedData ? (
              storedData.title ? (
                storedData.title
              ) : (
                storedData.name
              )
            ) : (
              <p>no data</p>
            )
          }
          voteAverage={
            storedData
              ? storedData.vote_average
                ? storedData.vote_average.toFixed(1)
                : "no data"
              : "no data"
          }
          voteCount={
            storedData
              ? storedData.vote_count
                ? `(${storedData.vote_count}) Votes`
                : "no data"
              : "no data"
          }
          origin={
            storedData
              ? storedData.origin_country
                ? `Origin: ${storedData.origin_country} `
                : `Language: ${storedData.original_language.toUpperCase()} `
              : "no data"
          }
          releaseDate={
            storedData
              ? storedData.release_date
                ? `Release Date : ${storedData.release_date}`
                : `Release Date : ${storedData.first_air_date}`
              : "no data"
          }
          type={storedData ? (storedData.title ? `MOVIE` : `TV`) : "no data"}
        ></MovieCard>
        <div className="overview p-4 sm:pr-16 sm:pl-28 flex justify-start">
          <div className="hero bg-base-100">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse p-0 ">
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  storedData ? (
                    storedData.poster_path ? (
                      storedData.poster_path
                    ) : (
                      storedData.backdrop_path
                    )
                  ) : (
                    <p>no picture</p>
                  )
                }`}
                className="max-w-full rounded-lg shadow-2xl flex"
              />
              <div>
                <h1 className="text-5xl font-bold text-primary">Overview</h1>
                <p className="py-6">
                  {storedData
                    ? storedData.overview
                      ? storedData.overview
                      : `No data : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                    : "no data"}
                </p>

                <p>
                  <button
                    onClick={() => {
                      addMovieToWatchlist(storedData);
                    }}
                    disabled={watchlistDisabled}
                    className="btn btn-primary normal-case text-secondary disabled:bg-primary disabled:text-secondary"
                  >
                    Add Watchlist
                    {watchlistDisabled && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        fill="red"
                      >
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setAddWatched(true);
                      setAddWatchlist(false);
                    }}
                    className="btn btn-primary normal-case text-secondary ml-2 "
                  >
                    Watched
                    {addWatched && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        fill="red"
                      >
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                      </svg>
                    )}
                  </button>
                </p>
                {trailer && (
                  <button
                    onClick={scrollToAndShow}
                    className="btn btn-secondary normal-case text-white mt-2"
                  >
                    Watch Trailer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="scrollToThisDiv">
          {showTrailer && (
            <div className="p-4 sm:pr-16 sm:pl-28">
              {trailer && trailer.key && (
                <YouTube opts={opts} videoId={trailer.key} />
              )}
            </div>
          )}
        </div>
        {cast?.length > 0 ? (
          <Slides h1={"Cast"} cast={cast} customClass=" text-primary"></Slides>
        ) : null}
        {similarMovie?.length > 0 ? (
          <Slides
            h1={"Suggestion"}
            similarData={similarMovie}
            customClass="text-primary"
            clickedMovie={(movie) => setClicked(movie)}
          ></Slides>
        ) : null}
        <Footer></Footer>
      </div>
    </>
  );
}

export default MovieDetails;

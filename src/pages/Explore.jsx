import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import InputField from "../Components/InputField";
import Slides from "../Components/Slides";
import Footer from "../Components/Footer";
import { apiKey } from "../apiConfig";
import { movieGenres } from "../Assets/movieGenre";

function Explore() {
  const [option, setOption] = useState("movie");
  const [genreId, setGenreId] = useState(null);
  const [movies, setMovies] = useState([]);

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesResponse = await fetch(
          `https://api.themoviedb.org/3/discover/${option}?api_key=${apiKey}&with_genres=${genreId}&vote_average.gte=7&vote_count.gte=210`
        );
        const moviesData = await moviesResponse.json();
        setMovies(moviesData.results);
        scrollUp();
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [genreId]);

  return (
    <>
      <Navbar></Navbar>
      <SideBar></SideBar>
      <h1 className=" lg:hidden mt-20 mx-4 mb-4 sm:ml-28 sm:mr-16 text-4xl font-bold">
        Explore
      </h1>
      <InputField customClass="flex"></InputField>

      {genreId && <Slides customClass="mt-12" movies={movies}></Slides>}
      <div
        className="mx-4 mb-4 sm:ml-28 sm:mr-16 "
        style={{ marginTop: !genreId && "5rem" }}
      >
        <div className="flex justify-start">
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="select select-bordered mb-4 max-w-xs"
          >
            <option value="movie">Movies</option>
            <option value="tv">TV Shows</option>
          </select>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {movieGenres && option === "movie"
            ? movieGenres[0].map((movie) => (
                <div
                  key={movie.genre}
                  className="card w-68 bg-base-100 shadow-xl image-full cursor-pointer"
                  onClick={() => setGenreId(movie.id)}
                >
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt="photo"
                    />
                  </figure>
                  <div className="card-body flex justify-center">
                    <h2 className="card-title text-4xl justify-center hover:text-secondary">
                      {movie.genre}
                    </h2>
                  </div>
                </div>
              ))
            : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {movieGenres && option === "tv"
            ? movieGenres[1].map((movie) => (
                <div
                  key={movie.genre}
                  onClick={() => setGenreId(movie.id)}
                  className="card w-68 bg-base-100 shadow-xl image-full cursor-pointer"
                >
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt="photo"
                    />
                  </figure>
                  <div className="card-body flex justify-center">
                    <h2 className="card-title text-4xl justify-center hover:text-secondary">
                      {movie.genre}
                    </h2>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Explore;

import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import InputField from "../Components/InputField";
import Footer from "../Components/Footer";
import { apiKey } from "../apiConfig";

function Categories(props) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  console.log(props.movieGenres.MOVIE.genre);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesResponse = await fetch(
          `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=37&vote_average.gte=7&vote_count.gte=200`
        );
        const moviesData = await moviesResponse.json();
        console.log(moviesData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <SideBar></SideBar>
      <h1 className=" lg:hidden mt-20 mx-4 mb-4 sm:ml-28 sm:mr-16 text-4xl font-bold">
        Explore
      </h1>
      <InputField customClass="flex"></InputField>

      <div className="mt-12 mx-4 mb-4 sm:ml-28 sm:mr-16 lg:mt-20">
        <h1 className="text-3xl  my-4 text-secondary-content">Movies</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {props.movieGenres
            ? props.movieGenres.MOVIE.map((movie) => (
                <div
                  key={movie.genre}
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
        <h1 className="text-3xl font-bold my-4 text-secondary-content">
          TV Shows
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {props.movieGenres
            ? props.movieGenres.TV_SHOW.map((movie) => (
                <div
                  key={movie.genre}
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

export default Categories;

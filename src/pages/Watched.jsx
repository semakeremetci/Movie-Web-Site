import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import NavigateButton from "../Components/NavigateButton";

function Watched() {
  const { watched } = useContext(GlobalContext);
  const { removeMovieFromWatched } = useContext(GlobalContext);
  const movieNavigate = useNavigate();

  const clickHandler = (clickedMovie) => {
    if (clickedMovie.overview) {
      localStorage.setItem("storedData", JSON.stringify(clickedMovie));
      movieNavigate("/MovieDetails");
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <SideBar></SideBar>
      <div className="mt-16 mx-4 mb-16 sm:ml-28 sm:mr-16 font-bold grid justify-items-center relative">
        <h1 className="text-3xl pb-4 text-secondary-focus">Watched</h1>

        <div className="mt-4 justify-self-center grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {watched.map((movie) => (
            <div
              key={movie.id}
              className="card card-compact bg-base-200 shadow-xl text-accent"
            >
              <figure className="relative">
                <img
                  className="bg-contain bg-center"
                  src={
                    movie.poster_path || movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w300${
                          movie.poster_path
                            ? movie.poster_path
                            : movie.backdrop_path
                        }`
                      : `https://picsum.photos/seed/picsum/200/300`
                  }
                  alt="poster"
                />
                <div
                  className="tooltip tooltip-bottom absolute z-40 top-1 right-1"
                  data-tip="remove"
                >
                  <button
                    onClick={() => removeMovieFromWatched(movie.id)}
                    className="btn btn-sm rounded-full bg-transparent border-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="2em"
                      viewBox="0 0 384 512"
                      fill="white"
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </button>
                </div>
              </figure>
              <div className="card-body flex flex-col h-16 sm:h-20">
                <h2
                  onClick={() => clickHandler(movie)}
                  className="card-title text-sm lg:text-lg text-primary cursor-pointer hover:text-base-content"
                >
                  {movie.title
                    ? movie.title.length > 26
                      ? `${movie.title.substring(0, 26)}...`
                      : movie.title
                    : movie.name.length > 26
                    ? `${movie.name.substring(0, 26)}...`
                    : movie.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <NavigateButton
          customClass="bg-base-100"
          customClass2="bg-secondary"
        ></NavigateButton>
      </div>
    </>
  );
}

export default Watched;

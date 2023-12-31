import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import NavigateButton from "../Components/NavigateButton";

function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  const { removeMovieFromWatchlist, addMovieToWatched } =
    useContext(GlobalContext);
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
        <h1 className="text-3xl pb-4 text-secondary-focus">My Watchlist</h1>

        <div className="mt-4 justify-self-center grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {watchlist.map((movie) => (
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
                    onClick={() => removeMovieFromWatchlist(movie.id)}
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
                <div
                  className="tooltip tooltip-bottom absolute top-1 left-1"
                  data-tip="watched"
                >
                  <button
                    onClick={() => addMovieToWatched(movie)}
                    className="btn btn-sm rounded-full bg-transparent border-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.5em"
                      viewBox="0 0 576 512"
                      fill="white"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
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
          customClass="bg-secondary"
          customClass2="bg-base-100"
        ></NavigateButton>
      </div>
    </>
  );
}

export default Watchlist;

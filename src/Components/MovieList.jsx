import React from "react";
import NavigateButton from "./NavigateButton";

function MovieList(prop) {
  const createList = (movie) => {
    <div
      key={movie.key}
      className="card card-compact bg-base-200 shadow-xl text-accent"
    >
      <figure className="relative">
        <img
          className="bg-contain bg-center"
          src={
            movie.poster_path || movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w185${
                  movie.poster_path ? movie.poster_path : movie.backdrop_path
                }`
              : `https://picsum.photos/seed/picsum/200/300`
          }
          alt="poster"
        />
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
    </div>;
  };
  return (
    <div className="mt-16 mx-4 mb-16 sm:ml-28 sm:mr-16 font-bold grid justify-items-center relative">
      <h1 className="text-3xl pb-4 text-secondary-focus">My Watchlist</h1>

      <div className="mt-4 justify-self-center grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {prop.watchlist
          ? prop.watchlist.map((movie) => createList(movie))
          : null}
      </div>
    </div>
  );
}

export default MovieList;

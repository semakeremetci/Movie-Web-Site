import React, { useEffect, useState } from "react";
import { searchMovie } from "../apiConfig.js";

function InputField(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchQuery) {
          const searchResponse = await fetch(searchMovie(searchQuery));
          const searchData = await searchResponse.json();
          const moviesAndTVShows = searchData.results.filter(
            (item) => item.media_type === "movie" || item.media_type === "tv"
          );
          const sortedSearch = moviesAndTVShows.sort(
            (a, b) => b.vote_count - a.vote_count
          );
          console.log(sortedSearch);
          setSearchResults(sortedSearch);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleFocus = () => {
    setIsFocused(true);
    console.log(isFocused);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className=" sticky shadow-lg top-16 py-2 z-50 object-right bg-black lg:grow lg:bg-transparent md:mr-16 md:ml-28 lg:fixed lg:top-4 lg:right-20 lg:py-0 lg:w-80"
      style={{
        ...(searchQuery && isFocused
          ? {
              backgroundColor: "black",
              border: "2px solid black",
              borderRadius: "25px 25px 10px 10px",
            }
          : {}),
      }}
    >
      <div
        style={searchQuery && isFocused ? { border: "none" } : {}}
        className={`form-control flex-row justify-start border-2 backdrop-blur-md rounded-3xl lg:border-black ${props.customClass}`}
      >
        <div className="btn btn-ghost rounded-full p-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-7 w-10 flex "
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search Movies or Series"
          className="input overflow-none text-primary placeholder:text-primary focus:outline-none bg-transparent border-none px-2 "
          value={searchQuery}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      {searchQuery && isFocused && (
        <ul className="border-t-2 p-5 md:px-0 md:h-96 border-primary-content overflow-y-scroll lg:border-black border-solid">
          {searchResults.map((movie) => (
            <li
              key={movie.id}
              className=" mb-1 flex gap-2 cursor-pointer hover:bg-primary-focus"
            >
              <img
                src={
                  movie.poster_path || movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w342${
                        movie.poster_path
                          ? movie.poster_path
                          : movie.backdrop_path
                      }`
                    : `https://picsum.photos/seed/picsum/200/300`
                }
                width={54}
                alt=""
              />
              {movie.title
                ? movie.title.length > 24
                  ? `${movie.title.substring(0, 24)}...`
                  : movie.title
                : movie.name.length > 24
                ? `${movie.name.substring(0, 24)}...`
                : movie.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InputField;

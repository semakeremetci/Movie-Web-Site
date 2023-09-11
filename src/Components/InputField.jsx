import React, { useEffect, useState } from "react";
import { searchMovie } from "../apiConfig.js";
import useDebounce from "./setDebounce.jsx";
import { useNavigate } from "react-router-dom";

function InputField(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const delayedQuery = useDebounce(searchQuery, 500); // 0.5 saniyelik gecikme
  const movieNavigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (delayedQuery) {
          const searchResponse = await fetch(searchMovie(delayedQuery));
          const searchData = await searchResponse.json();
          const moviesAndTVShows = searchData.results.filter(
            (item) => item.media_type === "movie" || item.media_type === "tv"
          );
          const sortedSearch = searchData.results.sort(
            (a, b) => b.vote_count - a.vote_count
          );
          // console.log(sortedSearch);
          setSearchResults(sortedSearch);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [delayedQuery]);

  const handleClick = (clickedMovie) => {
    localStorage.setItem("storedData", JSON.stringify(clickedMovie));
    movieNavigate("/MovieDetails");
    // console.log(clickedMovie);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 500); // 0.5 saniyede çalışıcak
  };

  return (
    <div
      onFocus={handleFocus}
      onBlur={handleBlur}
      className=" sticky shadow-lg top-16 py-2 z-40 lg:z-[100] object-right bg-black sm:mr-16 sm:ml-28 sm:top-20 lg:grow lg:bg-transparent lg:fixed lg:top-4 lg:right-20 lg:py-0 lg:w-80"
      style={{
        ...(delayedQuery && isFocused
          ? {
              backgroundColor: "black",
              border: "2px solid black",
              borderRadius: "25px 25px 10px 10px",
            }
          : {}),
      }}
    >
      <div
        style={delayedQuery && isFocused ? { border: "none" } : {}}
        className={`form-control flex-row justify-start border-2 backdrop-blur-md rounded-3xl lg:border-black m-4 mb-0 sm:m-0 ${props.customClass}`}
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
          className="input w-full overflow-none text-primary placeholder:text-primary focus:outline-none bg-transparent border-none px-0 "
          value={searchQuery}
          onChange={(e) => {
            e.preventDefault();
            setSearchQuery(e.target.value);
          }}
        />
      </div>
      {delayedQuery && isFocused && (
        <ul className="border-t-2 p-5 h-72 sm:px-0 sm:h-96 border-primary-content overflow-y-scroll lg:border-black border-solid">
          {searchResults.map((movie) => (
            <li
              onClick={() => handleClick(movie)}
              key={movie.id}
              className=" mb-1 flex z-50 gap-2 cursor-pointer hover:bg-primary-focus"
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
                ? movie.title.length > 30
                  ? `${movie.title.substring(0, 30)}...`
                  : movie.title
                : movie.name.length > 30
                ? `${movie.name.substring(0, 30)}...`
                : movie.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InputField;

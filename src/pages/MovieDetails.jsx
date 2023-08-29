import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Slides from "../Components/Slides";
import Footer from "../Components/Footer";
import { apiKey } from "../apiConfig";

function MovieDetails() {
  const [storedData, setStoredData] = useState(null);
  const [similarMovie, setSimilarMovie] = useState(null);

  const MOVIE = [
    { genre: "Action", id: 28 },
    { genre: "Adventure", id: 12 },
    { genre: "Animation", id: 16 },
    { genre: "Comedy", id: 35 },
    { genre: "Crime", id: 80 },
    { genre: "Documentary", id: 99 },
    { genre: "Drama", id: 18 },
    { genre: "Family", id: 10751 },
    { genre: "Fantasy", id: 14 },
    { genre: "History", id: 36 },
    { genre: "Horror", id: 27 },
    { genre: "Music", id: 10402 },
    { genre: "Mystery", id: 9648 },
    { genre: "Romance", id: 10749 },
    { genre: "Science Fiction", id: 878 },
    { genre: "TV Movie", id: 10770 },
    { genre: "Thriller", id: 53 },
    { genre: "War", id: 10752 },
    { genre: "Western", id: 37 },
  ];

  const TV_SHOW = [
    { genre: "Action & Adventure", id: 10759 },
    { genre: "Animation", id: 16 },
    { genre: "Comedy", id: 35 },
    { genre: "Crime", id: 80 },
    { genre: "Documentary", id: 99 },
    { genre: "Drama", id: 18 },
    { genre: "Family", id: 10751 },
    { genre: "Kids", id: 10762 },
    { genre: "Mystery", id: 9648 },
    { genre: "News", id: 10763 },
    { genre: "Reality", id: 10764 },
    { genre: "Sci-Fi & Fantasy", id: 10765 },
    { genre: "Soap", id: 10766 },
    { genre: "Talk", id: 10767 },
    { genre: "War & Politics", id: 10768 },
    { genre: "Western", id: 37 },
  ];

  // İki arrayin elemanlarını karşılaştırıp aynıysa true döndüren fonk.
  const arraysEqual = (a, b) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  useEffect(() => {
    let localStoredData = JSON.parse(localStorage.getItem("storedData"));
    setStoredData(localStoredData);
    console.log("storeddata", localStoredData);

    const fetchMovies = async () => {
      try {
        const similarResponse = await fetch(
          `https://api.themoviedb.org/3/discover/${
            localStoredData.media_type
          }?api_key=${apiKey}&with_genres=${localStoredData.genre_ids.join(
            ","
          )}&vote_average.gte=7&vote_count.gte=1000`
        );
        if (similarResponse) {
          const similarData = await similarResponse.json();

          const filteredResults = similarData.results.filter((result) => {
            return (
              result.id !== localStoredData.id &&
              arraysEqual(result.genre_ids, localStoredData.genre_ids)
            );
          });

          setSimilarMovie(filteredResults);
          console.log("Similar movies:", filteredResults);
        } else {
          console.error("Error fetching movies");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (localStoredData.genre_ids.length > 0) {
      fetchMovies();
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <SideBar></SideBar>
      <div className="section bg-base-100 h-screen relative">
        <div className="h-1/2 lg:h-full">
          <img
            className="h-full w-full object-cover object-top"
            src={`https://image.tmdb.org/t/p/original${
              storedData ? (
                storedData.backdrop_path ? (
                  storedData.backdrop_path
                ) : (
                  storedData.poster_path
                )
              ) : (
                <p>no picture</p>
              )
            }`}
            alt=""
          />
          <div className="hero absolute h-1/2 lg:h-full top-0 lg:bottom-0 bg-gradient-to-t from-black to-transparent px-8 sm:pr-16 sm:pl-28 justify-start">
            <div className="hero-content absolute bottom-0 left-0 flex-col lg:flex-row-reverse px-0 pb-8">
              <div className="font-bold text-primary text-sm lg:text-lg">
                <h1 className="text-xl lg:text-5xl ">
                  {storedData ? (
                    storedData.title ? (
                      storedData.title
                    ) : (
                      storedData.name
                    )
                  ) : (
                    <p>no data</p>
                  )}
                </h1>
                <p className="pt-4 flex gap-2">
                  {storedData ? (
                    storedData.vote_average ? (
                      storedData.vote_average.toFixed(1)
                    ) : (
                      "no data"
                    )
                  ) : (
                    <p>no data</p>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="0.8em"
                    viewBox="0 0 576 512"
                    fill="white"
                    className="mt-1.5"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                  {storedData ? (
                    storedData.vote_count ? (
                      `(${storedData.vote_count}) Votes`
                    ) : (
                      "no data"
                    )
                  ) : (
                    <p>no data</p>
                  )}
                </p>
                <p className="py-2">
                  {storedData ? (
                    storedData.origin_country ? (
                      `Origin: ${storedData.origin_country} `
                    ) : (
                      `Language: ${storedData.original_language.toUpperCase()} `
                    )
                  ) : (
                    <p>no data</p>
                  )}
                </p>
                <p className="pb-2">
                  {storedData ? (
                    storedData.release_date ? (
                      storedData.release_date
                    ) : (
                      `Release Date: ${storedData.first_air_date}`
                    )
                  ) : (
                    <p>no data</p>
                  )}
                </p>
                <p className="pb-2">
                  {storedData ? (
                    storedData.media_type ? (
                      `Type: ${storedData.media_type}`
                    ) : (
                      storedData.name
                    )
                  ) : (
                    <p>no data</p>
                  )}
                </p>

                <p className="pb-2">
                  {storedData ? (
                    storedData.media_type === "movie" ? (
                      MOVIE.map((genre) => {
                        if (storedData.genre_ids.includes(genre.id)) {
                          return (
                            <span
                              className="badge badge-outline m-1 ml-0 p-2"
                              key={genre.id}
                            >
                              {genre.genre}
                            </span>
                          );
                        }
                        return null;
                      })
                    ) : (
                      TV_SHOW.map((genre) => {
                        if (storedData.genre_ids.includes(genre.id)) {
                          return (
                            <span
                              className="badge badge-outline m-1 ml-0 p-2"
                              key={genre.id}
                            >
                              {genre.genre}
                            </span>
                          );
                        }
                        return null;
                      })
                    )
                  ) : (
                    <p>no data</p>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overview p-8 sm:pr-16 sm:pl-28 flex justify-start">
          <div className="hero bg-base-100">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse p-0 ">
              <img
                src={`https://image.tmdb.org/t/p/w342${
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
                  {storedData ? (
                    storedData.overview ? (
                      storedData.overview
                    ) : (
                      `No data : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
                    )
                  ) : (
                    <p>no data</p>
                  )}
                </p>
                <button className="btn bg-base-content text-white ">
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
        {similarMovie?.length > 0 ? (
          <Slides
            h1={"Similar"}
            similarData={similarMovie}
            customClass="p-4 sm:p-0 text-primary"
          ></Slides>
        ) : null}
        <Footer></Footer>
      </div>
    </>
  );
}

export default MovieDetails;

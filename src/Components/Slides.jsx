import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax, Keyboard } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";

function Slides(props) {
  const movieNavigate = useNavigate();

  const clickHandler = (clickedMovie) => {
    if (clickedMovie.overview) {
      localStorage.setItem("storedData", JSON.stringify(clickedMovie));

      movieNavigate("/MovieDetails");
      props.clickedMovie(() => clickedMovie);
      // console.log(clickedMovie);
      // console.log(JSON.parse(localStorage.getItem("storedData")));
    }
  };

  const createSlide = (movie) => {
    return (
      <SwiperSlide key={movie.id} className=" py-4">
        <div className="card card-compact bg-base-200 shadow-xl text-accent">
          <figure className="relative">
            <img
              className="bg-contain bg-center"
              src={
                movie.poster_path || movie.backdrop_path || movie.profile_path
                  ? `https://image.tmdb.org/t/p/w342${
                      movie.poster_path
                        ? movie.poster_path
                        : movie.backdrop_path
                        ? movie.backdrop_path
                        : movie.profile_path
                    }`
                  : "../Assets/anonim.jpg"
              }
              alt="poster"
            />
          </figure>
          <div className="card-body flex flex-col h-20 sm:h-28 p-2 ">
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
            <p className="relative top-[-10px]">
              {movie.character
                ? movie.character.length > 50
                  ? `${movie.character.substring(0, 50)}...`
                  : movie.character
                : null}
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  };
  return (
    <div className={`sm:mr-16 sm:ml-28 py-8  m-4 ${props.customClass}`}>
      <h1 className=" font-bold py-2 text-2xl">{props.h1}</h1>
      <div className="w-full">
        <Swiper
          style={{
            height: "100%",
            "--swiper-navigation-color": "#fff",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          keyboard={{
            enabled: true,
          }}
          rewind={true}
          modules={[Navigation, Parallax, Keyboard]}
          navigation
          parallax={true}
          spaceBetween={20}
          slidesPerView={2}
        >
          {props.upComingData ? (
            props.upComingData.map((movie) =>
              movie.poster_path ? createSlide(movie) : null
            )
          ) : (
            <p></p>
          )}

          {props.popularData ? (
            props.popularData.map((movie) =>
              movie.poster_path ? createSlide(movie) : null
            )
          ) : (
            <p></p>
          )}

          {props.topRatedData ? (
            props.topRatedData.map((movie) =>
              movie.poster_path ? createSlide(movie) : null
            )
          ) : (
            <p></p>
          )}

          {props.tvSeriesData ? (
            props.tvSeriesData.map((movie) =>
              movie.poster_path ? createSlide(movie) : null
            )
          ) : (
            <p></p>
          )}
          {props.similarData ? (
            props.similarData.map((movie) =>
              movie.poster_path ? createSlide(movie) : null
            )
          ) : (
            <p></p>
          )}

          {props.cast ? (
            props.cast.map((movie) =>
              movie.profile_path ? createSlide(movie) : null
            )
          ) : (
            <p></p>
          )}

          {props.movies ? (
            props.movies.map((movie) =>
              movie.poster_path ? createSlide(movie) : null
            )
          ) : (
            <p></p>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default Slides;

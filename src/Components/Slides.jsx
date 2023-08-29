import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";

function Slides(props) {
  const createSlide = (movie) => {
    return (
      <SwiperSlide key={movie.id} className=" cursor-pointer py-4">
        <div className="card card-compact bg-base-200 shadow-xl text-accent">
          <figure className="relative">
            <img
              className="bg-contain bg-center"
              src={`https://image.tmdb.org/t/p/w342${
                movie.poster_path ? movie.poster_path : movie.backdrop_path
              }`}
              alt="poster"
            />
          </figure>
          <div className="card-body flex flex-row h-20 sm:h-20 ">
            <h2 className="card-title text-lg text-primary">
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
      </SwiperSlide>
    );
  };
  return (
    <div className={`sm:mr-16 sm:ml-28 py-8 sm:py-16 m-4 ${props.customClass}`}>
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
          modules={[Navigation, Parallax]}
          navigation
          parallax={true}
          spaceBetween={20}
          slidesPerView={2}
        >
          {props.upComingData ? (
            props.upComingData.map((movie) => createSlide(movie))
          ) : (
            <p></p>
          )}

          {props.popularData ? (
            props.popularData.map((movie) => createSlide(movie))
          ) : (
            <p></p>
          )}

          {props.topRatedData ? (
            props.topRatedData.map((movie) => createSlide(movie))
          ) : (
            <p></p>
          )}

          {props.tvSeriesData ? (
            props.tvSeriesData.map((movie) => createSlide(movie))
          ) : (
            <p></p>
          )}
          {props.similarData ? (
            props.similarData.map((movie) => createSlide(movie))
          ) : (
            <p></p>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default Slides;

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
            <div className="card-actions absolute top-2/5 left-1/4 sm:left-1/3">
              <button className="btn  bg-transparent hover:bg-transparent hover:border-none border-none">
                <svg
                  className="lg:h-16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="4em"
                  viewBox="0 0 512 512"
                  fill="rgb(220, 165, 76)"
                >
                  <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                </svg>
              </button>
            </div>
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
    <div className="sm:mr-16 sm:ml-28 py-8 sm:py-16 m-4">
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
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
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
        </Swiper>
      </div>
    </div>
  );
}

export default Slides;

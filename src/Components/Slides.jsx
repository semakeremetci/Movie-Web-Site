import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { forwardRef } from "react";

function Slides(props, ref) {
  const randomPic = () => {
    const id = Math.floor(Math.random() * 300);
    return `https://picsum.photos/id/${id}/400/500`;
  };
  const createSlide = () => {
    return (
      <SwiperSlide className=" cursor-pointer py-4">
        <div className="card card-compact bg-base-200 shadow-xl text-accent">
          <figure>
            <img
              className="bg-contain bg-center relative"
              src={randomPic()}
              alt=""
            />
          </figure>
          <div className="card-body flex flex-row">
            <h2 className="card-title text-lg text-primary">
              Spiderman: <br /> No Way Home
            </h2>

            <div className="card-actions justify-end flex-1 lg:static absolute top-1/4 left-1/4">
              <button className="btn bg-transparent hover:bg-transparent hover:border-none border-none">
                <svg
                  className="lg:h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  height="4em"
                  viewBox="0 0 512 512"
                  fill="rgb(220, 165, 76)"
                >
                  <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  };
  return (
    <div ref={ref} className="sm:mx-20 py-4 m-4">
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
          {createSlide()}
          {createSlide()}
          {createSlide()}
          {createSlide()}
          {createSlide()}
          {createSlide()}
          {createSlide()}
          {createSlide()}
          {createSlide()}
        </Swiper>
      </div>
    </div>
  );
}

export default forwardRef(Slides);

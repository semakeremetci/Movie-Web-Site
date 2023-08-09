import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { forwardRef } from "react";

function HeroSection(props, ref) {
  const randomPic = () => {
    const id = Math.floor(Math.random() * 400);
    return `https://picsum.photos/id/${id}/1920/1080`;
  };
  const createSlide = () => {
    return (
      <SwiperSlide className="relative">
        <div className="slide-image absolute top-0 left-0 right-0 h-full">
          <img
            className="bg-contain bg-center max-w-none"
            src={randomPic()}
            alt=""
          />
        </div>
        <div className="p-4 sm:pl-64 absolute w-4/5 h-full bg-gradient-to-r from-black to-transparent  flex flex-col  justify-center">
          <div
            className="title font-bold text-primary text-4xl"
            data-swiper-parallax="-400"
          >
            Avatar: The Way of Water
          </div>
          <div
            className="subtitle hidden sm:block font-bold text-secondary-content"
            data-swiper-parallax="-300"
          >
            Action/Fiction
          </div>

          <div className=" mt-4" data-swiper-parallax="-100">
            <button className="button btn bg-base-content normal-case rounded-xl p-2 text-white ">
              Watch Trailer
            </button>
          </div>
        </div>
      </SwiperSlide>
    );
  };

  return (
    <div ref={ref} className="bg-base-100 flex w-full  h-96 lg:h-screen">
      <div className="w-full h-full">
        <Swiper
          style={{
            height: "100%",
            "--swiper-pagination-color": "rgb(220, 165, 76)",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          parallax={true}
          modules={[Autoplay, Parallax, Pagination]}
          autoplay={{ delay: 5000 }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
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

export default forwardRef(HeroSection);

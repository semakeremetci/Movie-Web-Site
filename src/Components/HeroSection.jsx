import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { forwardRef } from "react";

function HeroSection(props, ref) {
  const randomPic = () => {
    const id = Math.floor(Math.random() * 300);
    return `https://picsum.photos/id/${id}/1200/400`;
  };
  const createSlide = () => {
    return (
      <SwiperSlide className="relative rounded-sm">
        <div className="slide-image absolute top-0 left-0 right-0 h-full">
          <img
            className="bg-contain bg-center max-w-none"
            src={randomPic()}
            alt=""
          />
        </div>
        <div className="p-4 absolute w-1/2 sm:w-1/3 h-full bg-gradient-to-r from-black to-transparent flex flex-col  justify-center">
          <div
            className="title font-bold text-primary text-4xl"
            data-swiper-parallax="-400"
          >
            Filmin Adı
          </div>
          <div
            className="subtitle hidden sm:block font-bold text-primary-content"
            data-swiper-parallax="-300"
          >
            Türü
          </div>
          <div
            className="text text-white hidden sm:block"
            data-swiper-parallax="-200"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor.
            </p>
          </div>
          <div className=" mt-2" data-swiper-parallax="-100">
            <button className="button btn bg-base-content normal-case rounded-xl p-2 text-white ">
              Watch Trailer
            </button>
          </div>
        </div>
      </SwiperSlide>
    );
  };

  return (
    <div ref={ref} className="bg-base-100 flex w-full pt-20 pr-4 sm:px-20">
      <div className="w-full h-64 sm:h-96">
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
          autoplay={{ delay: 3000 }}
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
          {createSlide()}
          {createSlide()}
          {createSlide()}
        </Swiper>
      </div>
    </div>
  );
}

export default forwardRef(HeroSection);

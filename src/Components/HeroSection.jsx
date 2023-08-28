import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

function HeroSection(props) {
  const createSlide = (movie) => {
    return (
      <SwiperSlide
        key={movie.id}
        style={{
          backgroundImage: `url(//image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
        className="relative hero lg:min-h-screen"
      >
        <div className="p-8 sm:pl-28  gap-2 lg:pl-64 absolute w-4/6 h-full bg-gradient-to-r from-black to-transparent  flex flex-col justify-center">
          <div
            className="title font-bold text-primary text-3xl lg:text-5xl"
            data-swiper-parallax="-400"
          >
            {movie.title}
          </div>

          <div
            className="subtitle  font-bold text-secondary-content text-2xl"
            data-swiper-parallax="-300"
          >
            {movie.release_date.split("-")[0]} / {movie.vote_average}
          </div>
          <div className="text-lg">Now Playing</div>
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
    <div className="bg-base-100 flex w-full  h-96 lg:h-screen">
      <div className="w-full h-full">
        <Swiper
          style={{
            height: "100%",
            "--swiper-pagination-color": "rgb(220, 165, 76)",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "18px",
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
          {props.movieData ? (
            props.movieData.map((movie) => createSlide(movie))
          ) : (
            <p>Loading...</p>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSection;

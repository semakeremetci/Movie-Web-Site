import { movieGenres } from "../Assets/movieGenre";

const MovieCard = (props) => {
  return (
    <div className="h-1/2 lg:h-full">
      <img
        className="h-full w-full object-cover object-top"
        src={`https://image.tmdb.org/t/p/original${
          JSON.parse(localStorage.getItem("storedData")) ? (
            JSON.parse(localStorage.getItem("storedData")).backdrop_path ? (
              JSON.parse(localStorage.getItem("storedData")).backdrop_path
            ) : (
              JSON.parse(localStorage.getItem("storedData")).poster_path
            )
          ) : (
            <p>no picture</p>
          )
        }`}
        alt=""
      />
      <div className="hero absolute h-1/2 lg:h-full top-0 lg:bottom-0 bg-gradient-to-t from-black to-transparent px-4 sm:pr-16 sm:pl-28 justify-start">
        <div className="hero-content absolute bottom-0 left-0 flex-col lg:flex-row-reverse px-0 pb-8">
          <div className="font-bold text-primary text-sm lg:text-lg">
            <h1 className="text-xl lg:text-5xl ">{props.title}</h1>
            <p className="pt-4 flex gap-2">
              {props.voteAverage}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.8em"
                viewBox="0 0 576 512"
                fill="white"
                className="mt-1.5"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              {props.voteCount}
            </p>
            <p className="py-2">{props.origin}</p>
            <p className="pb-2">{props.releaseDate}</p>
            <p className="pb-2">{props.type}</p>

            <p className="pb-2">
              {JSON.parse(localStorage.getItem("storedData"))
                ? JSON.parse(localStorage.getItem("storedData")).title
                  ? movieGenres[0].map((genre) => {
                      if (
                        JSON.parse(
                          localStorage.getItem("storedData")
                        ).genre_ids.includes(genre.id)
                      ) {
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
                  : movieGenres[1].map((genre) => {
                      if (
                        JSON.parse(
                          localStorage.getItem("storedData")
                        ).genre_ids.includes(genre.id)
                      ) {
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
                : "no data"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

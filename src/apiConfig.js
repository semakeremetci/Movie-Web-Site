export const apiKey = import.meta.env.VITE_REACT_TMDB_API_KEY;
const today = new Date().toISOString().split("T")[0];
const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 6))
  .toISOString()
  .split("T")[0];
const sortOption = "&vote_average.gte=8.4&vote_count.gte=5000";

export const nowPlayingMovie = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;
export const discoverMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
export const upComingMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=${today}&primary_release_date.lte=${nextMonth}&sort_by=popularity.desc`;
export const topRatedMovie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
export const tvSeriesApi = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}${sortOption}`;
export const searchMovie = (searchQuery) => {
  return `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&include_adult=false&query=${searchQuery}`;
};

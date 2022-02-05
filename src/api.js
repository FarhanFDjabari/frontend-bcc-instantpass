import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const MOVIE_GET_RECOMENDATION = () =>
  axios.get(
    BASE_URL +
      `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=ID`
  );

export const MOVIE_GET_POPULAR = () =>
  axios.get(
    BASE_URL +
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=ID`
  );

export const MOVIE_SEARCH = (value) =>
  axios.get(
    BASE_URL +
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=1`
  );

export const MOVIE_GET_DETAIL = (movieId) =>
  axios.get(
    BASE_URL + "/movie/" + movieId + `?api_key=${API_KEY}&language=en-US`
  );

export const MOVIE_GET_URL = (movieId) =>
  axios.get(
    BASE_URL + "/movie/" + movieId + `/videos?api_key=${API_KEY}&language=en-US`
  );

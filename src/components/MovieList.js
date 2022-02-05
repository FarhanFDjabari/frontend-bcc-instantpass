import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MOVIE_GET_POPULAR, MOVIE_SEARCH } from "../api";

const MovieList = ({ movies }) => {
  const [movieLists, setMovieLists] = useState([]);

  const getMoviePopular = async () => {
    const req = await MOVIE_GET_POPULAR();
    console.log(req.data.results);
    setMovieLists(req.data.results);
  };

  const searchMovie = async () => {
    const req = await MOVIE_SEARCH(movies);
    console.log(req.data.results);
    setMovieLists(req.data.results);
  };

  useEffect(() => {
    getMoviePopular();
  }, []);

  useEffect(() => {
    searchMovie();
  }, [movies]);

  return (
    <div className="grid gap-5 py-12 px-4 justify-center">
      <h1 className="text-center md:text-left font-semibold text-2xl md:text-4xl text-blue-100 hover:text-white transition duration-300">
        <Link to="/">Popular Movies</Link>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {movieLists &&
          movieLists.map((movielist, idx) => (
            <Link
              key={idx}
              to={`/movie-detail/${movielist.id}`}
              className="md:w-72 h-full md:h-full capitalize bg-detailMovie rounded-lg shadow-lg hover:scale-110 duration-700"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movielist.poster_path}`}
                alt=""
                className="object-fill h-full md:h-80 w-full rounded-t-lg"
              />
              <div className="hidden md:flex flex-col p-2 text-center">
                <h2 className="font-semibold text-xl text-blue-50">
                  {movielist.title}
                </h2>
                <p className="font-semibold text-base text-red-400">
                  Release date : {movielist.release_date}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MovieList;

import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Liked = () => {
  const { likedMovies, setLikedMovies } = useAuth();

  return (
    <div className="h-full bg-bgUtama">
      <div className="grid gap-5 py-12 px-4 justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {likedMovies.map((movie) => (
            <Link
              to={`/movie-detail/${movie.id}`}
              className="md:w-72 h-full md:h-full capitalize bg-detailMovie rounded-lg shadow-lg hover:scale-110 duration-700"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
                className="object-fill h-full md:h-80 w-full rounded-t-lg"
              />
              <div className="hidden md:flex flex-col p-2 text-center">
                <h2 className="font-semibold text-xl text-blue-50">
                  {movie.title}
                </h2>
                <p className="font-semibold text-base text-red-400">
                  Release date : {movie.release_date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Liked;

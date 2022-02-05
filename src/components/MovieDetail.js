import _ from "lodash";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { useParams } from "react-router-dom";
import { MOVIE_GET_DETAIL, MOVIE_GET_URL } from "../api";
import useAuth from "../hooks/useAuth";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const [urls, setUrls] = useState([]);
  const [pg, setPg] = useState(true);
  const { id } = useParams();
  const { setLikedMovies, likedMovies } = useAuth();

  if (movie.adult) {
    setPg(false);
  }

  const getMovieDetail = async () => {
    const req = await MOVIE_GET_DETAIL(id);
    console.log(req.data);
    setMovie(req.data);
  };

  const getMovieUrl = async () => {
    const req = await MOVIE_GET_URL(id);
    console.log(req.data.results);
    setUrls(req.data.results);
  };

  const addFavorite = () => {
    if (likedMovies.indexOf(id) == -1) {
      setLikedMovies(_.uniqBy([...likedMovies, movie], "id"));
      // localStorage.setItem(
      //   `liked_movies_${likedMovies.indexOf(id)}`,
      //   likedMovies[likedMovies.indexOf(id)].toString()
      // );
    }
    console.log(likedMovies);
  };

  useEffect(() => {
    getMovieDetail();
    getMovieUrl();
  }, []);

  return (
    <div className="grid h-full w-full bg-bgUtama justify-center py-12 md:py-24">
      <div className="flex flex-col md:flex-row justify-self-center md:p-12 md:h-3/4 md:w-11/12 md:bg-detailMovie rounded-lg md:shadow-2xl text-blue-50">
        <div className="md:basis-1/2 flex flex-col p-4 md:p-12 gap-6">
          <div className="content">
            <div className="grid gap-4 content-center">
              <h1 className="grid-cols-2 text-3xl font-bold">{movie.title}</h1>
              <button
                onClick={addFavorite}
                className=" bg-transparent w-1/2 text-base font-semibold rounded-lg text-orange-400 hover:text-orange-600 transition duration-300"
              >
                <div className="flex flex-row">
                  Add to favorite
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <p className="text-xl font-bold">
              Release Date : {movie.release_date} - {pg && "Parental Guidance"}
            </p>
            <p className="w-11/12 font-semibold">{movie.overview}</p>
          </div>
        </div>
        {urls &&
          urls
            .filter((url) => url.type === "Trailer")
            .slice(0, 1)
            .map((url, idx) => (
              <ReactPlayer
                className="order-first md:order-none basis-1/2 justify-center items-center"
                width="100%"
                // height="100%"
                controls={true}
                id={idx}
                url={`https://www.youtube.com/watch?v=${url.key}`}
              />
            ))}
        {/* <div className="order-first md:grid basis-1/2 justify-center items-center"></div> */}
      </div>
    </div>
  );
};

export default MovieDetail;

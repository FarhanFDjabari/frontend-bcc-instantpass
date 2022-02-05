import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MOVIE_GET_RECOMENDATION } from "../api";

const Hero = () => {
  const [movieLists, setMovieLists] = useState([]);

  const getMovieRecomendation = async () => {
    const req = await MOVIE_GET_RECOMENDATION();
    console.log(req.data.results);
    setMovieLists(req.data.results);
  };

  useEffect(() => {
    getMovieRecomendation();
  }, []);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="text-white">
      <h2>Adaptive height</h2>

      <Slider {...settings}>
        {movieLists &&
          movieLists.map((movielist, idx) => (
            <div>
              <h3>{idx}</h3>
              {/* <img
                src={`https://image.tmdb.org/t/p/original/${movielist.poster_path}`}
                alt=""
              /> */}
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Hero;

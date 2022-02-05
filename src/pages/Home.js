import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

const Home = ({ movies }) => {
  return (
    <div className="h-min-screen bg-bgUtama">
      {/* <Hero /> */}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

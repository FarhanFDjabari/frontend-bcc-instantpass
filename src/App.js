import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";

import "./App.css";
import Liked from "./pages/Liked";

function App() {
  const [movies, setMovies] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);

  const getSearchData = (searchValue) => {
    console.log(searchValue);
    setMovies(searchValue);
  };

  return (
    <div className="App h-full">
      <Router>
        <Navbar movies={movies} getSearchData={getSearchData} />
        <Routes>
          <Route exact path="/" element={<Home movies={movies} />} />
          <Route
            exact
            path="/liked-movies"
            element={
              <Liked
                likedMovies={likedMovies}
                setLikedMovies={setLikedMovies}
              />
            }
          />
          <Route
            exact
            path="/movie-detail/:id"
            element={
              <MovieDetail
                likedMovies={likedMovies}
                setLikedMovies={setLikedMovies}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

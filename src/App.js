import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useAuth, { AuthProvider } from "./hooks/useAuth";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";

import "./App.css";
import Liked from "./pages/Liked";

function App() {
  const [movies, setMovies] = useState("");
  const { likedMovies, setLikedMovies } = useAuth();

  const getSearchData = (searchValue) => {
    console.log(searchValue);
    setMovies(searchValue);
  };

  return (
    <AuthProvider>
      <div className="App h-full">
        <Router>
          <Navbar movies={movies} getSearchData={getSearchData} />
          <Routes>
            <Route exact path="/" element={<Home movies={movies} />} />
            <Route exact path="/liked-movies" element={<Liked />} />
            <Route exact path="/movie-detail/:id" element={<MovieDetail />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

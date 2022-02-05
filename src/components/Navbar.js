import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ movies, getSearchData }) => {
  const [mobile, setMobile] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleClick() {
    if (mobile === true) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }

  return (
    <nav className="md:sticky z-10 top-0 left-0 bg-navbar w-full shadow">
      <div className="container m-auto flex justify-between items-center text-gray-100 transition duration-300">
        <Link
          to="/"
          className="hover:text-gray-500 pl-8 py-4 text-xl font-bold"
        >
          Find Your Movie
        </Link>
        <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
          <Link to="/" className="hover:text-gray-500 py-4 px-6">
            Home
          </Link>
          <Link to="/liked-movies" className="hover:text-gray-500 py-4 px-6">
            Liked
          </Link>
          <Link to="/" className="relative py-4 px-6 ">
            <div className="container flex mx-auto">
              <div className="flex border-2 rounded">
                <button
                  onClick={() => getSearchData(searchValue)}
                  className="flex items-center justify-center px-4 border-r bg-white"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 hover:opacity-50 transition duration-150"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                  </svg>
                </button>
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  className="px-4 py-1 w-full outline-none text-gray-800"
                  placeholder="Search Movie..."
                />
              </div>
            </div>
          </Link>
        </ul>
        <button
          onClick={handleClick}
          className="block md:hidden py-2.5 px-3.5 mx-2 rounded bg-gray-200 text-black"
        >
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
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {mobile === true && (
        <div className="mobile-menu container md:hidden transition duration-500 text-blue-50">
          <Link
            to="/"
            className="block py-2 px-8 text-lg font-medium hover:text-gray-500"
          >
            Home
          </Link>
          <Link
            to="/liked-movies"
            className="block py-2 px-8 text-lg font-medium hover:text-gray-500"
          >
            Liked
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

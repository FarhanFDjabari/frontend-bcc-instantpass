import React from 'react';

const Liked = () => {
  return (
    <div className="h-min-screen bg-bgUtama">
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

export default Liked;

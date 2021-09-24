import React, { useState, useEffect } from "react";
import useMovieList from "../hooks/useMovieList";
import Loader from "../shared/Loader";
import MovieDetail from "./MovieDetail";

const MovieList = () => {
  const { loading, movieList } = useMovieList();
  const [selectedId, setSelectedId] = useState(null);

  const onSelectChange = (event) => {
    console.log(event.target.value);
    setSelectedId(event.target.value);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="select">
            <select
              name=""
              id=""
              defaultValue="Select Movie"
              onChange={(e) => onSelectChange(e)}
            >
              <option value="Select Movie" disabled>
                select Movie
              </option>
              {movieList.map((movie) => (
                <option key={movie.id} value={`${movie.id}`}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>

          {selectedId && <MovieDetail id={selectedId} />}
        </div>
      )}
    </div>
  );
};

export default MovieList;

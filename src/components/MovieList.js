import React, { useState } from "react";
import useMovieList from "../hooks/useMovieList";
import Loader from "../shared/Loader";
import { Select } from "../shared/styles/CharacterTable.styles";
import MovieDetail from "./MovieDetail";

const MovieList = () => {
  const { loading, movieList, err, errMessage } = useMovieList();
  const [selectedId, setSelectedId] = useState(null);

  const onSelectChange = (event) => {
    console.log(event.target.value);
    setSelectedId(event.target.value);
  };

  console.log(err, errMessage);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="select">
            <Select
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
            </Select>
          </div>

          {selectedId && <MovieDetail id={selectedId} />}
        </div>
      )}
    </div>
  );
};

export default MovieList;

import React, { useState, useEffect } from "react";
import useMovieList from "../../hooks/useMovieList";
import Loader from "../../shared/components/Loader";
import { StyledSelect } from "../Table/CharacterTable.styles";
import MovieDetail from "../MovieDetail";
import Select from "../Select";

const MovieList = () => {
  const { loading, movieList, error, errorMessage } = useMovieList();
  const [selectedId, setSelectedId] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const onSelectChange = (event) => {
    setIsLoading(true);
    setSelectedId(event.target.value);
  };

  console.log(error, errorMessage);

  useEffect(() => {
    setIsLoading(false);
  }, [selectedId]);

  return (
    <div>
      {error ? (
        <div>{errorMessage}: connect to the internet</div>
      ) : loading ? (
        <Loader />
      ) : (
        <div>
          <Select
            defaultval="Select Movie"
            data={movieList}
            onSelectChange={onSelectChange}
          />
          {/* <div className="select">
            <StyledSelect defaultValue="Select Movie" onChange={onSelectChange}>
              <option value="Select Movie" disabled>
                Select Movie
              </option>
              {movieList.map((movie) => (
                <option key={movie.id} value={`${movie.id}`}>
                  {movie.title}
                </option>
              ))}
            </StyledSelect>
          </div> */}

          {isloading ? (
            <Loader />
          ) : selectedId ? (
            <MovieDetail id={selectedId} />
          ) : (
            <div>{errorMessage}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieList;

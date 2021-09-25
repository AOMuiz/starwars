import React, { useState, useEffect } from "react";
import useMovieList from "../../hooks/useMovieList";
import Loader from "../../shared/components/Loader";
// import { StyledSelect } from "../../shared/styles/CharacterTable.styles";
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
          {/* <div className="select">
            <StyledSelect
              defaultValue="Select Movie"
              onChange={(e) => onSelectChange(e)}
            >
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
          <Select
            defaultval="Select Movie"
            data={movieList}
            onSelectChange={onSelectChange}
          />
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

import React, { useState, useEffect } from "react";
import useMovieList from "../../hooks/useMovieList";
import Loader from "../../shared/components/Loader";
import MovieDetail from "../MovieDetail";
import Select from "../Select";
import ErrorFallback from "../../ErrorFallBack";
import styled from "styled-components";

const MovieList = () => {
  const { loading, movieList, error, errorMessage } = useMovieList();
  const [selectedId, setSelectedId] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const onSelectChange = (event) => {
    setIsLoading(true);
    setSelectedId(event.target.value);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [selectedId]);

  return (
    <div>
      {error ? (
        <StyledError>
          <ErrorFallback error errorMessage />
          <p>{errorMessage}: connect to the internet</p>
        </StyledError>
      ) : loading ? (
        <Loader />
      ) : (
        <div>
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

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 2rem;
`;

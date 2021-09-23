import React, { useState, useEffect } from "react";
import useMovieDetail from "../hooks/useMovieDetails";
// import { catchError } from "../api/starwarsapi";

const MovieDetail = ({ id }) => {
  const { loading, movieDetail } = useMovieDetail(Number(id));

  return (
    <div>
      {loading ? (
        <h1>Fetching Details</h1>
      ) : (
        <div>
          <h1>{movieDetail.title}</h1>
          <p>{movieDetail.characters}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;

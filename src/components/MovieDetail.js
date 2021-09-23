import React, { useState, useEffect } from "react";
import useMovieDetail from "../hooks/useMovieDetails";
// import { catchError } from "../api/starwarsapi";
import Loader from "../shared/Loader";

const MovieDetail = ({ id }) => {
  const { loading, movieDetail } = useMovieDetail(Number(id));
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    setMovie(movieDetail);
    console.log(movie);
  }, [movie, movieDetail]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="movieDetails">
          <h1 className="movieTitle">{movie.title}</h1>
          <p className="movieDescription">{movie.description}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;

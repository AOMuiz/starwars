import { useState, useEffect } from "react";
import { getSingleMovie } from "../api/starwarsapi";

export default function useMovieDetail(movieId) {
  const [movieDetail, setMovieDetail] = useState({
    title: null,
    description: null,
    characters: [],
  });
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const movieData = await getSingleMovie(movieId).catch((err) => {
        setLoading(false);
        setError(true);
        setErrorMessage(err.message);
        mounted = false;
        return;
      });
      if (mounted) {
        setMovieDetail(movieData);
        setLoading(false);
        setError(false);
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, [movieId]);

  return {
    loading,
    movieDetail,
    error,
    errorMessage,
  };
}

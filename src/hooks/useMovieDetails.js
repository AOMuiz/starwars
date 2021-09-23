import { useState, useEffect } from "react";
import { getSingleMovie } from "../api/starwarsapi";

export default function useMovieDetail(movieId) {
  const [movieDetail, setMovieDetail] = useState({
    title: null,
    description: null,
    characters: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const movieData = await getSingleMovie(movieId);
      if (mounted) {
        setMovieDetail(movieData);
        setLoading(false);
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
  };
}

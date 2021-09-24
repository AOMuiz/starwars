import { useState, useEffect } from "react";
import { getAllMovie } from "../api/starwarsapi";

export default function useMovieList() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const movieDataType = await getAllMovie().catch((err) => {
        setLoading(false);
        setError(true);
        setErrorMessage(err.message);
        mounted = false;
        return;
      });
      if (mounted) {
        setMovieList(movieDataType);
        setLoading(false);
        setError(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return {
    loading,
    movieList,
    errorMessage,
    error,
  };
}

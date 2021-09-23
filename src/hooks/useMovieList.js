import { useState, useEffect } from "react";
import { getAllMovie } from "../api/starwarsapi";

export default function useMovieList() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const movieDataType = await getAllMovie();
      if (mounted) {
        setMovieList(movieDataType);
        setLoading(false);
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
  };
}

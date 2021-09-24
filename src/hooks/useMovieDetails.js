import { useState, useEffect } from "react";
import { getSingleMovie } from "../api/starwarsapi";

export default function useMovieDetail(movieId) {
  const [movieDetail, setMovieDetail] = useState({
    title: null,
    description: null,
    characters: [],
  });
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

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
    err,
  };
}

// .catch((e) => {
//         console.log(
//           "There has been a problem with your fetch operation: " + e.message
//         );
//         setErr(true);
//       });

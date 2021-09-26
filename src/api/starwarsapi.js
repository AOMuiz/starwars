import { API_URL } from "./baseurl";

export const getAllMovie = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw Error("could not fetch the data for that resource");
  }

  const resJson = await res.json();
  const editedMovieList = resJson.results.map((movie) => ({
    id: Number(movie.url.split("/").filter(Boolean).pop()),
    title: movie.title,
    description: movie.opening_crawl,
    releaseDate: movie.release_date,
  }));
  return editedMovieList;
};

export const getSingleMovie = async (id) => {
  const res = await fetch(`${API_URL}${id}/`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const resJson = await res.json();
  const resCharacters = resJson.characters.map((url) =>
    fetch(url)
      .then((data) => data.json())
      .then((c) => {
        return c;
      })
  );

  const characters = await Promise.all(resCharacters);
  const data = {
    characters,
    description: resJson.opening_crawl,
    releaseDate: resJson.release_date,
    title: resJson.title,
  };
  return data;
};

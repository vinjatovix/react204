import { OMDB_HOST } from "../src/constants";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

export const searchMovies = async (search) => {
  const response = await fetch(OMDB_HOST + `?apikey=${API_KEY}&s=${search}`);
  const json = await response.json();
  if (json.Response === "False") {
    throw new Error(json.Error);
  }

  return json.Search.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));
};

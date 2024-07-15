import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../../services/movies";

const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (!search || search.trim() === "" || search === previousSearch.current) {
      return;
    }

    try {
      setError(null);
      setLoading(true);
      previousSearch.current = search;
      const movies = await searchMovies(search);
      setMovies(movies);
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return { loading, movies: sortedMovies, error, getMovies };
};

export default useMovies;

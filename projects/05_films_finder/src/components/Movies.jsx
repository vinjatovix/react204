import PropTypes from "prop-types";

export const ListOfMovies = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id} className="movie">
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
          <div className="movie-info"></div>
        </li>
      ))}
    </ul>
  );
};

ListOfMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};

export const NoResults = () => {
  return <p className="no-results">No results found</p>;
};

export const Movies = ({ movies, error }) => {
  console.log(movies);
  const hasMovies = movies && movies.length > 0;

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <main>{hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />}</main>
  );
};

Movies.propTypes = {
  movies: PropTypes.array,
  error: PropTypes.string,
};

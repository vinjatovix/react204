import { useCallback, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies, useSearch } from "./hooks";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, validationError } = useSearch();
  const { loading, movies, getMovies, error } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => getMovies({ search }), 300),
    [getMovies]
  );

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    if (event.target.value.startsWith(" ")) {
      return;
    }
    const newSearch = event.target.value;

    setSearch(newSearch);

    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Films Finder</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            placeholder="Amelie, Star Wars..."
            value={search}
            onChange={handleChange}
          />
          <label htmlFor="sort">
            Sort by title
            <input type="checkbox" id="sort" onChange={handleSort} />
          </label>
          <button type="submit">{loading ? "Loading..." : "Search"}</button>
        </form>
        {validationError && <p className="error">{validationError}</p>}
      </header>

      <main>
        <Movies movies={movies} error={error} />
      </main>
    </div>
  );
}

export default App;

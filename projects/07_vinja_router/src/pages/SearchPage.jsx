import PropTypes from "prop-types";
import { useEffect } from "react";

const SearchPage = ({ routeParams }) => {
  useEffect(() => {
    document.title = `Search: ${routeParams.query}`;
  }, [routeParams.query]);

  return (
    <>
      <h1>Search Page</h1>
      <p>Search query: {routeParams.query}</p>
    </>
  );
};

export default SearchPage;

SearchPage.propTypes = {
  routeParams: PropTypes.object,
};

import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: 3000,
  });

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

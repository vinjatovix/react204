import { useContext } from "react";
import { FilterContext } from "../context/filter";

const useFilters = () => {
  const { filters, setFilters } = useContext(FilterContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      const category =
        filters.category === "all" || product.category === filters.category;
      const price = product.price <= filters.maxPrice;

      return category && price;
    });
  };

  return { filters, setFilters, filterProducts };
};

export default useFilters;

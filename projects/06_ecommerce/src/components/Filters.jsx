import React from "react";
import "./Filters.css";
import { useId } from "react";
import useFilters from "../hooks/useFilters";

const Filters = () => {
  const { filters, setFilters } = useFilters();
  const maxPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMaxPrice = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice: parseInt(event.target.value),
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={maxPriceFilterId}>Max price:</label>
        <input
          type="range"
          id={maxPriceFilterId}
          name="price"
          min="0"
          max="3000"
          onChange={handleChangeMaxPrice}
          value={filters.maxPrice}
        />
        <span>${filters.maxPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category:</label>
        <select
          id={categoryFilterId}
          name="category"
          onChange={handleChangeCategory}
        >
          <option value="all">All</option>
          <option value="home-decoration">Decoration</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;

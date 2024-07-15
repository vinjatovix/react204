import React from "react";
import "./Footer.css";
import useFilters from "../hooks/useFilters";
import useCart from "../hooks/useCart";

const Footer = () => {
  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      <ul>
        <li>Max price: ${filters.maxPrice}</li>
        <li>Category: {filters.category}</li>
      </ul>
    </footer>
  );
};

export default Footer;

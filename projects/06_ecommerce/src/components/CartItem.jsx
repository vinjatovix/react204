import React from "react";
import useCart from "../hooks/useCart";
import PropTypes from "prop-types";

const CartItem = ({ product, addToCart }) => {
  return (
    <li key={product.id}>
      <img src={product.thumbnail} alt={product.title} />

      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>

      <footer>
        <small>Quantity: {product.quantity}</small>
        <button onClick={() => addToCart(product)}>+1</button>
      </footer>
    </li>
  );
};

export default CartItem;

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

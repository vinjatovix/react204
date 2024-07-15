import React from "react";
import PropTypes from "prop-types";
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import useCart from "../hooks/useCart";

const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product.id);

          return (
            <li key={product.id} className="product">
              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? "red" : "green" }}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product.id)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;

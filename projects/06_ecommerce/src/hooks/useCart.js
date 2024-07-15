import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart";

const useCart = () => {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return cart;
};

export default useCart;

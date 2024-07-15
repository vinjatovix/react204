import { createContext } from "react";
import PropTypes from "prop-types";
import useCartReducer from "../hooks/useCartReducer";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

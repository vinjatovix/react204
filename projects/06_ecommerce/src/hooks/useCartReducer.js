import { useReducer } from "react";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/cart";
import { initialState, cartReducer } from "../reducers/cartReducer";

const useCartReducer = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useCartReducer;

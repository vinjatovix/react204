import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cart";

const localStorageCartInitialState = JSON.parse(
  window.localStorage.getItem("cart")
);

const updateLocalStorage = (cart) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
};

export const initialState = localStorageCartInitialState || [];

const UPDATE_STATE_BY_ACTION = {
  [ADD_TO_CART]: (state, payload) => {
    const productInCartIndex = state.findIndex((p) => p.id === payload.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(state);
      newCart[productInCartIndex].quantity += 1;
      updateLocalStorage(newCart);

      return newCart;
    }

    const updatedCart = [...state, { ...payload, quantity: 1 }];
    updateLocalStorage(updatedCart);

    return updatedCart;
  },
  [REMOVE_FROM_CART]: (state, payload) => {
    const filteredCart = state.filter((product) => product.id !== payload);
    updateLocalStorage(filteredCart);

    return filteredCart;
  },
  [CLEAR_CART]: () => {
    updateLocalStorage([]);

    return [];
  },
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  const handler = UPDATE_STATE_BY_ACTION[type];

  return handler ? handler(state, payload) : state;
};

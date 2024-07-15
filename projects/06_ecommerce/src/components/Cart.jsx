import React from "react";
import "./Cart.css";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </ul>

        <button className="clear-cart" onClick={clearCart}>
          <ClearCartIcon />
        </button>

        <footer>
          <strong>Total: ${totalPrice}</strong>
        </footer>
      </aside>
    </>
  );
};

export default Cart;

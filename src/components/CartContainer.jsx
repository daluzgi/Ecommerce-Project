import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./CartView/EmptyCart";
import CartView from "./CartView/CartView";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>{!cart.length ? <EmptyCart></EmptyCart> : <CartView></CartView>}</div>
  );
};

export default CartContainer;

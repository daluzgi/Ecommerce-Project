import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

const CartView = () => {
  const { cart, clear, removeItem, getTotalPrice } = useContext(CartContext);
  console.log(getTotalPrice());
  return (
    <div>
      <h2>Tu carrito</h2>
      <div>
        {cart.map((compra) => {
          return (
            <div
              key={compra.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "2rem",
              }}
            >
              <img
                src={compra.img}
                alt={compra.name}
                style={{ width: "10rem" }}
              ></img>
              <span>{compra.name}</span>
              <span>${compra.price}</span>
              <span>{compra.quantity}</span>
              <span>Precio final: ${compra.price * compra.quantity},00</span>
              <button
                className="btn btn-danger"
                onClick={() => removeItem(compra.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        Total a pagar: ${getTotalPrice()},00
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          padding: "2rem",
        }}
      >
        <button className="btn btn-danger" onClick={clear}>
          Vaciar carrito
        </button>
        <Link className="btn btn-success" to="/checkout">
          Terminar compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;

import React from "react";
import { Link } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart-container">
      <h2>Tu carrito está vacío 🛒</h2>
      <p>¡Agregá productos para comenzar tu adopción o compra!</p>
      <Link to="/" className="btn-return">
        Volver a la tienda
      </Link>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Carrito vacío"
        className="empty-cart-img"
      />
    </div>
  );
};

export default EmptyCart;

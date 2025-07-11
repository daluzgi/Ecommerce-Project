import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h2>Tu carrito esta vacio</h2>
      <h3>Te invitamos a ir a nuestras categorias</h3>
      <Link className="btn btn-dark" to={"/"}>
        Ir al home
      </Link>
    </div>
  );
};

export default EmptyCart;
